/// <reference types="gatsby" />

declare module "*.css";

declare module "*dimensions.yaml" {
  import type { Dimension } from "./src/types/domain";
  const value: Dimension[];
  export default value;
}

declare module "*levels.yaml" {
  const value: string[];
  export default value;
}

declare module "*citations.yaml" {
  import type { Citations } from "./src/types/domain";
  const value: Citations;
  export default value;
}
