import React from "react";

function Filter({ searchTitle, setSearchTitle, searchRating, setSearchRating }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search by title"
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        min="0"
        max="5"
        value={searchRating}
        onChange={(e) => setSearchRating(e.target.value)}
        style={{ padding: "5px" }}
      />
    </div>
  );
}

export default Filter;
