import React from "react";
import { FaEye } from "react-icons/fa";

import { formatNumber } from "../utils.js";

function ScoreBadge({
  score = 0,
  size = "md",
  className = "",
  containerClassName = "",
  style = {},
}) {
  const clamped = Math.max(0, Math.min(100, Number(score)));

  // Sizes (diameter and stroke) tailored for table use
  const sizes = {
    sm: { d: 28, stroke: 4, font: 11 },
    md: { d: 36, stroke: 5, font: 12 },
    lg: { d: 48, stroke: 6, font: 14 },
  };
  const { d, stroke, font } = sizes[size] || sizes.md;

  const r = (d - stroke) / 2;
  const c = 2 * Math.PI * r;
  const dash = (clamped / 100) * c;
  const dashOffset = c - dash;

  // Pick Bootstrap color based on score
  const colorClass = clamped >= 75 ? "text-success" : clamped >= 50 ? "text-warning" : "text-danger";

  return (
    <div className={`${containerClassName} score-badge`}>
      <div
        className={`${colorClass} d-inline-flex align-items-center justify-content-center position-relative ${className}`}
        style={{width: d, height: d, ...style}}
        aria-label={`Score ${clamped} out of 100`}
        title={`Score ${clamped}`}
      >
        <svg width={d} height={d} viewBox={`0 0 ${d} ${d}`}>
        {/* Track */}
        <circle
          cx={d / 2}
          cy={d / 2}
          r={r}
          fill="none"
          stroke="var(--bs-secondary-bg, #e9ecef)"
          strokeWidth={stroke}
        />
        {/* Progress */}
        <circle
          cx={d / 2}
          cy={d / 2}
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={dashOffset}
          style={{
          transform: "rotate(-90deg)",
          transformOrigin: "50% 50%",
          transition: "stroke-dashoffset 400ms ease",
        }}
        />
      </svg>
        <span
          className="position-absolute fw-semibold"
          style={{ fontSize: font, lineHeight: 1 }}
        >
          <FaEye className="see-score" />
          <span className="score">{formatNumber(clamped)}</span>
        </span>
      </div>
    </div>
  );
}

export default ScoreBadge;
