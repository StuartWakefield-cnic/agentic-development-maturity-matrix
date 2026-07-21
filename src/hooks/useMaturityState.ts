import { useState, useEffect, useMemo, useCallback } from "react";
import dimensions from "../data/dimensions.yaml";
import citations from "../data/citations.yaml";
import levelNames from "../data/levels.yaml";
import { dimScore, buildSummary } from "../utils/scoring";
import type { Checked } from "../types/domain";

const STORAGE_KEY = "adm-matrix-v1";

export default function useMaturityState() {
  const [checked, setChecked] = useState<Checked>({});

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setChecked(JSON.parse(raw));
    } catch (e) {
      // matches original's try{...}catch(e){state={}}
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
  }, [checked]);

  const toggleItem = useCallback((id: string, isChecked: boolean) => {
    setChecked((prev) => {
      const next = { ...prev };
      if (isChecked) next[id] = true;
      else delete next[id];
      return next;
    });
  }, []);

  const resetAll = useCallback(() => {
    setChecked({});
    window.localStorage.removeItem(STORAGE_KEY);
  }, []);

  const scores = useMemo(() => dimensions.map((d) => dimScore(d, checked)), [checked]);
  const overall = useMemo(
    () => scores.reduce((a, s) => a + s.attained + s.partial, 0) / dimensions.length,
    [scores]
  );
  const attainedMin = useMemo(() => Math.min(...scores.map((s) => s.attained)), [scores]);
  const summaryData = useCallback(() => buildSummary(dimensions, levelNames, scores, checked), [
    scores,
    checked,
  ]);

  return {
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
  };
}
