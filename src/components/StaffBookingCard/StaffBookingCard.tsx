import './StaffBookingCard.scss'
import arrow from '../../assets/images/Arrow.svg'
import { Link } from 'react-router-dom'

type StaffBookingCardProps = {
    clientName: string;
    email: string;
    mobileNumber: string; 
    bookingDate: string;
    bookingTime: string;
    path: string;
}

const StaffBookingCard = ({ 
    clientName, 
    email, 
    mobileNumber, 
    bookingDate, 
    bookingTime, 
    path 
}: StaffBookingCardProps) => {
    
    return (
        <Link className='booking-card__link' to={path}>
            <div className='booking-card'>
                <p className='booking-card__name'>{clientName}</p>
                <p className='booking-card__email booking-card__info'>{email}</p>
                <p className='booking-card__number booking-card__info'>{mobileNumber}</p>
                <p className='booking-card__date booking-card__info'>{`${bookingDate}`}</p>
                <p className='booking-card__time'>{`${bookingTime}`}</p>
                <img className='booking-card__img' src={arrow} alt='arrow'/>
                
            </div>
        </Link>
    )
}

export default StaffBookingCard