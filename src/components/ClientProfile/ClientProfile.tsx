import "../ClientProfile/ClientProfile.scss"
import ProfilePicture from "../ProfilePicture/ProfilePicture"
import { ClientInfo } from "../../types/ClientProfileTypes"

type ClientProfileProps = {
    clientinfo: ClientInfo;
    variant: "light" | "dark";
}

const ClientProfile = ({clientinfo, variant} : ClientProfileProps) => {
    return (
        <div className={`clientcard clientcard--${variant}`}>
            <ProfilePicture
                name={clientinfo.clientName}
                titleOption={false}
                titleLabel={"client profile"} //HOTFIX required for title label
                editOption={true}
                variant={variant}
            />
            <div className={`clientcard-container clientcard-container--${variant}`}>
                <h1 className={`clientcard__title clientcard__title--${variant} clientcard__desktop`} >Contact Details</h1>
                <h1 className={`clientcard__title clientcard__title--${variant}`} >Booking Details</h1>
                <h2 className={`clientcard__subtitle clientcard__subtitle--${variant}`} >Date of Birth:</h2>
                <h3 className={`clientcard__info clientcard__info--${variant}`} >{clientinfo.dob}</h3>
                <h2 className={`clientcard__subtitle clientcard__subtitle--${variant}`} >Email Address:</h2>
                <h3 className={`clientcard__info clientcard__info--${variant}`} >{clientinfo.emailAddress}</h3>
                <h2 className={`clientcard__subtitle clientcard__subtitle--${variant}`} >Mobile Number:</h2>
                <h3 className={`clientcard__info clientcard__info--${variant}`} >{clientinfo.mobileNumber}</h3>
                <h2 className={`clientcard__subtitle clientcard__subtitle--${variant}`} >Date:</h2>
                <h3 className={`clientcard__info clientcard__info--${variant}`} >{clientinfo.appointmentDate}</h3>
                <h2 className={`clientcard__subtitle clientcard__subtitle--${variant}`} >Time:</h2>
                <h3 className={`clientcard__info clientcard__info--${variant}`} >{clientinfo.appointmentTime}</h3>
                <h2 className={`clientcard__subtitle clientcard__subtitle--${variant}`} >Staff Member:</h2>
                <h3 className={`clientcard__info clientcard__info--${variant}`} >{clientinfo.staffMember}</h3>
            </div>
            <div className={`clientcard-container clientcard-container--${variant} clientcard__desktop`}>
                <h1 className={`clientcard__title clientcard__title--${variant} clientcard__desktop`} >Booking Details</h1>
                <h2 className={`clientcard__subtitle clientcard__subtitle--${variant} clientcard__desktop`} >Date:</h2>
                <h3 className={`clientcard__info clientcard__info--${variant} clientcard__desktop`} >{clientinfo.appointmentDate}</h3>
                <h2 className={`clientcard__subtitle clientcard__subtitle--${variant} clientcard__desktop`} >Time:</h2>
                <h3 className={`clientcard__info clientcard__info--${variant} clientcard__desktop`} >{clientinfo.appointmentTime}</h3>
                <h2 className={`clientcard__subtitle clientcard__subtitle--${variant} clientcard__desktop`} >Staff Member:</h2>
                <h3 className={`clientcard__info clientcard__info--${variant} clientcard__desktop`} >{clientinfo.staffMember}</h3>
            </div>
        </div>
    );
};

export default ClientProfile