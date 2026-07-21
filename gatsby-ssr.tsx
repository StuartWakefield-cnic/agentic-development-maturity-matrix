import React from "react";
import type { GatsbySSR } from "gatsby";

export const onRenderBody: GatsbySSR["onRenderBody"] = ({ setHeadComponents }) => {
  setHeadComponents([
    <link key="gf-pre1" rel="preconnect" href="https://fonts.googleapis.com" />,
    <link key="gf-pre2" rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />,
    <link
      key="gf-css"
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Geologica:wght@300..700&display=swap"
    />,
  ]);
};
