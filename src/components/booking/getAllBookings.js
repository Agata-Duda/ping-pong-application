import React from "react"

const getAllBookings = ({ bookings }) => (
  <div>
    {bookings.map(({ id, eventStart }) => (
      <div className="bookingsList" key={id}>
        <p> {eventStart}</p>
        <p> {id}</p>
      </div>
    ))}
  </div>
)
export default getAllBookings
