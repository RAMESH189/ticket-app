import React, { useState } from "react";

export default function MovieDrop({
  setMovie,
  movies,
  movie,
  setSelectedMovie,
}) {
  const handleChange = (e) => {
    setMovie(e.target.value);
    const item = movies.find((item) => item.name === e.target.value);
    setSelectedMovie(item);
  };

  return (
    <div className="flex gap-3">
      <h2 className="text-white font-bold">Select a movie : </h2>
      <select
        name="MovieDropdown"
        className="px-2 rounded-sm outline-none focus:right-0"
        onChange={handleChange}
      >
        <option value="">select an option</option>
        {movies.map((movie) => (
          <option value={movie.name} key={movie.name}>
            {movie.name} {movie.price}$
          </option>
        ))}
      </select>
    </div>
  );
}
