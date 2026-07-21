import StepperRail from "./StepperRail";
import VerticalStepperRail from "./VerticalStepperRail";
import LadderRail from "./LadderRail";
import TimelineRail from "./TimelineRail";
import MeterRail from "./MeterRail";
import type { ProgressVariant } from "../../types/domain";

export const PROGRESS_VARIANTS: ProgressVariant[] = [
  { key: "vertical-stepper", label: "Vertical stepper", Component: VerticalStepperRail, layout: "sidebar" },
  { key: "stepper", label: "Stepper", Component: StepperRail, layout: "stacked" },
  { key: "ladder", label: "Ladder", Component: LadderRail, layout: "stacked" },
  { key: "timeline", label: "Timeline", Component: TimelineRail, layout: "sidebar-wide" },
  { key: "meter", label: "Meter", Component: MeterRail, layout: "stacked" },
];

export const DEFAULT_VARIANT = "vertical-stepper";
