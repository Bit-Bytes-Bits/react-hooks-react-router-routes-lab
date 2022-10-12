import React from "react";
import { movies } from "../data";

const movieList = movies.map(movie => (
  <div key={movie.title}>
    Name: {movie.title}
    Time: {movie.time}
    <ul>
      {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
    </ul>
  </div>
))

function Movies() {
  return <div>
    <h1>Movies Page</h1>
   {movieList}
  </div>;
}

export default Movies;
