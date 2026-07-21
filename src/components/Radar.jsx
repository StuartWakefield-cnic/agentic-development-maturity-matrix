import React from "react";

export default function Radar({ dimensions, scores }) {
  const size = 340;
  const cx = size / 2;
  const cy = size / 2;
  const R = 118;
  const n = dimensions.length;
  const pt = (i, v) => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / n;
    const r = (R * v) / 4;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  };
  const partPts = scores.map((sc, i) => pt(i, Math.min(4, sc.attained + sc.partial)).join(",")).join(" ");
  const attPts = scores.map((sc, i) => pt(i, sc.attained).join(",")).join(" ");

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width="100%"
      role="img"
      aria-label="Radar chart of attained maturity level per dimension"
    >
      {[1, 2, 3, 4].map((ring) => (
        <polygon
          key={ring}
          points={dimensions.map((_, i) => pt(i, ring).join(",")).join(" ")}
          fill="none"
          stroke={ring === 4 ? "#C3CCC8" : "#DDE3E0"}
          strokeWidth="1"
        />
      ))}
      {dimensions.map((d, i) => {
        const [x, y] = pt(i, 4);
        return <line key={d.id} x1={cx} y1={cy} x2={x} y2={y} stroke="#DDE3E0" strokeWidth="1" />;
      })}
      <polygon points={partPts} fill="#8FBFB3" fillOpacity=".28" stroke="#8FBFB3" strokeWidth="1.5" />
      <polygon
        points={attPts}
        fill="#0E5A4C"
        fillOpacity=".38"
        stroke="#0E5A4C"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {scores.map((sc, i) => {
        const [x, y] = pt(i, sc.attained);
        return <circle key={i} cx={x} cy={y} r="3.5" fill="#0E5A4C" />;
      })}
      {dimensions.map((d, i) => {
        const [x, y] = pt(i, 4.75);
        const anchor = Math.abs(x - cx) < 12 ? "middle" : x > cx ? "start" : "end";
        return (
          <text
            key={d.id}
            x={x}
            y={y + 4}
            fontFamily="IBM Plex Mono,monospace"
            fontSize="11"
            fontWeight="600"
            fill="#3D4A46"
            textAnchor={anchor}
          >
            {d.glyph}
          </text>
        );
      })}
    </svg>
  );
}
