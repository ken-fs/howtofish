"use client";

import { useState } from "react";
import { TRAILER_YOUTUBE_ID } from "@/data/media";

/**
 * Lite YouTube facade — shows the trailer thumbnail with a play button and only
 * loads the (cookieless) YouTube iframe on click. Keeps the page fast and avoids
 * a third-party request until the user actually wants the video.
 */
export function TrailerEmbed() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-trench">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${TRAILER_YOUTUBE_ID}?autoplay=1`}
          title="How to Fish — official release date trailer"
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder={0}
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full cursor-pointer"
          aria-label="Play the How to Fish trailer"
        >
          <img
            src="/game/trailer-thumb.webp"
            alt="How to Fish official trailer thumbnail"
            width={1280}
            height={720}
            className="h-full w-full object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors group-hover:bg-black/10">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-lure/90 shadow-lg transition-transform group-hover:scale-110">
              <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-trench" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
          <span className="absolute bottom-2 left-3 text-xs text-fg/90 drop-shadow">
            Watch the trailer
          </span>
        </button>
      )}
    </div>
  );
}
