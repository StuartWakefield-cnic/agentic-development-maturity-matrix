import React from "react";
import type { RailProps } from "../../types/domain";

export default function VerticalStepperRail({ levelNames, score }: RailProps) {
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
                  style={{ "--vstep-frac": `${frac * 360}deg` } as React.CSSProperties}
                >
                  <span className="vstep-node-in">{isDone ? "✓" : `${p.done}/${p.total}`}</span>
                </div>
                <div className="vstep-lab">
                  <span className="vstep-lvl">L{l + 1}</span>
                  <span className="vstep-name">{levelNames[l]}</span>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
      {score.attained === 4 && <div className="rail-complete">Elite — every gate complete</div>}
    </div>
  );
}
