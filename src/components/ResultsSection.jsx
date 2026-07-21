import React from "react";
import Radar from "./Radar";
import MatrixTable from "./MatrixTable";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Card from "./ui/Card";

export default function ResultsSection({ dimensions, levelNames, scores, overall, attainedMin }) {
  const overallNote =
    attainedMin > 0
      ? `${levelNames[attainedMin - 1]} attained in every dimension`
      : "No level fully attained yet — that's normal; start with the pathway";

  return (
    <section id="results">
      <Container>
        <SectionHeading eyebrow="Evaluation" title="Your maturity matrix">
          <p className="lede">
            The radar shows attained level per dimension (solid) and partial progress toward the next level (faint).
            The matrix maps you against all four gates. Your overall score is the mean of the seven dimension scores.
          </p>
        </SectionHeading>
        <div className="results-grid">
          <Card className="panel">
            <h3>Harness radar</h3>
            <Radar dimensions={dimensions} scores={scores} />
            <div className="radar-legend">
              <span>
                <span className="sw" style={{ background: "var(--blue)" }} />
                Attained level
              </span>
              <span>
                <span className="sw" style={{ background: "var(--blue-tint2)", opacity: 0.7 }} />+ partial progress
              </span>
            </div>
            <div className="overall">
              {overall.toFixed(1)}
              <small> / 4.0 overall</small>
            </div>
            <div style={{ fontSize: ".8rem", color: "var(--ink-soft)" }}>{overallNote}</div>
          </Card>
          <Card className="panel">
            <h3>Matrix view</h3>
            <div style={{ overflowX: "auto" }}>
              <MatrixTable dimensions={dimensions} levelNames={levelNames} scores={scores} />
            </div>
            <p style={{ fontSize: ".76rem", color: "var(--ink-faint)", marginTop: "10px" }}>
              Cells show ticked/total practices per gate. A gate is green only when complete and all gates to its
              left are complete.
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}
