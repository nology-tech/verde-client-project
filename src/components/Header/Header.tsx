import logo from "../../../public/images/logo.png";
import Button from "../Button/Button";
import "./Header.scss";

type HeaderProps = {
  title: string;
  variant: "light" | "dark";
  onClick: () => void;
  buttonOption: boolean;

};

const Header = ({ title, variant, onClick, buttonOption }: HeaderProps) => {
  return (
    <div className={`header header--${variant}`}>
      <img src={logo} className="header__logo" alt="logo" />
      <h1 className="header__title">{title}</h1>
      {}
      <div className="header__button">
      <Button label="Book" variant="yellow"  onClick={onClick}/>

      </div>
    </div>
  );
};

export default Header;
