import logo from "../../../public/images/logo.png";
import { StaffList } from "../../data/StaffNavList";
import Button from "../Button/Button";
import "./Header.scss";

type HeaderProps = {
  title: string;
  variant: "light" | "dark";
  onClick?: () => void;
  buttonOption: boolean;
  buttonLabel: string;
  buttonVariant: "yellow" | "purple";
  dropdownOption: boolean;
};

const Header = ({
  title,
  variant,
  onClick,
  buttonOption,
  buttonLabel,
  buttonVariant,
  dropdownOption
}: HeaderProps) => {
  return (
    <div className={`header header--${variant}`}>
      <img src={logo} className="header__logo" alt="logo" />
      <h1 className={`header--${variant}__title`}>{title}</h1>
      {dropdownOption && (
        <select className={`header__dropdown`} name="staff" id="stafflist">
          {StaffList.map(staff => 
          <option className={`header___dropdown--options`} value={`${staff.name}`} >{`${staff.name}`}</option>
            )}
        </select>
      )}
      {buttonOption && (
        <div className="header__button">
          <Button
            label={buttonLabel}
            variant={buttonVariant}
            onClick={onClick}
          />
        </div>)}
    </div>
  );
};

export default Header;
