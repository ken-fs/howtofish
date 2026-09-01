"use client";

import { useState } from "react";

export function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard?.writeText(value).then(
          () => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          },
          () => {},
        );
      }}
      className="sonar-panel px-3 py-1 text-sm font-medium text-sonar hover:border-sonar"
      aria-label={`Copy ${value}`}
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
