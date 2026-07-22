import React from "react";

/**
 * The wreath is generated from a few tunable constants rather than
 * hand-drawn paths, so the shape can be reproduced by adjusting the
 * numbers below instead of re-authoring SVG coordinates by hand.
 *
 * Layout on a 0..100 viewBox:
 * - leaves are pointed lens shapes strung along an invisible guide
 *   circle, oriented tangentially and mirrored left/right
 * - the top sixth of the icon (y < VIEW_SIZE / 6) is left empty
 * - the star sits on the vertical centre line, two-thirds up from
 *   the bottom, spanning roughly a third of the icon
 */
const VIEW_SIZE = 100;

const GUIDE_CENTER = { x: 50, y: 50 };
const GUIDE_RADIUS = 36;

const LEAVES_PER_SIDE = 10;
const LEAF_HALF_LENGTH = 8; // tangential half-length of each leaf
const LEAF_HALF_WIDTH = 6; // perpendicular half-width (bulge) of each leaf
const LEAF_STAGGER = 6; // alternating in/out radius offset for staggered placement
const LEAF_OUTWARD_TILT_DEG = 18; // rotates each leaf's axis away from pure tangent, toward radially outward
const SWEEP_START_DEG = 7; // gap left at the bottom stem join
const SWEEP_END_DEG = 136; // gap left at the top opening (pulled in slightly so the outward tilt still clears the empty top sixth)

const STAR_CENTER_X = 50;
const STAR_CENTER_Y = VIEW_SIZE - (3 / 5) * VIEW_SIZE; // two-thirds up from the bottom
const STAR_OUTER_RADIUS = 22; // ~ a third of the icon across
const STAR_INNER_RADIUS = STAR_OUTER_RADIUS * 0.5;

interface Point {
  x: number;
  y: number;
}

function toRadians(deg: number): number {
  return (deg * Math.PI) / 180;
}

function formatNum(n: number): string {
  return n.toFixed(2);
}

/** Point + outward tangent/radial unit vectors on the guide circle, `deg` measured from the bottom, mirrored by `side`. */
function pointOnGuideCircle(
  deg: number,
  side: -1 | 1,
  radius: number
): { point: Point; tangent: Point; radial: Point } {
  const theta = toRadians(-90 - side * deg);
  const point = {
    x: GUIDE_CENTER.x + radius * Math.cos(theta),
    y: GUIDE_CENTER.y - radius * Math.sin(theta),
  };
  const dTheta = -side;
  const tx = -radius * Math.sin(theta) * dTheta;
  const ty = -radius * Math.cos(theta) * dTheta;
  const len = Math.hypot(tx, ty);
  const radial = { x: (point.x - GUIDE_CENTER.x) / radius, y: (point.y - GUIDE_CENTER.y) / radius };
  return { point, tangent: { x: tx / len, y: ty / len }, radial };
}

/**
 * A pointed, curved-sided leaf (tail -> bulge -> tip -> bulge -> tail) centred at `deg`
 * along the guide circle. `isOuter` picks which way it rotates: inner (staggered closer
 * to the centre) leaves tilt toward the centre, outer leaves tilt away from it — so
 * rotation direction alternates in lockstep with the radius stagger, fanning the leaves
 * apart instead of tilting every leaf the same way regardless of side.
 */
function buildLeafPath(deg: number, side: -1 | 1, radius: number, isOuter: boolean): string {
  const { point, tangent, radial } = pointOnGuideCircle(deg, side, radius);
  // Rotate the leaf's long axis away from pure tangent, toward (inner) or away from
  // (outer) the radial direction — tangent and radial are orthonormal, so this is an
  // exact rotation; `radial` itself already mirrors correctly between the two sides.
  const tiltRad = toRadians(LEAF_OUTWARD_TILT_DEG);
  const tiltSign = isOuter ? 1 : -1;
  const axis = {
    x: tangent.x * Math.cos(tiltRad) + tiltSign * radial.x * Math.sin(tiltRad),
    y: tangent.y * Math.cos(tiltRad) + tiltSign * radial.y * Math.sin(tiltRad),
  };
  const normal = { x: -axis.y, y: axis.x };
  const tail = { x: point.x - axis.x * LEAF_HALF_LENGTH, y: point.y - axis.y * LEAF_HALF_LENGTH };
  const tip = { x: point.x + axis.x * LEAF_HALF_LENGTH, y: point.y + axis.y * LEAF_HALF_LENGTH };
  const bulgeOut = { x: point.x + normal.x * LEAF_HALF_WIDTH, y: point.y + normal.y * LEAF_HALF_WIDTH };
  const bulgeIn = { x: point.x - normal.x * LEAF_HALF_WIDTH, y: point.y - normal.y * LEAF_HALF_WIDTH };

  return (
    `M${formatNum(tail.x)},${formatNum(tail.y)} ` +
    `Q${formatNum(bulgeOut.x)},${formatNum(bulgeOut.y)} ${formatNum(tip.x)},${formatNum(tip.y)} ` +
    `Q${formatNum(bulgeIn.x)},${formatNum(bulgeIn.y)} ${formatNum(tail.x)},${formatNum(tail.y)} Z`
  );
}

function buildWreathLeafPaths(): string[] {
  const paths: string[] = [];
  for (const side of [-1, 1] as const) {
    for (let i = 0; i < LEAVES_PER_SIDE; i++) {
      const t = (i + 0.5) / LEAVES_PER_SIDE;
      const deg = SWEEP_START_DEG + t * (SWEEP_END_DEG - SWEEP_START_DEG);
      const isOuter = i % 2 !== 0;
      const radius = GUIDE_RADIUS + (isOuter ? LEAF_STAGGER / 2 : -LEAF_STAGGER / 2);
      paths.push(buildLeafPath(deg, side, radius, isOuter));
    }
  }
  return paths;
}

function buildStarPath(): string {
  const points: Point[] = [];
  const step = Math.PI / 5;
  for (let i = 0; i < 10; i++) {
    const r = i % 2 === 0 ? STAR_OUTER_RADIUS : STAR_INNER_RADIUS;
    const angle = toRadians(-90) + i * step;
    points.push({ x: STAR_CENTER_X + r * Math.cos(angle), y: STAR_CENTER_Y + r * Math.sin(angle) });
  }
  return points.map((p, i) => `${i === 0 ? "M" : "L"}${formatNum(p.x)},${formatNum(p.y)}`).join(" ") + " Z";
}

const WREATH_LEAF_PATHS = buildWreathLeafPaths();
const STAR_PATH = buildStarPath();

interface AchievementWreathProps {
  className?: string;
}

export default function AchievementWreath({ className }: AchievementWreathProps) {
  return (
    <svg className={className} width="16" height="16" viewBox={`0 0 ${VIEW_SIZE} ${VIEW_SIZE}`} aria-hidden="true">
      <g fill="currentColor">
        {WREATH_LEAF_PATHS.map((d, i) => (
          <path key={i} d={d} />
        ))}
        <path d={STAR_PATH} />
      </g>
    </svg>
  );
}
