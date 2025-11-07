import React from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

import { formatPercent } from "../utils.js";

const ChangeBadge = ({ percent }) => {
  const up = percent >= 0;
  return (
    <span className={`badge ${up ? "bg-success-subtle text-success-emphasis border border-success-subtle" : "bg-danger-subtle text-danger-emphasis border border-danger-subtle"}`}>
      {up ? <FaChevronCircleUp /> : <FaChevronCircleDown />} ({formatPercent(percent)})
    </span>
  );
};

export default ChangeBadge;
