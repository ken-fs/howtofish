import { SCREENSHOTS } from "@/data/media";

/** Official screenshot gallery. Plain <img> (static export, images unoptimized). */
export function Screenshots({ limit }: { limit?: number }) {
  const shots = limit ? SCREENSHOTS.slice(0, limit) : SCREENSHOTS;
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {shots.map((s) => (
        <img
          key={s.src}
          src={s.src}
          alt={s.alt}
          width={1280}
          height={720}
          loading="lazy"
          className="w-full rounded border-2 border-kelp object-cover"
        />
      ))}
    </div>
  );
}
