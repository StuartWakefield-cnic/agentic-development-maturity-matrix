import React from "react";
import type { Dimension, Score } from "../types/domain";

interface MatrixTableProps {
  dimensions: Dimension[];
  levelNames: string[];
  scores: Score[];
}

export default function MatrixTable({ dimensions, levelNames, scores }: MatrixTableProps) {
  return (
    <table className="matrix">
      <thead>
        <tr>
          <th>Dimension</th>
          {levelNames.map((_, i) => (
            <th key={i}><span className={`lvl-chip l${i + 1}`}>L{i + 1}</span></th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dimensions.map((d, i) => {
          const sc = scores[i];
          return (
            <tr key={d.id}>
              <th scope="row" title={d.name}>
                {d.glyph} · {d.name.split(" &")[0].split(",")[0]}
              </th>
              {sc.per.map((p, li) => {
                let cls = "none";
                if (li < sc.attained) cls = "done";
                else if (p.done > 0) cls = "part";
                return (
                  <td key={li}>
                    <span className={`cell ${cls}`}>
                      {p.done}/{p.total}
                    </span>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
