# CLAUDE.md

This file provides guidance to agents when working with code in this repository. It contains
concise information about the breadth of this repository.

## Updating this file

- Stable information should reside near the top of this file to improve caching
- After every change to this repository a pass should be done to consider whether this file needs updating to keep relevant information in sync
- More volatile information should exist towards the end of this file, or not in this file at all...
- To improve stability, each piece of information that requires update in this file should be evaluated as to whether it could be devolved to:
  - Another CLAUDE.md closer to where the information is needed
  - A skill and/or reference files that could be read on demand
  - Improvements to the structure and source of the repository to make existing source information more findable

## What this is

A single-page Gatsby/TypeScript site: an interactive self-assessment tool ("Agentic Development Maturity Matrix")
that teams use to score themselves across several dimensions of AI-assisted software development practice, grounded
in DORA, MinimumCD Agentic CD, martinfowler.com, METR and OWASP sources. Deployed as a static site to GitHub Pages.

## Commands

```
npm install
npm run develop    # gatsby develop, http://localhost:8000
npm run typecheck  # tsc --noEmit — run this after any TS/TSX change
npm run build      # gatsby build --prefix-paths, outputs to public/
npm run serve      # preview the production build locally
npm run clean      # gatsby clean (clears .cache/ and public/)
```

There is no test suite or linter configured. `npm run typecheck` is the only automated check; run it before
considering a change done. Pushing to `main` builds and deploys automatically via
`.github/workflows/deploy.yml` (GitHub Actions → GitHub Pages) — there is no separate CI check on PRs.

## Architecture

**Content lives in YAML, not code.** `src/data/dimensions.yaml`, `src/data/levels.yaml` and
`src/data/citations.yaml` define the entire assessment: dimensions, their four maturity levels, each level's
criteria, and the citation sources. Gatsby's bundled `yaml-loader` lets these be imported directly
(`import dimensions from "../data/dimensions.yaml"`); the shapes are declared in `gatsby-env.d.ts` and mirrored
in `src/types/domain.ts`. Adding or editing assessment content should almost always mean editing YAML, not TSX.
Each criterion's `citation` field is a list of keys into `citations.yaml`.

**Data flow is single-hook, single-page.** `src/hooks/useMaturityState.ts` is the one stateful hook: it loads the
YAML data, persists ticked criteria (`Checked`, a `Record<string, boolean>`) to `localStorage` under
`adm-matrix-v1`, and derives `scores` via `src/utils/scoring.ts`. `src/pages/index.tsx` calls this hook once and
passes the results down as props through every section component — there is no context/redux, and no other pages.

**Scoring (`src/utils/scoring.ts`) is the core logic to understand before touching assessment behavior:**
- `itemId(dimId, level, index)` builds the stable localStorage key `"{dimId}-{level}-{index}"` for a criterion —
  used everywhere criteria are looked up or toggled.
- `dimScore` computes a dimension's attained level (all criteria at that level and below ticked) plus fractional
  `partial` progress into the next level; `value = attained + partial * 0.999` gives a sortable/continuous score.
- `buildSummary` / `buildMarkdownSummary` produce the exportable JSON/Markdown reports (used by the Export and
  Copy summary buttons in `AssessmentSection`).

**Component structure**: `src/pages/index.tsx` composes top-level sections (`Topbar`, `Hero`, `ModelSection`,
`AssessmentSection`, `ResultsSection`, `PathwaySection`, `SourcesSection`, `Footer`, `SummaryBar`) in a fixed
order — this is the whole site. `AssessmentSection` → `Dimension` → `CriterionItem` is the interactive checklist.
Small reusable primitives live in `src/components/ui/` (Button, Card, Badge, Container, etc.).

**Progress "rail" visualizations** (`src/components/progress/`) are interchangeable renderers of the same
`RailProps` (dim, levelNames, score, checked) — Stepper, VerticalStepper, Ladder, Timeline, Meter. They're
registered in `src/components/progress/index.ts` as `PROGRESS_VARIANTS`, each with a `layout` (`sidebar` /
`sidebar-wide` / `stacked`). Currently `Dimension.tsx` hardcodes `VerticalStepperRail`; the variant registry exists
for trying alternative visual treatments without rewiring consumers — when swapping the active rail, prefer
picking from `PROGRESS_VARIANTS` over hand-wiring a new import.

**Styling** is a single global stylesheet (`src/styles/global.css`) using CSS custom properties for the design
tokens (colors, radii, breakpoints) defined at the top of the file — no CSS-in-JS or module-per-component.

**Site is served under a path prefix**: `gatsby-config.ts` sets `pathPrefix: "/agentic-development-maturity-matrix"`
and the build uses `--prefix-paths`. Any internal links to static assets must go through Gatsby's `withPrefix()`
(see the favicon links in `src/pages/index.tsx`) rather than being hardcoded absolute paths.
