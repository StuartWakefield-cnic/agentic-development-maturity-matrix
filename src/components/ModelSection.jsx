import React from "react";

export default function ModelSection() {
  return (
    <section id="model">
      <div className="wrap">
        <div className="sec-eyebrow">The model</div>
        <h2>Four levels, seven dimensions</h2>
        <p className="lede">
          The four levels — <strong>Foundational, Developing, Established, Elite</strong> — describe how far a team
          can safely delegate work to AI agents while keeping speed <em>and</em> stability. They are deliberately
          shaped like the DORA performance clusters: DORA's 2025 research (nearly 5,000 respondents, 100+ hours of
          qualitative data) found AI adoption now improves delivery throughput but still increases delivery
          instability, because teams are adapting for speed faster than their control systems are evolving. Moving
          right on this matrix is the work of evolving that control system.
        </p>
        <p className="lede">
          Levels are cumulative and gated, following Agentic CD's core rule: an agent-generated change must meet or
          exceed the same quality bar as a human-generated change — the pipeline does not care who wrote the code.
          You are only as mature as your weakest practice.
        </p>
        <div className="tblwrap">
          <table className="model">
            <thead>
              <tr>
                <th>Characteristic</th>
                <th>L1 · Foundational</th>
                <th>L2 · Developing</th>
                <th>L3 · Established</th>
                <th>L4 · Elite</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Dominant AI mode</th>
                <td>Assistive: autocomplete, chat, single-file edits</td>
                <td>Supervised agents in the IDE; human approves each action</td>
                <td>Delegated multi-step agent sessions in sandboxes</td>
                <td>Orchestrated agents (coder, reviewer, validator) under human intent</td>
              </tr>
              <tr>
                <th scope="row">Who verifies</th>
                <td>Human reads every change end-to-end</td>
                <td>Human review + pipeline gates (tests, static analysis)</td>
                <td>Pipeline is the primary verifier; humans review by exception</td>
                <td>Expert validation agents + pipeline enforce the delivery contract; humans audit</td>
              </tr>
              <tr>
                <th scope="row">Agent autonomy &amp; blast radius</th>
                <td>Read-mostly; no direct write access to shared branches</td>
                <td>Least-privilege tools; sandboxed execution; permission allowlists</td>
                <td>Autonomous within a session and contract; cannot self-promote to production</td>
                <td>Fleet of governed agents with identity, budgets and full audit trail</td>
              </tr>
              <tr>
                <th scope="row">Feedback control</th>
                <td>CI on every change; feedback in hours</td>
                <td>Trunk-based CI daily; feedback in &lt; 1 hour</td>
                <td>Deterministic pipeline; feedback in minutes; evals on tool changes</td>
                <td>Control loop faster than the agents it governs; progressive delivery with auto-rollback</td>
              </tr>
              <tr>
                <th scope="row">Measurement</th>
                <td>DORA four keys + rework rate baselined</td>
                <td>AI usage and cost visible; prompts/config versioned</td>
                <td>Golden-task evals; measured outcomes over perceived speed</td>
                <td>Value-stream-linked outcomes; evals gate harness changes</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="tblnote">
          Level descriptors synthesise the DORA 2025 report and AI Capabilities Model, the MinimumCD Agentic CD
          extensions and adoption roadmap, and martinfowler.com's harness-engineering and developer-skills series.
          The "feedback control" row reflects DORA 2025's control-theory framing: a control system must operate
          faster than the system it controls.
        </p>
        <div className="statrow">
          <div className="stat">
            <div className="n">90%</div>
            <p>
              of technology professionals now use AI at work (up 14% YoY) — adoption is table stakes; the
              differentiator is the surrounding system.{" "}
              <a href="https://dora.dev/research/2025/" target="_blank" rel="noopener noreferrer">
                DORA 2025
              </a>
            </p>
          </div>
          <div className="stat">
            <div className="n warn">30%</div>
            <p>
              report little or no trust in AI-generated code, even as 80%+ perceive productivity gains — "trust but
              verify" is the mature stance, and this matrix operationalises the "verify".{" "}
              <a href="https://dora.dev/research/2025/" target="_blank" rel="noopener noreferrer">
                DORA 2025
              </a>
            </p>
          </div>
          <div className="stat">
            <div className="n warn">−19%</div>
            <p>
              measured speed for experienced developers using early-2025 AI tools in a randomised trial — while they
              believed they were ~20% faster. Measure outcomes, not vibes.{" "}
              <a
                href="https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/"
                target="_blank"
                rel="noopener noreferrer"
              >
                METR RCT
              </a>
            </p>
          </div>
          <div className="stat">
            <div className="n">7</div>
            <p>
              capabilities statistically amplify AI's benefits: clear AI stance, healthy data ecosystems,
              AI-accessible internal data, strong version control, small batches, user-centric focus, quality
              internal platforms.{" "}
              <a href="https://dora.dev/research/2025/ai-capabilities-model/" target="_blank" rel="noopener noreferrer">
                DORA AI Capabilities Model
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
