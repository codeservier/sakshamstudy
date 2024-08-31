import React, { useState } from "react";

const seatsData = [
  ["A1", "A2", "A3", "A4", "A5"],
  ["B1", "B2", "B3", "B4", "B5"],
  ["C1", "C2", "C3", "C4", "C5"],
  ["D1", "D2", "D3", "D4", "D5"],
  ["E1", "E2", "E3", "E4", "E5"],
];

const bookedSeats = ["A1", "B3", "D4"];

const SeatsAvailability = ({ numberofseats }) => {
  
  const totalSeatsToShow = numberofseats || seatsData.flat().length;
  const availableSeats = seatsData.flat().slice(0, totalSeatsToShow).map((seat) => ({
    seat,
    isBooked: bookedSeats.includes(seat),
  }));

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Seat Availability</h2>
      <div className="flex flex-col items-center">
        {seatsData
          .flat()
          .slice(0, totalSeatsToShow)
          .reduce((rows, seat, index) => {
            const rowIndex = Math.floor(index / 5);
            if (!rows[rowIndex]) {
              rows[rowIndex] = [];
            }
            rows[rowIndex].push(seat);
            return rows;
          }, [])
          .map((row, rowIndex) => (
            <div key={rowIndex} className="flex mb-2">
              {row.map((seat) => {
                const seatStatus = availableSeats.find((s) => s.seat === seat);
                const seatClass = seatStatus.isBooked
                  ? "bg-red-500 text-white"
                  : "bg-green-500 text-white";
                return (
                  <div
                    key={seat}
                    className={`w-32 h-12 mx-1 flex items-center justify-center rounded ${seatClass} text-xs font-medium`}
                    title={seatStatus.isBooked ? "Booked" : "Available"}
                  >
                    <span className="text-lg font-bold">{seat}</span>
                  </div>
                );
              })}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SeatsAvailability;
