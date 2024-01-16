import "../ClientProfile/ClientProfile.scss"
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import { StaffBookings } from "../../types/StaffBookingsTypes";

type ClientProfileProps = {
    clients: StaffBookings;
    variant: "light" | "dark";
}

const ClientProfile = ({clients, variant} : ClientProfileProps) => {
    return (
        <div className={`clientprofile clientprofile--${variant}`}>
            <div className={`clientcard__picture clientcard__picture--${variant} clientcard__picture--${size}`}>
            <ProfilePicture 
                name={clients.clientName} 
                titleOption={true} 
                titleLabel={clients.role} 
                variant={variant} 
                size="client-booking"
                />
             </div>

            <div className={`clientcard clientcard--${variant}`}>
                <h1 className={`clientcard__title clientcard__title--${variant} clientcard__mobile`} >Booking Details</h1>
                <h1 className={`clientcard__title clientcard__title--${variant} clientcard__desktop`} >Contact Details</h1>
                <h2 className={`clientcard__subtitle clientcard__subtitle--${variant}`} >Date of Birth:</h2>
                <h3 className={`clientcard__info clientcard__info--${variant}`} >{clients.dob}</h3>
                <h2 className={`clientcard__subtitle clientcard__subtitle--${variant}`} >Email Address:</h2>
                <h3 className={`clientcard__info clientcard__info--${variant}`} >{clients.emailAddress}</h3>
                <h2 className={`clientcard__subtitle clientcard__subtitle--${variant}`} >Mobile Number:</h2>
                <h3 className={`clientcard__info clientcard__info--${variant}`} >{clients.mobNumber}</h3>
                <h2 className={`clientcard__subtitle clientcard__subtitle--${variant} clientcard__mobile`} >Date:</h2>
                <h3 className={`clientcard__info clientcard__info--${variant} clientcard__mobile`} >{clients.bookingDate}</h3>
                <h2 className={`clientcard__subtitle clientcard__subtitle--${variant} clientcard__mobile`} >Time:</h2>
                <h3 className={`clientcard__info clientcard__info--${variant} clientcard__mobile`} >{clients.bookingTime}</h3>
                <h2 className={`clientcard__subtitle clientcard__subtitle--${variant} clientcard__mobile`} >Staff Member:</h2>
                <h3 className={`clientcard__info clientcard__info--${variant} clientcard__mobile`} >{clients.staffMember}</h3>
            </div>
            <div className={`clientcard__container clientcard__container--${variant} clientcard__desktop`}>
                <h1 className={`clientcard__title clientcard__title--${variant} clientcard__desktop`} >Booking Details</h1>
                <h2 className={`clientcard__subtitle clientcard__subtitle--${variant} clientcard__desktop`} >Date:</h2>
                <h3 className={`clientcard__info clientcard__info--${variant} clientcard__desktop`} >{clients.bookingDate}</h3>
                <h2 className={`clientcard__subtitle clientcard__subtitle--${variant} clientcard__desktop`} >Time:</h2>
                <h3 className={`clientcard__info clientcard__info--${variant} clientcard__desktop`} >{clients.bookingTime}</h3>
                <h2 className={`clientcard__subtitle clientcard__subtitle--${variant} clientcard__desktop`} >Staff Member:</h2>
                <h3 className={`clientcard__info clientcard__info--${variant} clientcard__desktop`} >{clients.staffMember}</h3>
            </div>
        </div>
    );
};

export default ClientProfile