import Image from "next/image";
import { techLogos } from "@/data/resume";

export default function Marquee() {
  return (
    <div className="marquee overflow-hidden border-y border-line py-3">
      <div className="marquee-track flex w-max">
        {[0, 1].map((half) => (
          <div key={half} aria-hidden={half === 1} className="flex shrink-0 items-center">
            {techLogos.map((item) => (
              <span
                key={item.name}
                className="flex items-center gap-2.5 px-5 text-xs uppercase tracking-[0.2em] text-ink-dim transition-colors hover:text-ink"
              >
                {item.src && (
                  <Image
                    src={item.src}
                    alt=""
                    width={20}
                    height={20}
                    className="h-5 w-5 object-contain grayscale transition-[filter] duration-300 hover:grayscale-0"
                  />
                )}
                {item.name}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
