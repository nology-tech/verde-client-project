import "./StaffProfileCard.scss";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import { Staff } from "../../types/StaffNavTypes";

type StaffCardProps = {
  staff: Staff;
  variant: "light" | "dark";
};

const StaffProfileCard = ({ staff, variant }: StaffCardProps) => {
  return (
    <div className="staffcard">
      <ProfilePicture
        name={staff.name}
        titleOption={true}
        titleLabel={staff.role}
        editOption={true}
        variant="light"
      />
      <div className="card-container">
        <div className="description">
          <h1 className="description__title">Employee Overview</h1>
          <h2 className="description__content">{staff.description}</h2>
        </div>
        <div className="information">
          <h2 className="information__title">Employee start Date:</h2>
          <h2 className="information__content">{staff.start}</h2>
          <h2 className="information__title">Course Completion:</h2>
          <h2 className="information__content">{staff.courseEnd}</h2>
          <h2 className="information__title">Manager:</h2>
          <h2 className="information__content">{staff.manager}</h2>
        </div>
      </div>
    </div>
  );
};

export default StaffProfileCard;
