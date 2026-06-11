"use client";

import { useEffect, useRef, useState } from "react";

// Lily — tiny pixel cat in a Daredevil helmet.
// Four-direction sprites like a classic RPG: side view left/right,
// back view running up, front view running down. Sits facing you on arrival.

const PX = 2; // size of one sprite pixel
const SPEED = 90; // px per second — a stroll, not a chase

// k = fur, r = helmet, w = eye white, s = sparkle, p = pupil, . = empty
const SIT = [
  "...r........r...",
  "...rr......rr...",
  "..rrrrrrrrrrrr..",
  "..rrrrrrrrrrrr..",
  "..kkkkkkkkkkkk..",
  "..kwwwwkkwwwwk..",
  "..kwspwkkwspwk..",
  "..kwppwkkwppwk..",
  "..kwwwwkkwwwwk..",
  "..kkkkkkkkkkkk..",
  "...kkkkkkkkkk...",
  "...kkkkkkkkkk...",
  "..kkkkkkkkkkkk.k",
  "..kkkkkkkkkkkkkk",
  "..kk..kkkk..kk..",
];

// side view, facing right — four legs, four-frame gallop
const SIDE_TOP = [
  "............r....r..",
  "............rr..rr..",
  "............rrrrrr..",
  "............rrrrrr..",
  "..kk........kkkkkk..",
  "...kk.......kwwwwk..",
  "....kk......kwspwk..",
  ".....kkkkkkkkwppwk..",
  ".....kkkkkkkkwwwwk..",
  ".....kkkkkkkkkkkk...",
];
const SIDE_LEGS_A = [
  ".....kk...kk.kk...kk",
  ".....kk...kk.kk...kk",
];
const SIDE_LEGS_B = [
  "......kk.kk...kk.kk.",
  "......kk.kk...kk.kk.",
];
const SIDE_LEGS_C = [
  "......kk..kk..kk..kk",
  "......kk..kk..kk..kk",
];
const SIDE_FRAMES = [
  [...SIDE_TOP, ...SIDE_LEGS_A],
  [...SIDE_TOP, ...SIDE_LEGS_C],
  [...SIDE_TOP, ...SIDE_LEGS_B],
  [...SIDE_TOP, ...SIDE_LEGS_C],
];

// front view — running toward you, big eyes visible
const DOWN_TOP = [
  "...r........r...",
  "...rr......rr...",
  "..rrrrrrrrrrrr..",
  "..rrrrrrrrrrrr..",
  "..kkkkkkkkkkkk..",
  "..kwwwwkkwwwwk..",
  "..kwspwkkwspwk..",
  "..kwppwkkwppwk..",
  "..kwwwwkkwwwwk..",
  "..kkkkkkkkkkkk..",
  "...kkkkkkkkkk...",
  "...kkkkkkkkkk...",
];
const DOWN_FRAMES = [
  [...DOWN_TOP, "...kk......kk...", "...kk......kk..."],
  [...DOWN_TOP, ".....kk..kk.....", ".....kk..kk....."],
];

// back view — running away, tail swishing up beside her
const UP_TOP = [
  "...r........r...",
  "...rr......rr...",
  "..rrrrrrrrrrrr..",
  "..rrrrrrrrrrrr..",
  "..rrrrrrrrrrrr..",
  "..kkkkkkkkkkkk..",
  "..kkkkkkkkkkkk.k",
  "...kkkkkkkkkk..k",
  "...kkkkkkkkkk.k.",
  "..kkkkkkkkkkkk..",
  "..kkkkkkkkkkkk..",
];
const UP_FRAMES = [
  [...UP_TOP, "...kk......kk...", "...kk......kk..."],
  [...UP_TOP, ".....kk..kk.....", ".....kk..kk....."],
];

const COLORS: Record<string, string> = {
  k: "var(--ink)",
  r: "var(--accent)",
  w: "#ffffff",
  p: "#17120f",
  s: "#ffffff",
};

type Dir = "left" | "right" | "up" | "down";

function Sprite({ map }: { map: string[] }) {
  return (
    <svg
      width={map[0].length * PX}
      height={map.length * PX}
      shapeRendering="crispEdges"
      aria-hidden
    >
      {map.flatMap((row, y) =>
        [...row].map((c, x) =>
          c === "." ? null : (
            <rect
              key={`${x}-${y}`}
              x={x * PX}
              y={y * PX}
              width={PX}
              height={PX}
              fill={COLORS[c]}
            />
          )
        )
      )}
    </svg>
  );
}

export default function Mascot() {
  const wrap = useRef<HTMLDivElement>(null);
  const [sitting, setSitting] = useState(true);
  const [dir, setDir] = useState<Dir>("right");
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const pos = { x: 90, y: window.innerHeight - 130 };
    const target = { x: pos.x, y: pos.y };
    let mode: "sit" | "run" = "sit";
    let raf = 0;
    let last = 0;
    let lastStep = 0;

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY + 28; // settle just below the pointer
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const tick = (t: number) => {
      const dt = last ? Math.min((t - last) / 1000, 0.05) : 0;
      last = t;

      const dx = target.x - pos.x;
      const dy = target.y - pos.y;
      const dist = Math.hypot(dx, dy);

      // only get up once the cursor has wandered off a bit
      if (mode === "sit" && dist > 60) {
        mode = "run";
        setSitting(false);
      }

      if (mode === "run") {
        if (dist < 6) {
          mode = "sit";
          setSitting(true);
        } else {
          const step = Math.min(SPEED * dt, dist);
          pos.x += (dx / dist) * step;
          pos.y += (dy / dist) * step;

          // dominant axis picks the sprite; slight bias keeps diagonals from flickering
          setDir(
            Math.abs(dx) > Math.abs(dy) * 1.15
              ? dx < 0
                ? "left"
                : "right"
              : dy < 0
                ? "up"
                : "down"
          );

          if (t - lastStep > 130) {
            lastStep = t;
            setFrame((f) => (f + 1) % 4);
          }
        }
      }

      if (wrap.current) {
        wrap.current.style.transform = `translate3d(${pos.x - 18}px, ${pos.y - 14}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  const map = sitting
    ? SIT
    : dir === "up"
      ? UP_FRAMES[frame % 2]
      : dir === "down"
        ? DOWN_FRAMES[frame % 2]
        : SIDE_FRAMES[frame];

  return (
    <div className="pointer-events-none fixed inset-0 z-40 hidden md:block" aria-hidden>
      <div ref={wrap} className="absolute left-0 top-0 will-change-transform">
        <button
          className="group pointer-events-auto relative cursor-pointer"
          onClick={() => window.dispatchEvent(new CustomEvent("lily-chat"))}
          tabIndex={-1}
        >
          {/* comic speech bubble */}
          <div className="absolute -top-10 left-1/2 origin-bottom -translate-x-1/2 scale-0 opacity-0 transition-all duration-200 ease-out group-hover:scale-100 group-hover:opacity-100">
            <div className="-rotate-3 whitespace-nowrap rounded-lg border-2 border-dotted border-ink bg-paper px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-ink">
              wanna chat? press &lsquo;C&rsquo;
            </div>
            <div className="mx-auto -mt-1 h-2 w-2 rotate-45 border-b-2 border-r-2 border-dotted border-ink bg-paper" />
          </div>

          <div style={{ transform: dir === "left" && !sitting ? "scaleX(-1)" : "none" }}>
            <Sprite map={map} />
          </div>
        </button>
      </div>
    </div>
  );
}
