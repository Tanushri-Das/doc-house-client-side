import React, { useState } from 'react'
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner'
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment'

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div className='mt-20'>
        <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
        <AvailableAppointment selectedDate={selectedDate}/>
    </div>
  )
}

export default Appointment