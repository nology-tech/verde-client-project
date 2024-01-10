import './StaffBookingList.scss'
import StaffBookingCard from "../StaffBookingCard/StaffBookingCard"
import React from 'react'

const StaffBookingList = () => {
    return (
        <div className='booking-list'>
            <p>Client Name</p>
            <StaffBookingCard clientName='Joe Bloggs' email="joe.bloggs@gmail.com" mobileNumber='0987654321' bookingDate='1/1/2024' bookingTime='1:30' path="#" />
        </div>
    )

}

export default StaffBookingList