import "../ClientProfile/ClientProfile.scss"
import ProfilePicture from "../ProfilePicture/ProfilePicture"
import { StaffBookings } from "../../types/StaffBookingsTypes"


type ClientProfileProps = {
    clientinfo: StaffBookings;
    variant: "light" | "dark";
    size: "default" | "staffBooking";
}

const ClientProfile = ({clientinfo, variant, size} : ClientProfileProps) => {
    return (
        <div className={`clientprofile clientprofile--${variant}`}>
            <div className={`clientcard__picture clientcard__picture--${variant} clientcard__picture--${size}`}>
            <ProfilePicture
                name={clientinfo.clientName}
                titleOption={true}
                titleLabel={clientinfo.role}
                editOption={true}
                variant={variant}
                size={size}
            /></div>

            <div className={`clientcard clientcard--${variant}`}>
                <h1 className={`clientcard__title clientcard__title--${variant} clientcard__mobile`} >Booking Details</h1>
                <h1 className={`clientcard__title clientcard__title--${variant} clientcard__desktop`} >Contact Details</h1>
                <h2 className={`clientcard__subtitle clientcard__subtitle--${variant}`} >Date of Birth:</h2>
                <h3 className={`clientcard__info clientcard__info--${variant}`} >{clientinfo.dob}</h3>
                <h2 className={`clientcard__subtitle clientcard__subtitle--${variant}`} >Email Address:</h2>
                <h3 className={`clientcard__info clientcard__info--${variant}`} >{clientinfo.emailAddress}</h3>
                <h2 className={`clientcard__subtitle clientcard__subtitle--${variant}`} >Mobile Number:</h2>
                <h3 className={`clientcard__info clientcard__info--${variant}`} >{clientinfo.mobNumber}</h3>
                <h2 className={`clientcard__subtitle clientcard__subtitle--${variant} clientcard__mobile`} >Date:</h2>
                <h3 className={`clientcard__info clientcard__info--${variant} clientcard__mobile`} >{clientinfo.bookingDate}</h3>
                <h2 className={`clientcard__subtitle clientcard__subtitle--${variant} clientcard__mobile`} >Time:</h2>
                <h3 className={`clientcard__info clientcard__info--${variant} clientcard__mobile`} >{clientinfo.bookingTime}</h3>
                <h2 className={`clientcard__subtitle clientcard__subtitle--${variant} clientcard__mobile`} >Staff Member:</h2>
                <h3 className={`clientcard__info clientcard__info--${variant} clientcard__mobile`} >{clientinfo.staffMember}</h3>
            </div>
            <div className={`clientcard__container clientcard__container--${variant} clientcard__desktop`}>
                <h1 className={`clientcard__title clientcard__title--${variant} clientcard__desktop`} >Booking Details</h1>
                <h2 className={`clientcard__subtitle clientcard__subtitle--${variant} clientcard__desktop`} >Date:</h2>
                <h3 className={`clientcard__info clientcard__info--${variant} clientcard__desktop`} >{clientinfo.bookingDate}</h3>
                <h2 className={`clientcard__subtitle clientcard__subtitle--${variant} clientcard__desktop`} >Time:</h2>
                <h3 className={`clientcard__info clientcard__info--${variant} clientcard__desktop`} >{clientinfo.bookingTime}</h3>
                <h2 className={`clientcard__subtitle clientcard__subtitle--${variant} clientcard__desktop`} >Staff Member:</h2>
                <h3 className={`clientcard__info clientcard__info--${variant} clientcard__desktop`} >{clientinfo.staffMember}</h3>
            </div>
        </div>
    );
};

export default ClientProfile