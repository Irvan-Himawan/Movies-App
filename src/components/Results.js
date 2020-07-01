import React from "react";
import Result from "./Result";

function Results({ results, openModal }) {
  return (
    <section className="results">
      {results.map((result) => (
        <Result key={result.imdbID} result={result} openModal={openModal} />
      ))}
    </section>
  );
}

export default Results;
