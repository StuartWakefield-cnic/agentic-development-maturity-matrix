import React from "react";

export default function VerticalStepperRail({ dim, levelNames, score, checked }) {
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
      {score.attained === 4 && <div className="rail-complete">Elite — every gate complete</div>}
    </div>
  );
}
