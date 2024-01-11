import './StaffBookingList.scss'
import StaffBookingCard from "../StaffBookingCard/StaffBookingCard"
import { StaffBookings } from "../../types/StaffBookingsTypes"

type StaffBookingListProps = {
    bookings: StaffBookings[];
    variant: "light" | "dark"

} 

const StaffBookingList = ({bookings, variant} : StaffBookingListProps) => {
    return (
        <div className='booking-list'>
            <div className="booking-list__titles">
                <p>Client Name</p>
                <p>Email Address</p>
                <p className="booking-list__titles--spheadings">Mobile Number</p>
                <p className="booking-list__titles--spheadings">Booking Date</p>
                <p className="booking-list__titles--spheadings">Booking Time</p>
            </div>
            {bookings.map((booking) => 
                <StaffBookingCard 
                clientName={booking.clientName} 
                email={booking.emailAddress} 
                mobileNumber={booking.mobNumber} 
                bookingDate={booking.bookingDate} 
                bookingTime={booking.bookingTime} 
                path={booking.path} 
                variant={variant}
                />
            )}    
            </div>
    )
}

export default StaffBookingList