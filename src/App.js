import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import moviesData from "./moviesData";
import MovieList from "./components/MovieList";
import MovieDescription from "./components/MovieDescription";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState(0);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      movie.rating >= searchRating
  );

  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1>My Movie App</h1>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddMovie addMovie={addMovie} />
                <Filter
                  searchTitle={searchTitle}
                  setSearchTitle={setSearchTitle}
                  searchRating={searchRating}
                  setSearchRating={setSearchRating}
                />
                <MovieList movies={filteredMovies} />
              </>
            }
          />

          <Route path="/movie/:title" element={<MovieDescription movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
