import React from "react";
import CriterionItem from "./CriterionItem";
import { itemId } from "../utils/scoring";
import type { Dimension as DimensionType, Citations, Checked, Score } from "../types/domain";
import VerticalStepperRail from "./progress/VerticalStepperRail";

interface DimensionProps {
  dim: DimensionType;
  levelNames: string[];
  citations: Citations;
  checked: Checked;
  onToggle: (id: string, isChecked: boolean) => void;
  score: Score;
  isOpen: boolean;
  onToggleOpen: (id: string) => void;
}

export default function Dimension({
  dim,
  levelNames,
  citations,
  checked,
  onToggle,
  score,
  isOpen,
  onToggleOpen,
}: DimensionProps) {
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
      <div className={`dim-body rail-sidebar`}>
        <VerticalStepperRail dim={dim} levelNames={levelNames} score={score} checked={checked} />
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
