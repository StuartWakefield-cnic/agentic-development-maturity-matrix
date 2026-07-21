import React from "react";
import { withPrefix } from "gatsby";
import Container from "./ui/Container";

interface TopbarProps {
  overall: number;
  attainedMin: number;
}

export default function Topbar({ overall, attainedMin }: TopbarProps) {
  return (
    <div className="topbar">
      <Container className="topbar-in">
        <a className="brand" href={withPrefix("/")} aria-label="Team Internet">
          <img src={withPrefix("/images/team-internet-logo-white.svg")} alt="Team Internet" />
        </a>
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
      </Container>
    </div>
  );
}
