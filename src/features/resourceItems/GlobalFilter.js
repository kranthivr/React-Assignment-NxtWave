import React from "react";

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span>
      <input
        className="search"
        type={filter || ""}
        placeholder="Search by title"
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
};
