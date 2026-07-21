import React from "react";

function CiteChip({ citation }) {
  return (
    <a className="cite" href={citation.href} target="_blank" rel="noopener noreferrer" tabIndex={0}>
      {citation.source}
      <span className="tip" role="tooltip">
        <b>{citation.source}.</b> {citation.note}
      </span>
    </a>
  );
}

export default function CriterionItem({ id, item, citations, checked, onToggle }) {
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
