import React from "react";
import useMaturityState from "../hooks/useMaturityState";
import { ProgressVariantProvider } from "../context/ProgressVariantContext";
import Topbar from "../components/Topbar";
import Hero from "../components/Hero";
import ModelSection from "../components/ModelSection";
import AssessmentSection from "../components/AssessmentSection";
import ResultsSection from "../components/ResultsSection";
import PathwaySection from "../components/PathwaySection";
import SourcesSection from "../components/SourcesSection";
import Footer from "../components/Footer";

export default function IndexPage() {
  const {
    dimensions,
    citations,
    levelNames,
    checked,
    toggleItem,
    resetAll,
    scores,
    overall,
    attainedMin,
    summaryData,
  } = useMaturityState();

  return (
    <ProgressVariantProvider>
      <Topbar overall={overall} attainedMin={attainedMin} />
      <Hero />
      <ModelSection />
      <AssessmentSection
        dimensions={dimensions}
        levelNames={levelNames}
        citations={citations}
        checked={checked}
        toggleItem={toggleItem}
        scores={scores}
        resetAll={resetAll}
        summaryData={summaryData}
      />
      <ResultsSection
        dimensions={dimensions}
        levelNames={levelNames}
        scores={scores}
        overall={overall}
        attainedMin={attainedMin}
      />
      <PathwaySection dimensions={dimensions} levelNames={levelNames} scores={scores} checked={checked} />
      <SourcesSection />
      <Footer />
    </ProgressVariantProvider>
  );
}

export const Head = () => (
  <>
    <html lang="en-GB" />
    <title>Agentic Development Maturity Matrix</title>
    <meta
      name="description"
      content="A research-backed self-assessment and improvement pathway for engineering teams adopting agentic (AI-assisted) software development. Grounded in DORA, MinimumCD Agentic CD, martinfowler.com, METR and OWASP."
    />
  </>
);
