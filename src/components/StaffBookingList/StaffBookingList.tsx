import "./StaffBookingList.scss";
import StaffBookingCard from "../StaffBookingCard/StaffBookingCard";
import { StaffBookings } from "../../types/StaffBookingsTypes";


type StaffBookingListProps = {
  bookings: StaffBookings[];
  variant: "light" | "dark";
};

const StaffBookingList = ({ bookings, variant }: StaffBookingListProps) => {
  return (
    <div className="booking-list">
      <div className="booking-list__titles">
        <p>Client Name</p>
        <p>Email Address</p>
        <p className="booking-list__titles--spheadings">Mobile Number</p>
        <p className="booking-list__titles--spheadings">Booking Date</p>
        <p className="booking-list__titles--spheadings">Booking Time</p>
      </div>
      <div className="booking-list__container">
        {bookings.map((booking) => (
          <StaffBookingCard
            key={booking.id}
            id={booking.id}
            clientName={booking.clientName}
            email={booking.emailAddress}
            mobNumber={booking.mobNumber}
            bookingDate={booking.bookingDate}
            bookingTime={booking.bookingTime}
            path={booking.path + "/" + booking.id}
            variant={variant}
          />
        ))}
      </div>
    </div>
  );
};

export default StaffBookingList;
