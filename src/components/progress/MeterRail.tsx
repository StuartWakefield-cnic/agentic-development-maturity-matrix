import React from "react";
import { blockingItems } from "../../utils/scoring";
import type { RailProps } from "../../types/domain";

const MAX_CHIPS = 3;

export default function MeterRail({ dim, levelNames, score, checked }: RailProps) {
  const blockers = score.attained < 4 ? blockingItems(dim, score, checked) : [];

  return (
    <div className="rail-meter dim-rail">
      <div className="meter-track">
        {[0, 1, 2, 3].map((l) => {
          const p = score.per[l];
          const frac = p.total ? Math.min(1, p.done / p.total) : 0;
          const isDone = l < score.attained;
          const isCurrent = !isDone && l === score.attained;
          const state = isDone ? "done" : isCurrent ? "current" : "future";
          return (
            <div className={`meter-seg meter-${state}`} key={l}>
              <div className="meter-seg-fill" style={{ width: `${Math.round(frac * 100)}%` }} />
            </div>
          );
        })}
      </div>
      <div className="meter-labels">
        {[0, 1, 2, 3].map((l) => {
          const isDone = l < score.attained;
          const isCurrent = !isDone && l === score.attained;
          const state = isDone ? "done" : isCurrent ? "current" : "future";
          return (
            <div className={`meter-lab meter-lab-${state}`} key={l}>
              <span className="meter-lvl">L{l + 1}</span>
              <span className="meter-name">{levelNames[l]}</span>
            </div>
          );
        })}
      </div>
      {blockers.length > 0 && (
        <div className="rail-blockers">
          <span className="rail-blockers-label">Blocking L{score.attained + 1}:</span>
          {blockers.slice(0, MAX_CHIPS).map((b, i) => (
            <span className="blocker-chip" key={i} title={b.title}>
              {b.title}
            </span>
          ))}
          {blockers.length > MAX_CHIPS && (
            <span className="blocker-chip blocker-chip-more">+{blockers.length - MAX_CHIPS} more</span>
          )}
        </div>
      )}
      {score.attained === 4 && <div className="rail-complete">Elite — every gate complete</div>}
    </div>
  );
}
