import React from "react";
import Container from "./ui/Container";
import type { Dimension, Score } from "../types/domain";

interface SummaryBarProps {
  dimensions: Dimension[];
  scores: Score[];
  overall: number;
}

export default function SummaryBar({ dimensions, scores, overall }: SummaryBarProps) {
  const scrollToDim = (id: string) => {
    document.getElementById(`dim-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="summary-bar">
      <Container className="summary-bar-in">
        <div className="summary-avg">
          {overall.toFixed(1)}
          <small>/4.0 overall</small>
        </div>
        <div className="summary-pills">
          {dimensions.map((dim, i) => (
            <button
              key={dim.id}
              type="button"
              className="summary-pill"
              onClick={() => scrollToDim(dim.id)}
            >
              <span className={`lvl-chip l${scores[i].attained}`}>L{scores[i].attained}</span>
              {dim.name}
            </button>
          ))}
        </div>
      </Container>
    </div>
  );
}
