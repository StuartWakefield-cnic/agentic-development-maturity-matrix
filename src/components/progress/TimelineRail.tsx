import React from "react";
import type { RailProps } from "../../types/domain";

export default function TimelineRail({ dim, levelNames, score }: RailProps) {
  return (
    <nav className="rail-timeline dim-rail" aria-label={`${dim.name} level index`}>
      {[0, 1, 2, 3].map((l) => {
        const p = score.per[l];
        const frac = p.total ? Math.min(1, p.done / p.total) : 0;
        const isDone = l < score.attained;
        const isCurrent = !isDone && l === score.attained;
        const state = isDone ? "done" : isCurrent ? "current" : "future";
        return (
          <a className={`timeline-row timeline-${state}`} key={l} href={`#${dim.id}-level-${l}`}>
            <span className="timeline-marker">
              <span className="timeline-dot">{isDone ? "✓" : ""}</span>
              {l < 3 && <span className="timeline-line" />}
            </span>
            <span className="timeline-body">
              <span className="timeline-head">
                <span className={`lvl-chip l${l + 1}`}>L{l + 1}</span>
                <span className="timeline-name">{levelNames[l]}</span>
                <span className="timeline-count">
                  {p.done}/{p.total}
                </span>
              </span>
              <span className="timeline-meter">
                <span
                  className="timeline-meter-fill"
                  style={{
                    width: `${Math.round(frac * 100)}%`,
                    background: isDone ? "var(--blue)" : isCurrent ? "var(--amber)" : "var(--amber-soft)",
                  }}
                />
              </span>
            </span>
          </a>
        );
      })}
    </nav>
  );
}
