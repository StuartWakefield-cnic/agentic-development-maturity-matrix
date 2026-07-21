import React from "react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Card from "./ui/Card";

export default function SourcesSection() {
  return (
    <section id="sources" className="src">
      <Container>
        <SectionHeading eyebrow="Evidence base" title="Sources & method">
          <p className="lede">
            Every criterion traces to published research or a primary practitioner source. The four-level,
            dimension-by-level structure follows the DORA performance-cluster and ThoughtWorks/Forrester CD
            maturity-model tradition; the agentic content draws on the sources below. Key sources:
          </p>
        </SectionHeading>
        <ol>
          <li>
            <strong>DORA / Google Cloud</strong> —{" "}
            <a href="https://dora.dev/research/2025/" target="_blank" rel="noopener noreferrer">
              2025 State of AI-assisted Software Development
            </a>{" "}
            (AI as amplifier; 90% adoption; throughput up, instability up; trust paradox; seven team profiles; value
            stream management; platform engineering at 90% of organisations) and the{" "}
            <a href="https://dora.dev/research/2025/ai-capabilities-model/" target="_blank" rel="noopener noreferrer">
              DORA AI Capabilities Model
            </a>{" "}
            (seven capabilities that statistically amplify AI's benefits);{" "}
            <a href="https://dora.dev/capabilities/" target="_blank" rel="noopener noreferrer">
              capability catalog
            </a>
            ;{" "}
            <a href="https://dora.dev/guides/dora-metrics/" target="_blank" rel="noopener noreferrer">
              software delivery metrics
            </a>{" "}
            including the fifth metric, rework rate (2025).
          </li>
          <li>
            <strong>MinimumCD &amp; the Agentic CD practice guide</strong> (Finster, Küsters et al.) —{" "}
            <a href="https://minimumcd.org/" target="_blank" rel="noopener noreferrer">
              Minimum Viable CD
            </a>{" "}
            and{" "}
            <a href="https://beyond.minimumcd.org/docs/agentic-cd/" target="_blank" rel="noopener noreferrer">
              Agentic Continuous Delivery
            </a>
            : the eight ACD constraints, agent delivery contract,{" "}
            <a
              href="https://beyond.minimumcd.org/docs/agentic-cd/getting-started/adoption-roadmap/"
              target="_blank"
              rel="noopener noreferrer"
            >
              AI adoption roadmap
            </a>
            ,{" "}
            <a
              href="https://beyond.minimumcd.org/docs/agentic-cd/getting-started/repo-readiness/"
              target="_blank"
              rel="noopener noreferrer"
            >
              repository readiness
            </a>
            ,{" "}
            <a
              href="https://beyond.minimumcd.org/docs/agentic-cd/architecture/small-batch-sessions/"
              target="_blank"
              rel="noopener noreferrer"
            >
              small-batch sessions
            </a>
            ,{" "}
            <a
              href="https://beyond.minimumcd.org/docs/agentic-cd/operations/pipeline-enforcement/"
              target="_blank"
              rel="noopener noreferrer"
            >
              pipeline enforcement &amp; expert agents
            </a>
            ,{" "}
            <a href="https://beyond.minimumcd.org/docs/agentic-cd/evaluation/" target="_blank" rel="noopener noreferrer">
              team &amp; platform AI evals
            </a>{" "}
            and{" "}
            <a
              href="https://beyond.minimumcd.org/docs/agentic-cd/operations/tokenomics/"
              target="_blank"
              rel="noopener noreferrer"
            >
              tokenomics
            </a>
            .
          </li>
          <li>
            <strong>martinfowler.com</strong> — Birgitta Böckeler's{" "}
            <a href="https://martinfowler.com/articles/exploring-gen-ai.html" target="_blank" rel="noopener noreferrer">
              Exploring Gen AI
            </a>{" "}
            series:{" "}
            <a
              href="https://martinfowler.com/articles/exploring-gen-ai/harness-engineering-memo.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              harness engineering
            </a>{" "}
            (guides and sensors, computational and inferential), spec-driven development levels (spec-first,
            spec-anchored, spec-as-source),{" "}
            <a
              href="https://martinfowler.com/articles/exploring-gen-ai/13-role-of-developer-skills.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              the role of developer skills
            </a>
            , mutation testing as a regression sensor, and secure-by-default context for vibe-coded applications;
            plus the classic{" "}
            <a href="https://martinfowler.com/articles/practical-test-pyramid.html" target="_blank" rel="noopener noreferrer">
              Practical Test Pyramid
            </a>
            .
          </li>
          <li>
            <strong>METR</strong> —{" "}
            <a
              href="https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity
            </a>{" "}
            (RCT, 16 developers, 246 real tasks): 19% measured slowdown vs ~20% perceived speedup — the perception
            gap that motivates measured evals over self-report.
          </li>
          <li>
            <strong>OWASP GenAI Security Project</strong> —{" "}
            <a href="https://genai.owasp.org/llm-top-10/" target="_blank" rel="noopener noreferrer">
              Top 10 for LLM Applications (2025)
            </a>
            : prompt injection (LLM01), sensitive information disclosure (LLM02), excessive agency (LLM06),
            unbounded consumption (LLM10); plus the Agentic AI threats-and-mitigations companion work. See also Simon
            Willison's{" "}
            <a href="https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/" target="_blank" rel="noopener noreferrer">
              lethal trifecta
            </a>{" "}
            framing, popularised via martinfowler.com.
          </li>
          <li>
            <strong>Google SRE</strong> —{" "}
            <a href="https://sre.google/sre-book/service-level-objectives/" target="_blank" rel="noopener noreferrer">
              Service Level Objectives
            </a>
            ,{" "}
            <a href="https://sre.google/workbook/error-budget-policy/" target="_blank" rel="noopener noreferrer">
              Error Budget Policy
            </a>
            ,{" "}
            <a href="https://sre.google/sre-book/monitoring-distributed-systems/" target="_blank" rel="noopener noreferrer">
              four golden signals
            </a>{" "}
            — the reliability control loop that must now govern agent-accelerated change.
          </li>
          <li>
            <strong>Forsgren, Humble &amp; Kim</strong> —{" "}
            <a href="https://itrevolution.com/product/accelerate/" target="_blank" rel="noopener noreferrer">
              <em>Accelerate</em>
            </a>{" "}
            (2018): 24 validated capabilities; speed and stability are not a trade-off; generative culture predicts
            performance. The bedrock the agentic layer stands on.
          </li>
          <li>
            <strong>Practitioner guidance</strong> — Anthropic's{" "}
            <a href="https://www.anthropic.com/engineering/claude-code-best-practices" target="_blank" rel="noopener noreferrer">
              Claude Code best practices
            </a>{" "}
            (permission allowlists, sandboxing, context files);{" "}
            <a href="https://trunkbaseddevelopment.com/" target="_blank" rel="noopener noreferrer">
              trunkbaseddevelopment.com
            </a>
            ;{" "}
            <a href="https://survey.stackoverflow.co/2025/ai" target="_blank" rel="noopener noreferrer">
              Stack Overflow Developer Survey 2025
            </a>{" "}
            (84% use or plan to use AI tools); and the longitudinal study{" "}
            <a href="https://arxiv.org/abs/2607.01904" target="_blank" rel="noopener noreferrer">
              "AI Writes Faster Than Humans Can Review"
            </a>{" "}
            on review capacity as the binding constraint.
          </li>
        </ol>
        <Card className="caveat">
          <strong>Caveats.</strong> Assess one application/service at a time. Don't set levels as targets that invite
          gaming (Goodhart's law) — DORA explicitly warns against using benchmarks as goals. Don't compare teams with
          very different contexts or risk profiles: an Elite posture for an internal tool is not an Elite posture for
          a payments system. The agentic field moves fast; several sources here are 2025–2026 practitioner syntheses
          rather than decade-long research programmes, and criteria should be re-reviewed against new DORA and
          Technology Radar releases. Use your result to pick the next improvement, not to rank teams.
        </Card>
      </Container>
    </section>
  );
}
