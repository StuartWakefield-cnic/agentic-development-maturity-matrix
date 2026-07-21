import type { ComponentType } from "react";

export interface Citation {
  source: string;
  href: string;
  note: string;
}

export type Citations = Record<string, Citation>;

export interface Criterion {
  title: string;
  citation: string[];
}

export type DimensionLevel = Criterion[];

export interface Dimension {
  id: string;
  glyph: string;
  name: string;
  small: string;
  levels: DimensionLevel[];
}

export type Checked = Record<string, boolean>;

export interface LevelScore {
  done: number;
  total: number;
}

export interface Score {
  per: LevelScore[];
  attained: number;
  partial: number;
  value: number;
}

export interface BlockingItem extends Criterion {
  ii: number;
}

export interface SummaryLevelItem {
  text: string;
  done: boolean;
}

export interface SummaryLevel {
  level: number;
  name: string;
  ticked: number;
  total: number;
  items: SummaryLevelItem[];
}

export interface SummaryDimension {
  id: string;
  name: string;
  attainedLevel: number;
  levels: SummaryLevel[];
}

export interface Summary {
  tool: string;
  date: string;
  overall: number;
  dimensions: SummaryDimension[];
}

export interface RailProps {
  dim: Dimension;
  levelNames: string[];
  score: Score;
  checked: Checked;
}

export type RailLayout = "sidebar" | "sidebar-wide" | "stacked";

export interface ProgressVariant {
  key: string;
  label: string;
  Component: ComponentType<RailProps>;
  layout: RailLayout;
}
