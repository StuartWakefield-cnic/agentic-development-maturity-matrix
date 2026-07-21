import React from "react";

export default function Topbar({ overall, attainedMin }) {
  return (
    <div className="topbar">
      <div className="topbar-in">
        <span className="brand">Agentic Development Maturity Matrix</span>
        <nav aria-label="Sections">
          <a href="#model">Model</a>
          <a href="#assess">Assessment</a>
          <a href="#results">Evaluation</a>
          <a href="#pathway">Pathway</a>
          <a href="#sources">Sources</a>
        </nav>
        <span className="scorepill">
          {overall.toFixed(1)}/4.0
          <span className="lv">{attainedMin > 0 ? `L${attainedMin}` : ""}</span>
        </span>
      </div>
    </div>
  );
}
