import React from "react";

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap">
        <div className="eyebrow">Self-assessment · Improvement pathway · ~30 min, ideal for a team retro</div>
        <h1>Agentic Development Maturity Matrix</h1>
        <p className="sub">
          A research-backed self-assessment for engineering teams adopting AI agents across the SDLC. Tick the
          practices your team does <strong>consistently</strong> today, see where you sit across seven dimensions —
          from delivery foundations to guardrails, evals and observability — and get a concrete pathway to the next
          level. The evidence is blunt: AI is an <strong>amplifier</strong>. It magnifies strong delivery systems and
          it magnifies dysfunction, so the pathway starts with the control system, not the agent.
        </p>
        <div className="badges">
          <span className="badge">DORA 2025 · State of AI-assisted Software Development</span>
          <span className="badge">DORA AI Capabilities Model</span>
          <span className="badge">MinimumCD · Agentic CD</span>
          <span className="badge">martinfowler.com · Harness engineering</span>
          <span className="badge">METR RCT</span>
          <span className="badge">OWASP GenAI · Google SRE</span>
        </div>
        <div className="hero-gates" aria-label="The four levels">
          <div className="hero-gate g1">
            <div className="gnum">L1</div>
            <div className="gname">Foundational</div>
            <div className="gdesc">
              Assistive AI on a working CD bedrock. Everything versioned; every AI change read and understood by a
              human.
            </div>
          </div>
          <div className="hero-gate g2">
            <div className="gnum">L2</div>
            <div className="gname">Developing</div>
            <div className="gdesc">
              Supervised agents with least-privilege access. Test-first agent work; prompts and agent config treated
              as code.
            </div>
          </div>
          <div className="hero-gate g3">
            <div className="gnum">L3</div>
            <div className="gname">Established</div>
            <div className="gdesc">
              Delegated agent sessions inside a deliberate harness. Specs anchor work; evals and SLOs govern pace.
            </div>
          </div>
          <div className="hero-gate g4">
            <div className="gnum">L4</div>
            <div className="gname">Elite</div>
            <div className="gdesc">
              Orchestrated multi-agent delivery. Pipeline-enforced contracts; humans own intent and accountability.
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
