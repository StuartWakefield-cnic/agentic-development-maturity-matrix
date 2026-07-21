import React, { useState, useCallback } from "react";
import Dimension from "./Dimension";
import { buildMarkdownSummary } from "../utils/scoring";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";

export default function AssessmentSection({
  dimensions,
  levelNames,
  citations,
  checked,
  toggleItem,
  scores,
  resetAll,
  summaryData,
}) {
  const [openDims, setOpenDims] = useState(() => new Set(dimensions[0] ? [dimensions[0].id] : []));
  const [copied, setCopied] = useState(false);

  const toggleOpen = useCallback((id) => {
    setOpenDims((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const handleResults = () => {
    document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleReset = () => {
    if (!window.confirm("Clear all ticked practices for this browser?")) return;
    resetAll();
  };

  const handleExport = () => {
    const data = summaryData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `agentic-maturity-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const handleCopy = async () => {
    const md = buildMarkdownSummary(summaryData());
    try {
      await navigator.clipboard.writeText(md);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (err) {
      window.prompt("Copy the summary below:", md);
    }
  };

  return (
    <section id="assess">
      <Container>
        <SectionHeading eyebrow="Self-assessment" title="Where is your team today?">
          <p className="lede">
            Work through each dimension as a team, assessing <strong>one application or service at a time</strong>.
            Only tick a practice if you do it consistently — "sometimes" doesn't count. A level is attained when
            every practice at that level <em>and all levels below it</em> is ticked. Hover the citation chips to see
            the evidence behind each practice; click to open the source.
          </p>
        </SectionHeading>
        <div className="toolrow" role="toolbar" aria-label="Assessment actions">
          <Button variant="ghost" onClick={handleResults}>
            See results ↓
          </Button>
          <Button variant="ghost" onClick={handleExport}>
            Export results (JSON)
          </Button>
          <Button variant="ghost" onClick={handleCopy}>
            {copied ? "Copied ✓" : "Copy summary (Markdown)"}
          </Button>
          <Button variant="ghost" onClick={() => window.print()}>
            Print / PDF
          </Button>
          <Button variant="danger" onClick={handleReset}>
            Reset
          </Button>
        </div>
        <div id="dims">
          {dimensions.map((dim, i) => (
            <Dimension
              key={dim.id}
              dim={dim}
              levelNames={levelNames}
              citations={citations}
              checked={checked}
              onToggle={toggleItem}
              score={scores[i]}
              isOpen={openDims.has(dim.id)}
              onToggleOpen={toggleOpen}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
