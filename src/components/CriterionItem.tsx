import React from "react";
import type { Citation, Citations, Criterion } from "../types/domain";

function CiteChip({ citation }: { citation: Citation }) {
  return (
    <a className="cite" href={citation.href} target="_blank" rel="noopener noreferrer" tabIndex={0}>
      {citation.source}
      <span className="tip" role="tooltip">
        <b>{citation.source}.</b> {citation.note}
      </span>
    </a>
  );
}

interface CriterionItemProps {
  id: string;
  item: Criterion;
  citations: Citations;
  checked: boolean;
  onToggle: (id: string, isChecked: boolean) => void;
}

export default function CriterionItem({ id, item, citations, checked, onToggle }: CriterionItemProps) {
  return (
    <div className="crit">
      <input
        type="checkbox"
        id={id}
        checked={!!checked}
        onChange={(e) => onToggle(id, e.target.checked)}
      />
      <label htmlFor={id}>
        {item.title}
        <span className="cites">
          {item.citation.map((key) => (
            <CiteChip key={key} citation={citations[key]} />
          ))}
        </span>
      </label>
    </div>
  );
}
