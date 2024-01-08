import logo from "../../../public/images/logo.png";
import "./Header.scss";

type HeaderProps = {
  title: string;
  variant: "light" | "dark";
};

const Header = ({ title, variant }: HeaderProps) => {
  return (
    <div className={`header header--${variant}`}>
      <img src={logo} className="header__logo" alt="logo" />
      <h1 className="header__title">{title}</h1>
    </div>
  );
};

export default Header;
