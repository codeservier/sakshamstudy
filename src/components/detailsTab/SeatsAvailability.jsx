import React from "react";

const SeatsAvailability = ({ numberOfSeats = 60, bookedSeats = 40 }) => {
  const generateSeats = (count) => {
    return Array.from({ length: count }, (_, index) => (index + 1).toString());
  };

  const seatsToShow = generateSeats(numberOfSeats);

  const availableSeats = seatsToShow.map((seat, index) => ({
    seat,
    isBooked: index < bookedSeats, 
  }));

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Seat Availability</h2>
      <div className="flex flex-col items-center">
        {availableSeats
          .reduce((rows, seat, index) => {
            const rowIndex = Math.floor(index / 15); 
            if (!rows[rowIndex]) {
              rows[rowIndex] = [];
            }
            rows[rowIndex].push(seat);
            return rows;
          }, [])
          .map((row, rowIndex) => (
            <div key={rowIndex} className="flex mb-2">
              {row.map(({ seat, isBooked }) => {
                const seatClass = isBooked
                  ? "bg-primary/80 text-white"
                  : "bg-gray-300 text-white";
                return (
                  <div
                    key={seat}
                    className={`w-12 h-12 mx-1 flex items-center justify-center rounded ${seatClass} text-xs font-medium`}
                    title={isBooked ? "Booked" : "Available"}
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
