import { Link } from "react-router-dom";
import { Staff } from "../../types/StaffNavTypes";
import StaffNavCard from "../StaffNavCard/StaffNavCard";
import "./StaffNavList.scss";

type StaffNavListProps = {
  staff: Staff[];
  variant: "light" | "dark";
};

const StaffNavList = ({ staff, variant }: StaffNavListProps) => {
  
  
  return (
    <div className="staffnavlist">
      {staff.map((employee) => (
        <Link className="staffnavlist__link" to={`/staff/${employee.id}`} key={employee.id}>
          <StaffNavCard label={employee.name} variant={variant} />
        </Link>
      ))}
      {/* this is to be updatedd with name and surname? */}
    </div>
  );
};

export default StaffNavList;
