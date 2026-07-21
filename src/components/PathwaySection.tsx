import React from "react";
import { itemId } from "../utils/scoring";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Card from "./ui/Card";
import Badge from "./ui/Badge";
import type { Dimension, Score, Checked } from "../types/domain";

interface PathwaySectionProps {
  dimensions: Dimension[];
  levelNames: string[];
  scores: Score[];
  checked: Checked;
}

export default function PathwaySection({ dimensions, levelNames, scores, checked }: PathwaySectionProps) {
  const ranked = dimensions
    .map((d, i) => ({ d, sc: scores[i] }))
    .filter((x) => x.sc.attained < 4)
    .sort((a, b) => a.sc.attained + a.sc.partial - (b.sc.attained + b.sc.partial));
  const anyTicked = Object.values(checked).some(Boolean);

  return (
    <section id="pathway">
      <Container>
        <SectionHeading eyebrow="Improvement pathway" title="Your next steps">
          <p className="lede">
            Don't try to fix everything. DORA's guidance — echoed by the MinimumCD migration playbook — is to gather
            the whole team, find the most significant constraint, commit to one improvement, do the work, then
            re-assess. The pathway below lists exactly what stands between you and the next gate in each dimension,
            weakest first. Remember Agentic CD's sequencing: quality tools, clear requirements and hardened
            guardrails come <em>before</em> accelerating with AI coding — adding agents to a broken system doesn't
            make it faster, it makes the dysfunction louder.
          </p>
        </SectionHeading>
        <div id="path">
          {ranked.length === 0 ? (
            <div className="path-empty">
              Every gate in every dimension is complete — you're operating at Elite across the board. Re-assess
              quarterly: the agentic field, and the evidence base, moves fast.
            </div>
          ) : (
            <>
              {!anyTicked && (
                <div className="path-empty">
                  Tick your current practices above and your pathway will appear here, weakest dimension first.
                </div>
              )}
              {ranked.map((x, i) => {
                const nl = x.sc.attained;
                const missing = x.d.levels[nl]
                  .map((it, ii) => ({ it, ii }))
                  .filter((o) => !checked[itemId(x.d.id, nl, o.ii)]);
                return (
                  <Card
                    key={x.d.id}
                    accent={i === 0 ? "var(--danger)" : "var(--amber)"}
                    className="path-card"
                  >
                    <h3>
                      <Badge tone={i === 0 ? "danger" : "amber"}>{i === 0 ? "Start here" : "Then"}</Badge>{" "}
                      {x.d.glyph} · {x.d.name}{" "}
                      <span style={{ fontSize: ".72rem", fontWeight: 600, color: "var(--ink-faint)" }}>
                        <span className={`lvl-chip l${nl}`}>L{nl}</span>→<span className={`lvl-chip l${nl + 1}`}>L{nl + 1}</span> ({levelNames[nl]})
                      </span>
                    </h3>
                    <ul>
                      {missing.map((m) => (
                        <li key={m.ii}>{m.it.title}</li>
                      ))}
                    </ul>
                  </Card>
                );
              })}
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
