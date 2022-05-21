import React from 'react';

const Booking = ({ booking, setTreatment }) => {
    const {name, slots} = booking;

    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
        <div class="card-body text-center">
          <h2 class="text-lg font-bold text-secondary">{name}</h2>
          <p>{
                slots.length > 0
                ? <span>{slots[0]}</span>
                :<span className='text-red-500'>Try another day</span>
            }</p>
          <p className="">{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
          <div class="card-actions justify-center">
            <label
            for="booking-modal" // booking-modal id from BookingModal.js to open
            disabled={slots.length === 0} 
            onClick={() => setTreatment(booking)}
            class="btn btn-sm btn-secondary text-white uppercase">Book Appointment</label>
          </div>
        </div>
      </div>
    );
};

export default Booking;