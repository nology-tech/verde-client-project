import "./StaffProfileCard.scss";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import { Staff } from "../../types/StaffNavTypes";

type StaffCardProps = {
  staff: Staff;
  variant: "light" | "dark";
};

const StaffProfileCard = ({ staff, variant }: StaffCardProps) => {
  return (
    <div className={`staffcard staffcard--${variant}`}>
      <ProfilePicture
        name={staff.name}
        titleOption={true}
        titleLabel={staff.role}
        editOption={true}
        variant="light"
      />
      <div className={`card-container card-container--${variant}`}>
        <div className={`description description--${variant}`}>
          <h1 className={`description__title description__title--${variant}`} >Employee Overview</h1>
          <h2 className={`description__content description__content--${variant}`} >{staff.description}</h2>
        </div>
        <div className={`information information--${variant}`} >
          <h2 className={`information__title information__title--${variant}`} >Employee start Date:</h2>
          <h2 className={`information__content information__content--${variant}`}>{staff.start}</h2>
          <h2 className={`information__title information__title--${variant}`} >Course Completion:</h2>
          <h2 className= {`information__content information__content--${variant}`}>{staff.courseEnd}</h2>
          <h2 className={`information__title information__title--${variant}`} >Manager:</h2>
          <h2 className={`information__content information__content--${variant}`}>{staff.manager}</h2>
        </div>
      </div>
    </div>
  );
};

export default StaffProfileCard;
