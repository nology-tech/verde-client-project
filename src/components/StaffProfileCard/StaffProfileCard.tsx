import "./StaffProfileCard.scss";
import StaffInfo from "../StaffInfo/StaffInfo";
import ProfilePicture from "../ProfilePicture/ProfilePicture";

const StaffProfileCard = () => {
    return (
        <div className="staffcard">
        <ProfilePicture />
        <StaffInfo />
        </div>
    )
}

export default StaffProfileCard;

