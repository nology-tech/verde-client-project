import "./StaffNavCard.scss";
import Arrow from "../../assets/images/Arrow.svg";

type StaffNavCardProps = {
  label: string;
};

const StaffNavCard = ({ label }: StaffNavCardProps) => {
  return (
    <>
      <div className="navcard">
        <h3 className="navcard__name">{label}</h3>
        <img className="navcard__arrow" src={Arrow} alt={label}></img>
      </div>
    </>
  );
};

export default StaffNavCard;
