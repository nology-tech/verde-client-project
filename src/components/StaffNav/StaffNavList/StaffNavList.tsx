import { Link } from "react-router-dom";
import { Staff } from "../data";

type StaffNavListProps = {
  staff: Staff;
};

const StaffNavList = ({ staff }: StaffNavListProps) => {
  return (
    <div className="staffnavlist">
      {staff.map((employee) => (
        <Link to="/" key={employee.id}>
            
        </Link>
      ))}{" "}
      {/* this is to be updatedd with name and surname? */}
    </div>
  );
};

export default StaffNavList;
