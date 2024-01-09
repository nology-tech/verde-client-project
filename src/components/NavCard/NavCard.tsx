import Button from "../Button/Button";
import "./NavCard.scss";
import Arrow from "../../assets/images/Arrow.svg";

type NavCardProps = {
  label: string;
  buttonLabel: string;
  variant: "light" | "dark";
};

const NavCard = ({ label, buttonLabel, variant }: NavCardProps) => {
  function onButtonClick(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <div className={`navcard navcard--${variant}`}>
        <h3 className={`navcard__name navcard__name--${variant}`}>{label}</h3>
        <img className="navcard__arrow" src={Arrow} alt={label}></img>
        <Button label={buttonLabel} variant="yellow" onClick={onButtonClick} />
      </div>
    </>
  );
};

export default NavCard;