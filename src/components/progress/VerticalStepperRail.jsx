import React from "react";
import { blockingItems } from "../../utils/scoring";

const MAX_CHIPS = 3;

export default function VerticalStepperRail({ dim, levelNames, score, checked }) {
  const blockers = score.attained < 4 ? blockingItems(dim, score, checked) : [];

  return (
    <div className="rail-vstepper dim-rail">
      <div className="vstepper-col">
        {[0, 1, 2, 3].map((l) => {
          const p = score.per[l];
          const frac = p.total ? Math.min(1, p.done / p.total) : 0;
          const isDone = l < score.attained;
          const isCurrent = !isDone && l === score.attained;
          const state = isDone ? "done" : isCurrent ? "current" : "future";
          return (
            <React.Fragment key={l}>
              {l > 0 && <div className={`vstep-track${l < score.attained ? " done" : ""}`} />}
              <div className={`vstep vstep-${state}`}>
                <div
                  className="vstep-node"
                  style={
                    !isDone && frac > 0
                      ? {
                          background: `conic-gradient(${
                            isCurrent ? "var(--amber)" : "var(--amber-soft)"
                          } ${Math.round(frac * 360)}deg, var(--line-strong) 0deg)`,
                        }
                      : undefined
                  }
                >
                  <span className="vstep-node-in">{isDone ? "✓" : `${p.done}/${p.total}`}</span>
                </div>
                <div className="vstep-lab">
                  <span className="vstep-lvl">L{l + 1}</span>
                  <span className="vstep-name">{levelNames[l]}</span>
                  {state === "future" && <span className="vstep-count">{p.total} practices</span>}
                </div>
              </div>
            </React.Fragment>
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
