import Button from "../Button/Button";
import "./NavCard.scss";

type NavCardProps = {
  label: string;
  buttonLabel: string;
};

const NavCard = ({ label, buttonLabel }: NavCardProps) => {
  function onButtonClick(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="navcard">
      <h3 className="navcard__name">{label}</h3>
      <img className="navcard__arrow" src="" alt={label}></img>
      <Button label={buttonLabel} variant="yellow" onClick={onButtonClick} />
    </div>
  );
};

export default NavCard;
