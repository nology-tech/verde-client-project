import "./StaffBookingCard.scss";
import { Link } from "react-router-dom";
import arrow from "../../assets/images/arrow-icon.svg";

type StaffBookingCardProps = {
  id?: number;
  clientName: string;
  email: string;
  mobNumber: string;
  bookingDate: string;
  bookingTime: string;
  path: string;
  variant: "light" | "dark";
};

const StaffBookingCard = ({
  id,
  clientName,
  email,
  mobNumber,
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
          {mobNumber}
        </p>
        <p className="booking-card__date booking-card__info">{`${bookingDate}`}</p>
        <p className="booking-card__time">{`${bookingTime}`}</p>
        <img className="booking-card__img" src={arrow} alt="arrow" />
      </div>
    </Link>
  );
};

export default StaffBookingCard;
