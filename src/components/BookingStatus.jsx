import React from "react";

export default function BookingStatus() {
  return (
    <div className="w-[300px] bg-gray-400 flex justify-between p-4 rounded-sm">
      <div className="flex gap-1 items-center">
        <span className="w-4 h-4 p-1 bg-white block"></span>
        <p className="text-sm">N/A</p>
      </div>
      <div className="flex gap-1 items-center">
        <span className="w-4 h-4 p-1 bg-green-500 block"></span>
        <p className="text-sm">Selected</p>
      </div>
      <div className="flex gap-1 items-center">
        <span className="w-4 h-4 p-1 bg-black block"></span>
        <p className="text-sm">Occuped</p>
      </div>
    </div>
  );
}
