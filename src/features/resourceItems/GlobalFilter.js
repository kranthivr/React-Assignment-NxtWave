import React from "react";

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span>
      <input
        className="search"
        type={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
};
