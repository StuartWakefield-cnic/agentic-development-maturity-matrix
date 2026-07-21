import React from "react";
import CriterionItem from "./CriterionItem";
import { itemId } from "../utils/scoring";
import { PROGRESS_VARIANTS } from "./progress";
import { useProgressVariant } from "../context/ProgressVariantContext";

export default function Dimension({ dim, levelNames, citations, checked, onToggle, score, isOpen, onToggleOpen }) {
  const { variant } = useProgressVariant();
  const active = PROGRESS_VARIANTS.find((v) => v.key === variant) || PROGRESS_VARIANTS[0];
  const RailComponent = active.Component;
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
      <div className={`dim-body rail-${active.layout}`}>
        <RailComponent dim={dim} levelNames={levelNames} score={score} checked={checked} />
        <div className="levels">
          {dim.levels.map((items, li) => (
            <div className="lvl" id={`${dim.id}-level-${li}`} key={li}>
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
