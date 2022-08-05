import React from "react";

export const Sort = () => {
  return (
    <div>
      <select name="sortValue" id="sortValue" defaultValue="none">
        <option value="none" selected disabled hidden>
          Select
        </option>
        <option value="time">Recently Added</option>
        <option value="ascend">Ascending</option>
        <option value="desend">Descending</option>
      </select>
    </div>
  );
};
