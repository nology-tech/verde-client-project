import "./StaffProfileCard.scss";
import ProfilePicture from "../ProfilePicture/ProfilePicture";


export type Staff = {
  id: number | null;
  name: string | null;
  start: string;
  courseEnd: string;
  manager: string;
  role: string | null;
  description: string;
};


type StaffCardProps = {
  employee: Staff;
}

const sampleProfile = {
  profileImg: "/src/assets/images/profile-pic.png",
  memberName: "01 Staff"
}


const StaffProfileCard = 
({employee
} : StaffCardProps) => {
  return (
    <div className="staffcard">
      <ProfilePicture profileImg={sampleProfile.profileImg} memberName={sampleProfile.memberName}  />
      <div className="card-container">
        <div className="card-container__description">
          <h1 className="card-container__description--title">
            Employee Overview
          </h1>
          <h2 className="card-container__description--info">
            {employee.description}
          </h2>
        </div>
        <div className="card-container__information">
          <h2 className="card-container__information--date">
            Employee start Date:
          </h2>
          <h2 className="card-container__information--answer">{employee.start}</h2>
          <h2 className="card-container__information--complete">
            Course Completion:
          </h2>
          <h2 className="card-container__information--answer">{employee.courseEnd}</h2>
          <h2 className="card-container__information--Manager">Manager:</h2>
          <h2 className="card-container__information--answer">{employee.manager}</h2>
        </div>
      </div>
    </div>
  );
};

export default StaffProfileCard;
