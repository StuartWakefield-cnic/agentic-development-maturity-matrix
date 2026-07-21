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
          stroke={ring === 4 ? "#CCCFD4" : "#E5E7EA"}
          strokeWidth="1"
        />
      ))}
      {dimensions.map((d, i) => {
        const [x, y] = pt(i, 4);
        return <line key={d.id} x1={cx} y1={cy} x2={x} y2={y} stroke="#E5E7EA" strokeWidth="1" />;
      })}
      <polygon points={partPts} fill="#5C93FF" fillOpacity=".25" stroke="#5C93FF" strokeWidth="1.5" />
      <polygon
        points={attPts}
        fill="#035BFF"
        fillOpacity=".35"
        stroke="#035BFF"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {scores.map((sc, i) => {
        const [x, y] = pt(i, sc.attained);
        return <circle key={i} cx={x} cy={y} r="3.5" fill="#035BFF" />;
      })}
      {dimensions.map((d, i) => {
        const [x, y] = pt(i, 4.75);
        const anchor = Math.abs(x - cx) < 12 ? "middle" : x > cx ? "start" : "end";
        return (
          <text
            key={d.id}
            x={x}
            y={y + 4}
            fontFamily="Geologica,sans-serif"
            fontSize="11"
            fontWeight="600"
            fill="#333E53"
            textAnchor={anchor}
          >
            {d.glyph}
          </text>
        );
      })}
    </svg>
  );
}
