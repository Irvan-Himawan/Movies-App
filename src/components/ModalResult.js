import React from "react";

function ModalResult({ selected, closeModal }) {
  return (
    <section className="modal">
      <div className="content">
        <img src={selected.Poster} alt={selected.Title} />
        <div className="description">
          <p>Name : {selected.Title}</p>
          <p>Released : {selected.Released}</p>
          <p>Genre : {selected.Genre}</p>
          <p>Rated : {selected.Rated}</p>
          <p>Duration: {selected.Runtime}</p>
          <p>Actor : {selected.Actors} </p>
          <p>Languages : {selected.Language}</p>
          <p>Production : {selected.Production}</p>
          <p>Director : {selected.Director}</p>
          <p>Writer : {selected.Writer} </p>
          <p>Awards : {selected.Awards} </p>

          <p
            style={{
              marginTop: "10px",
            }}
          >
            Plot :{" "}
          </p>
          <p
            style={{
              textAlign: "center",

              fontWeight: "200",
              letterSpacing: "normal",
            }}
          >
            " {selected.Plot} "
          </p>
        </div>
        <div className="imdb">
          <h1>
            IMDB Votes :{" "}
            <span style={{ letterSpacing: "2px" }}>{selected.imdbVotes}</span>
          </h1>
          <p></p>
        </div>
        <div className="imdb">
          <h1>
            IMDB Rating :{" "}
            <span style={{ letterSpacing: "2px" }}>{selected.imdbRating}</span>
          </h1>
          <span></span>
        </div>
        <button
          className="close"
          onClick={closeModal}
          style={{ textAlign: "center", alignSelf: "center" }}
        >
          Close
        </button>
      </div>
    </section>
  );
}

export default ModalResult;
