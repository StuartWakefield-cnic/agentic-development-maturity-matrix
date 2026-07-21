import React from "react";
import CriterionItem from "./CriterionItem";
import { itemId } from "../utils/scoring";

function GateRail({ score }) {
  const segments = [];
  for (let l = 0; l < 4; l++) {
    const p = score.per[l];
    const frac = p.total ? p.done / p.total : 0;
    const state = l < score.attained ? "done" : p.done > 0 ? "part" : "";
    segments.push(
      <div key={`dot-${l}`} className={`gate-dot ${state}`.trim()} />,
      <div key={`lab-${l}`} className="gate-lab">
        L{l + 1}
      </div>
    );
    if (l < 3) {
      segments.push(
        <div key={`seg-${l}`} className={`gate-seg ${state}`.trim()}>
          <div className="fill" style={{ height: `${Math.round(frac * 100)}%` }} />
        </div>
      );
    }
  }
  return (
    <div className="gate-rail" aria-hidden="true">
      {segments}
    </div>
  );
}

export default function Dimension({ dim, levelNames, citations, checked, onToggle, score, isOpen, onToggleOpen }) {
  const total = dim.levels.flat().length;
  const done = dim.levels.reduce(
    (a, items, li) => a + items.filter((_, ii) => checked[itemId(dim.id, li, ii)]).length,
    0
  );

  return (
    <div className={`dim${isOpen ? " open" : ""}`} id={`dim-${dim.id}`}>
      <button className="dim-head" aria-expanded={isOpen} onClick={() => onToggleOpen(dim.id)}>
        <span className="dim-glyph">{dim.glyph}</span>
        <span className="dim-title">
          {dim.name}
          <small>{dim.small}</small>
        </span>
        <span className="dim-state">
          L{score.attained} · {Math.round((done / total) * 100)}%
        </span>
        <svg className="chev" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
          <path
            d="M4 2l6 5-6 5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="dim-body">
        <GateRail score={score} />
        <div className="levels">
          {dim.levels.map((items, li) => (
            <div className="lvl" key={li}>
              <div className="lvl-h">
                <span className={`lvl-chip l${li + 1}`}>L{li + 1}</span>
                <span className="lvl-name">{levelNames[li]}</span>
                <span className="lvl-count">
                  {score.per[li].done}/{score.per[li].total}
                </span>
              </div>
              {items.map((it, ii) => {
                const id = itemId(dim.id, li, ii);
                return (
                  <CriterionItem
                    key={id}
                    id={id}
                    item={it}
                    citations={citations}
                    checked={checked[id]}
                    onToggle={onToggle}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
