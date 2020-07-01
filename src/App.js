import React, { useState, useEffect } from "react";
import Search from "./components/search";
import axios from "axios";
import Results from "./components/Results";
import ModalResult from "./components/ModalResult";
import Footer from "./components/Footer";

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
    newRelease: [],
  });
  const apiUrl = "http://www.omdbapi.com/?apikey=2267788b";

  useEffect(() => {
    axios(apiUrl);
  });
  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiUrl + "&s=" + state.s)
        .then(({ data }) => {
          let results = data.Search;

          setState((prevState) => {
            return {
              ...prevState,
              results: results,
            };
          });
        })
        .catch((Error) => {
          console.log(Error);
        });
    }
  };

  const handleInput = (e) => {
    let s = e.target.value;

    setState((prevState) => {
      return {
        ...prevState,
        s: s,
      };
    });
  };

  const openModal = (id) => {
    axios(apiUrl + "&i=" + id).then(({ data }) => {
      let result = data;
      console.log(result);
      setState((prevState) => {
        return {
          ...prevState,
          selected: result,
        };
      });
    });
  };

  const closeModal = () => {
    setState((prevState) => {
      return {
        ...prevState,
        selected: {},
      };
    });
  };
  return (
    <React.Fragment>
      <header>
        <h1>Movie Gag</h1>
        <p>Find your movie(s) information in here</p>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
        {typeof state.results != "undefined" ? (
          <Results results={state.results} openModal={openModal} />
        ) : (
          <div className="notFound">
            <p>Sorry, we couldn't find your movies</p>
          </div>
        )}

        {typeof state.selected.Title != "undefined" ? (
          <ModalResult selected={state.selected} closeModal={closeModal} />
        ) : (
          false
        )}
      </main>

      <Footer />
    </React.Fragment>
  );
}

export default App;
