import "./StaffNavCard.scss";
import Arrow from "../../../assets/images/home-icon.png";

type StaffNavCardProps = {
  label: string;
};

const StaffNavCard = ({ label }: StaffNavCardProps) => {
  return (
    <>
      <div className="staffnavcard">
        <h3 className="staffnavcard__name">{label}</h3>
        <img className="staffnavcard__arrow" src={Arrow} alt={label}></img>
      </div>
    </>
  );
};

export default StaffNavCard;
