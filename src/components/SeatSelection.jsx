import React, { useState } from "react";

export default function SeatSelection({ selectedMovie }) {
  const rows = 8;
  const columns = 8;
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [isBooked, setIsBooked] = useState(false);
  const [bookedSeat, setBookedSeat] = useState([]);

  const handleSeatClick = (rowIndex, colIndex) => {
    const seatId = `${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`;

    if (selectedSeat.includes(seatId)) {
      setSelectedSeat((prevSeats) =>
        prevSeats.filter((seat) => seat !== seatId)
      );
    } else {
      setSelectedSeat((prevSeats) => [...prevSeats, seatId]);
    }
  };

  const handleBooking = () => {
    if (selectedSeat.length > 0) {
      setIsBooked(true);
      setBookedSeat([...selectedSeat]);
      selectedSeat([]);
    }
  };

  const grid = Array.from({ length: rows }, (_, rowIndex) => (
    <div key={rowIndex} className="grid grid-cols-8">
      {Array.from({ length: columns }, (_, colIndex) => (
        <div
          key={colIndex}
          className={` border border-white w-10 h-10 m-1 ${
            bookedSeat.includes(
              `${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`
            ) && isBooked
              ? "bg-black"
              : selectedSeat.includes(
                  `${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`
                )
              ? "bg-green-600"
              : "bg-white"
          }`}
          onClick={() => handleSeatClick(rowIndex, colIndex)}
        ></div>
      ))}
    </div>
  ));

  return (
    <div className="flex flex-col gap-3 w-[450px] items-center">
      <div className="mt-4 bg-gray-400 p-2">{grid}</div>
      <p className="text-white font-bold">
        {selectedSeat.length > 0
          ? `You have selected ${selectedSeat.length} for ${
              selectedSeat.length * selectedMovie.price
            }$`
          : ""}
      </p>
      <p className="text-white font-bold">
        The selected seats are : {selectedSeat.join(", ")}
      </p>
      <button
        className="bg-blue-500 text-white font-bold px-2 py-1 rounded-md disabled:bg-gray-500"
        disabled={selectedSeat.length === 0}
        onClick={handleBooking}
      >
        book
      </button>
    </div>
  );
}
