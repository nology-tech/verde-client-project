import { Link } from "react-router-dom";
import { Staff } from "../data";
import StaffNavCard from "../StaffNavCard/StaffNavCard";

type StaffNavListProps = {
  staff: Staff[];
};

const StaffNavList = ({ staff }: StaffNavListProps) => {
  return (
    <div className="staffnavlist">
      {staff.map((employee) => (
        <Link to="/" key={employee.id}>
          <StaffNavCard label={employee.name} />
        </Link>
      ))}{" "}
      {/* this is to be updatedd with name and surname? */}
    </div>
  );
};

export default StaffNavList;
