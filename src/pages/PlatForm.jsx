import React, { useState } from "react";
import MovieDrop from "../components/MovieDrop";
import BookingStatus from "../components/BookingStatus";
import SeatSelection from "../components/SeatSelection";

const movies = [
  {
    name: "Avengers",
    price: "20",
  },
  {
    name: "John wick",
    price: "30",
  },
  {
    name: "Pulp fiction",
    price: "40",
  },
  {
    name: "300",
    price: "50",
  },
];

export default function PlatForm() {
  const [movie, setMovie] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);

  return (
    <div className="flex flex-col gap-12 items-center h-screen p-4">
      <MovieDrop
        setMovie={setMovie}
        movie={movie}
        movies={movies}
        setSelectedMovie={setSelectedMovie}
      />
      <BookingStatus />
      <SeatSelection selectedMovie={selectedMovie} />
    </div>
  );
}
