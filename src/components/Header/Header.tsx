import { ChangeEventHandler } from "react";
import logo from "../../assets/images/logo.png";
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
  onChange?: ChangeEventHandler<HTMLSelectElement>;
};

const Header = ({
  title,
  variant,
  onClick,
  buttonOption,
  buttonLabel,
  buttonVariant,
  dropdownOption,
  onChange
}: HeaderProps) => {
  return (
    <div className={`header header--${variant}`}>
      <img src={logo} className="header__logo" alt="logo" />
      <div className="header__container">
      <h1 className={`header--${variant}__title`}>{title}</h1>
      {dropdownOption && (
        <select className={`header__dropdown header__dropdown--${variant}`} name="staff" id="stafflist" onChange={onChange}>
          {StaffList.map(staff => 
          <option key={staff.id} className={`header___dropdown--options--${variant}`} value={`${staff.name}`} >{`${staff.name}`} </option>
            )}
        </select>
      )}
      </div>
      {buttonOption && (
        <div className="header__button">
          <Button
            label={buttonLabel}
            variant={buttonVariant}
            onClick={onClick}
            path="/"
          />
        </div>)}
    </div>
  );
};

export default Header;
