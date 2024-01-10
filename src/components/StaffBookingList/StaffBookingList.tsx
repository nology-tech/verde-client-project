import './StaffBookingList.scss'
import StaffBookingCard from "../StaffBookingCard/StaffBookingCard"
import { StaffBookings } from "../../types/StaffBookingsTypes"
import { StaffBookingsList } from "../../data/StaffBookingsList"
import React from 'react'

type StaffBookingListProps = {
    bookings: StaffBookings[];

} 

const StaffBookingList = () => {
    return (
        <div className='booking-list'>
            <p>Client Name</p>
            <p>Email Address</p>
            <p>Mobile Number</p>
            <p>Booking Date</p>
            <p>Booking Time</p>
            <StaffBookingCard clientName='Joe Bloggs' email="joe.bloggs@gmail.com" mobileNumber='0987654321' bookingDate='1/1/2024' bookingTime='1:30' path="#" />
        </div>
    )

}

export default StaffBookingList