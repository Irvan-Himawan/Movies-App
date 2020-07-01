import React from "react";

function search({ handleInput, search }) {
  return (
    <section>
      <div className="search">
        <input
          type="text"
          placeholder="Search a movie.."
          onChange={handleInput}
          onKeyPress={search}
        />
        <p>Example : Sherlock Holmes, Avengers, Lion King...</p>
      </div>
    </section>
  );
}

export default search;
