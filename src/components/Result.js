import React from "react";

function Result({ result, openModal }) {
  return (
    <div className="result" onClick={() => openModal(result.imdbID)}>
      {result.Poster !== "N/A" && Error ? (
        <img src={result.Poster} alt={result.Title} />
      ) : (
        <div className="no-image">
          <p>No Image</p>
        </div>
      )}

      <h3>
        {result.Title} ({result.Year})
      </h3>
    </div>
  );
}

export default Result;
