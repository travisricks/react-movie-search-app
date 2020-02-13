import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
  "no-movie-placeholder.png";

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <div>
        <img
          src={poster}
          alt={`The movie titled: ${movie.Title}`}
          width="200"
        />
      </div>
      <p>({movie.Year})</p>
    </div>
  );
};

export default Movie;
