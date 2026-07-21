import React from "react";
import Container from "./ui/Container";
import Badge from "./ui/Badge";
import Card from "./ui/Card";
import Eyebrow from "./ui/Eyebrow";

const GATES = [
  {
    num: "L1",
    name: "Foundational",
    desc: "Assistive AI on a working CD bedrock. Everything versioned; every AI change read and understood by a human.",
    accent: "var(--line-strong)",
  },
  {
    num: "L2",
    name: "Developing",
    desc: "Supervised agents with least-privilege access. Test-first agent work; prompts and agent config treated as code.",
    accent: "var(--blue-tint2)",
  },
  {
    num: "L3",
    name: "Established",
    desc: "Delegated agent sessions inside a deliberate harness. Specs anchor work; evals and SLOs govern pace.",
    accent: "var(--blue-tint3)",
  },
  {
    num: "L4",
    name: "Elite",
    desc: "Orchestrated multi-agent delivery. Pipeline-enforced contracts; humans own intent and accountability.",
    accent: "var(--blue)",
  },
];

export default function Hero() {
  return (
    <header className="hero">
      <Container>
        <Eyebrow variant="hero">Self-assessment · Improvement pathway · ~30 min, ideal for a team retro</Eyebrow>
        <h1>Agentic Development Maturity Matrix</h1>
        <p className="sub">
          A research-backed self-assessment for engineering teams adopting AI agents across the SDLC. Tick the
          practices your team does <strong>consistently</strong> today, see where you sit across seven dimensions —
          from delivery foundations to guardrails, evals and observability — and get a concrete pathway to the next
          level. The evidence is blunt: AI is an <strong>amplifier</strong>. It magnifies strong delivery systems and
          it magnifies dysfunction, so the pathway starts with the control system, not the agent.
        </p>
        <div className="badges">
          <Badge>DORA 2025 · State of AI-assisted Software Development</Badge>
          <Badge>DORA AI Capabilities Model</Badge>
          <Badge>MinimumCD · Agentic CD</Badge>
          <Badge>martinfowler.com · Harness engineering</Badge>
          <Badge>METR RCT</Badge>
          <Badge>OWASP GenAI · Google SRE</Badge>
        </div>
        <div className="hero-gates" aria-label="The four levels">
          {GATES.map((g) => (
            <Card key={g.num} accent={g.accent} className="hero-gate">
              <div className="gnum">{g.num}</div>
              <div className="gname">{g.name}</div>
              <div className="gdesc">{g.desc}</div>
            </Card>
          ))}
        </div>
      </Container>
    </header>
  );
}
