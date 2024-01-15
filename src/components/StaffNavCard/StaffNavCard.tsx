import "./StaffNavCard.scss";
import Arrow from "../../assets/images/arrow-icon.svg";

type StaffNavCardProps = {
  label: string;
  variant: "dark" | "light";
};

const StaffNavCard = ({ label, variant }: StaffNavCardProps) => {
  return (
    <>
      <div className={`staffnavcard staffnavcard--${variant}`}>
        <h3 className={`staffnavcard__name staffnavcard__name--${variant}`}>{label}</h3>
        <img className="staffnavcard__arrow" src={Arrow} alt={label}></img>
      </div>
    </>
  );
};

export default StaffNavCard;
