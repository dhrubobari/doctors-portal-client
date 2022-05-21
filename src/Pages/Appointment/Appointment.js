import React, { useState } from 'react';
import AppointmentBanner from '../Home/Appointments/AppointmentBanner';
import AvailableAppointment from '../Home/Appointments/AvailableAppointment';
import Footer from '../Home/Shared/Footer';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableAppointment date={date}></AvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;