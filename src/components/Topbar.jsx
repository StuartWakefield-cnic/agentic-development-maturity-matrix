import React, { useState } from "react";
import { withPrefix } from "gatsby";
import Container from "./ui/Container";
import Button from "./ui/Button";
import { PROGRESS_VARIANTS } from "./progress";
import { useProgressVariant } from "../context/ProgressVariantContext";

const isDev = process.env.NODE_ENV === "development";

function DemoSwitcher() {
  const [open, setOpen] = useState(false);
  const { variant, setVariant } = useProgressVariant();

  return (
    <div className="demo-toggle">
      <Button variant="ghost" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        Demo
      </Button>
      {open && (
        <div className="demo-switcher" role="radiogroup" aria-label="Progress indicator variant">
          {PROGRESS_VARIANTS.map((v) => (
            <Button
              key={v.key}
              variant={v.key === variant ? "primary" : "ghost"}
              role="radio"
              aria-checked={v.key === variant}
              onClick={() => setVariant(v.key)}
            >
              {v.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Topbar({ overall, attainedMin }) {
  return (
    <div className="topbar">
      <Container className="topbar-in">
        <a className="brand" href="#" aria-label="Team Internet">
          <img src={withPrefix("/images/team-internet-logo-white.svg")} alt="Team Internet" />
        </a>
        <nav aria-label="Sections">
          <a href="#model">Model</a>
          <a href="#assess">Assessment</a>
          <a href="#results">Evaluation</a>
          <a href="#pathway">Pathway</a>
          <a href="#sources">Sources</a>
        </nav>
        {isDev && <DemoSwitcher />}
        <span className="scorepill">
          {overall.toFixed(1)}/4.0
          <span className="lv">{attainedMin > 0 ? `L${attainedMin}` : ""}</span>
        </span>
      </Container>
    </div>
  );
}
