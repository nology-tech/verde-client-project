import "./StaffBookingCard.scss";
import { Link } from "react-router-dom";

type StaffBookingCardProps = {
  id: number;
  clientName: string;
  email: string;
  mobileNumber: string;
  bookingDate: string;
  bookingTime: string;
  path: string;
  variant: "light" | "dark";
};

const StaffBookingCard = ({
  id,
  clientName,
  email,
  mobileNumber,
  bookingDate,
  bookingTime,
  path,
  variant,
}: StaffBookingCardProps) => {
  return (
    <Link className="booking-card__link" to={path}>
      <div className={`booking-card booking-card--${variant}`}>
        <p className="booking-card__name">{clientName}</p>
        <p className={`booking-card__id booking-card--${variant}`}>{`ID: ${id}`}</p>
        <p className="booking-card__email booking-card__info">{email}</p>
        <p className="booking-card__number booking-card__info">
          {mobileNumber}
        </p>
        <p className="booking-card__date booking-card__info">{`${bookingDate}`}</p>
        <p className="booking-card__time">{`${bookingTime}`}</p>
        <img className="booking-card__img" src={"images/Altarrow.png"} alt="arrow" />
      </div>
    </Link>
  );
};

export default StaffBookingCard;
