import React from "react";
import { itemId } from "../utils/scoring";

export default function PathwaySection({ dimensions, levelNames, scores, checked }) {
  const ranked = dimensions
    .map((d, i) => ({ d, sc: scores[i] }))
    .filter((x) => x.sc.attained < 4)
    .sort((a, b) => a.sc.attained + a.sc.partial - (b.sc.attained + b.sc.partial));
  const anyTicked = Object.values(checked).some(Boolean);

  return (
    <section id="pathway">
      <div className="wrap">
        <div className="sec-eyebrow">Improvement pathway</div>
        <h2>Your next steps</h2>
        <p className="lede">
          Don't try to fix everything. DORA's guidance — echoed by the MinimumCD migration playbook — is to gather
          the whole team, find the most significant constraint, commit to one improvement, do the work, then
          re-assess. The pathway below lists exactly what stands between you and the next gate in each dimension,
          weakest first. Remember Agentic CD's sequencing: quality tools, clear requirements and hardened guardrails
          come <em>before</em> accelerating with AI coding — adding agents to a broken system doesn't make it faster,
          it makes the dysfunction louder.
        </p>
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
                  <div className={`path-card${i === 0 ? " first" : ""}`} key={x.d.id}>
                    <h3>
                      <span className="tag">{i === 0 ? "Start here" : "Then"}</span> {x.d.glyph} · {x.d.name}{" "}
                      <span style={{ fontFamily: "var(--mono)", fontSize: ".72rem", color: "var(--ink-faint)" }}>
                        L{nl}→L{nl + 1} ({levelNames[nl]})
                      </span>
                    </h3>
                    <ul>
                      {missing.map((m) => (
                        <li key={m.ii}>{m.it.t}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
