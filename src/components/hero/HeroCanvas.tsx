"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const RED = "#e10600";

// dot-wave field dimensions (plane units / grid resolution)
const W = 30;
const H = 16;
const COLS = 128;
const ROWS = 64;

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uPixelRatio;
  varying float vIntensity;
  varying float vEdge;

  void main() {
    vec3 p = position;

    // layered travelling waves
    float wave =
      sin(p.x * 0.55 + uTime * 0.9) * 0.45 +
      sin(p.y * 0.85 - uTime * 0.6) * 0.35 +
      sin((p.x + p.y) * 0.28 + uTime * 0.45) * 0.55;

    // ripple ring expanding from the cursor
    float d = distance(p.xy, uMouse);
    float ripple = exp(-d * 0.45) * sin(d * 2.4 - uTime * 4.0) * 1.3;

    p.z += wave + ripple;

    vIntensity = smoothstep(-1.3, 1.6, p.z);
    vEdge = (1.0 - abs(position.x) / ${(W / 2).toFixed(1)}) *
            (1.0 - abs(position.y) / ${(H / 2).toFixed(1)});

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uPixelRatio * (1.4 + vIntensity * 3.2) * (24.0 / -mv.z);
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 uColor;
  varying float vIntensity;
  varying float vEdge;

  void main() {
    float r = length(gl_PointCoord - 0.5);
    float circle = smoothstep(0.5, 0.12, r);
    float alpha = circle * (0.16 + vIntensity * 0.6) * smoothstep(0.0, 0.35, vEdge);
    if (alpha < 0.01) discard;
    gl_FragColor = vec4(uColor, alpha);
  }
`;

function WaveField() {
  const mat = useRef<THREE.ShaderMaterial>(null!);
  const target = useRef(new THREE.Vector2(0, -99));
  const { gl } = useThree();

  const geometry = useMemo(() => {
    const positions = new Float32Array(COLS * ROWS * 3);
    let i = 0;
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        positions[i++] = (c / (COLS - 1) - 0.5) * W;
        positions[i++] = (r / (ROWS - 1) - 0.5) * H;
        positions[i++] = 0;
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, []);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, -99) },
      uColor: { value: new THREE.Color(RED) },
      uPixelRatio: { value: 1 },
    }),
    []
  );

  useEffect(() => {
    uniforms.uPixelRatio.value = gl.getPixelRatio();
    const onMove = (e: PointerEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = -((e.clientY / window.innerHeight) * 2 - 1);
      // approximate screen position in the tilted plane's local space
      target.current.set(nx * (W / 2) * 0.9, ny * (H / 2) * 1.3);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [gl, uniforms]);

  useFrame((state, delta) => {
    uniforms.uTime.value = state.clock.elapsedTime;
    const m = uniforms.uMouse.value;
    m.lerp(target.current, Math.min(1, delta * 5));
  });

  return (
    <points geometry={geometry} rotation={[1.05, 0, 0]} position={[0, 2.6, 0]}>
      <shaderMaterial
        ref={mat}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
      />
    </points>
  );
}

export default function HeroCanvas() {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        // wave lives at the top; fade it out before it reaches the text
        maskImage: "linear-gradient(to bottom, black 32%, transparent 72%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 32%, transparent 72%)",
      }}
      aria-hidden
    >
      <Canvas
        camera={{ position: [0, -0.6, 9], fov: 55 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
      >
        <WaveField />
      </Canvas>
    </div>
  );
}
