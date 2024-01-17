import "../ClientNavCard/ClientNavCard.scss"
import Arrow from "../../assets/images/arrow-icon.svg";

type ClientNavCardProps = {
  label: string;
  dob:string;
  email:string;
  mob:string;
  role:string;
  variant: "dark" | "light";
};

const ClientNavCard = ({ label, dob, email, mob, role, variant }: ClientNavCardProps) => {
  return (
    <>
      <div className={`clientnavcard clientnavcard--${variant}`}>
        <h3 className={`clientnavcard__name clientnavcard__name--${variant}`}>{label}</h3>
        <p className={`clientnavcard__info clientnavcard__info--${variant}`}>{dob}</p>
        <p className={`clientnavcard__info clientnavcard__info--${variant}`}>{email}</p>
        <p className={`clientnavcard__sp clientnavcard__sp--${variant}`}>{mob}</p>
        <p className={`clientnavcard__sp clientnavcard__sp--${variant}`}>{role}</p>
        <img className="clientnavcard__arrow" src={Arrow} alt={label}></img>
      </div>
    </>
  );
};

export default ClientNavCard;
