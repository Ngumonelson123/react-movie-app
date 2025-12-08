import React from "react";
import { useParams, Link } from "react-router-dom";

function MovieDescription({ movies }) {
  const { title } = useParams();
  const movie = movies.find((m) => m.title === title);

  return (
    <div style={{ padding: "20px" }}>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>

      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="Movie Trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <br /><br />

      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default MovieDescription;
