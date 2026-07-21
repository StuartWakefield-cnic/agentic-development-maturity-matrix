import React from "react";

function CiteChip({ citation }) {
  return (
    <a className="cite" href={citation.u} target="_blank" rel="noopener noreferrer" tabIndex={0}>
      {citation.s}
      <span className="tip" role="tooltip">
        <b>{citation.s}.</b> {citation.n}
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
        {item.t}
        <span className="cites">
          {item.c.map((key) => (
            <CiteChip key={key} citation={citations[key]} />
          ))}
        </span>
      </label>
    </div>
  );
}
