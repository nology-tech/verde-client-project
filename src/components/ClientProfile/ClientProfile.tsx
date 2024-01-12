import "../ClientProfile/ClientProfile.scss"
import ProfilePicture from "../ProfilePicture/ProfilePicture"

type ClientProfileProps = {
    id: number;
    clientName: string;
    role: string;
    dob: string;
    emailAddress: string;
    mobileNumber: string;
    appointmentDate: string;
    appointmentTime: string;
    staffMember: string;
    path: string;
    variant: "light" | "dark";
}

const ClientProfile = ({clientName, role, dob, emailAddress, mobileNumber, appointmentDate, appointmentTime, staffMember, variant} : ClientProfileProps) => {
    return (
        <div className={`clientprofile clientprofile--${variant}`}>
            <div className={`clientcard__picture clientcard__picture--${variant}`}>
            <ProfilePicture 
                name={clientName} 
                titleOption={true} 
                titleLabel={role} 
                variant={variant} 
                />
             </div>

            <div className={`clientcard clientcard--${variant}`}>
                <h1 className={`clientcard__title clientcard__title--${variant} clientcard__mobile`} >Booking Details</h1>
                <h1 className={`clientcard__title clientcard__title--${variant} clientcard__desktop`} >Contact Details</h1>
                <h2 className={`clientcard__subtitle clientcard__subtitle--${variant}`} >Date of Birth:</h2>
                <h3 className={`clientcard__info clientcard__info--${variant}`} >{dob}</h3>
                <h2 className={`clientcard__subtitle clientcard__subtitle--${variant}`} >Email Address:</h2>
                <h3 className={`clientcard__info clientcard__info--${variant}`} >{emailAddress}</h3>
                <h2 className={`clientcard__subtitle clientcard__subtitle--${variant}`} >Mobile Number:</h2>
                <h3 className={`clientcard__info clientcard__info--${variant}`} >{mobileNumber}</h3>
                <h2 className={`clientcard__subtitle clientcard__subtitle--${variant} clientcard__mobile`} >Date:</h2>
                <h3 className={`clientcard__info clientcard__info--${variant} clientcard__mobile`} >{appointmentDate}</h3>
                <h2 className={`clientcard__subtitle clientcard__subtitle--${variant} clientcard__mobile`} >Time:</h2>
                <h3 className={`clientcard__info clientcard__info--${variant} clientcard__mobile`} >{appointmentTime}</h3>
                <h2 className={`clientcard__subtitle clientcard__subtitle--${variant} clientcard__mobile`} >Staff Member:</h2>
                <h3 className={`clientcard__info clientcard__info--${variant} clientcard__mobile`} >{staffMember}</h3>
            </div>
            <div className={`clientcard__container clientcard__container--${variant} clientcard__desktop`}>
                <h1 className={`clientcard__title clientcard__title--${variant} clientcard__desktop`} >Booking Details</h1>
                <h2 className={`clientcard__subtitle clientcard__subtitle--${variant} clientcard__desktop`} >Date:</h2>
                <h3 className={`clientcard__info clientcard__info--${variant} clientcard__desktop`} >{appointmentDate}</h3>
                <h2 className={`clientcard__subtitle clientcard__subtitle--${variant} clientcard__desktop`} >Time:</h2>
                <h3 className={`clientcard__info clientcard__info--${variant} clientcard__desktop`} >{appointmentTime}</h3>
                <h2 className={`clientcard__subtitle clientcard__subtitle--${variant} clientcard__desktop`} >Staff Member:</h2>
                <h3 className={`clientcard__info clientcard__info--${variant} clientcard__desktop`} >{staffMember}</h3>
            </div>
        </div>
    );
};

export default ClientProfile