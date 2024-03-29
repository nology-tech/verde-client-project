import "./SettingsCard.scss";
import {  ChangeEventHandler,  useState } from "react";
import Button from "../Button/Button";
import ToggleSwitch from "../Toggle/Toggle";
import moon from "../../assets/images/moon.svg";
import sun from "../../assets/images/sun.svg";

type SettingsCardProps = {
  variant: "light" | "dark";
  handleRadioClicked: ChangeEventHandler<HTMLInputElement>;
  onToggleDarkMode: (isDarkMode: boolean) => void;
  onApplyChanges: () => void;
  selectedOption: string;
};

const SettingsCard = ({
  variant,
  onToggleDarkMode,
  handleRadioClicked,
  onApplyChanges,
  selectedOption,
}: SettingsCardProps) => {
  const [isToggleOn, setIsToggleOn] = useState<boolean>(variant === "dark");

  const handleToggleChange = () => {
    const newToggleState = !isToggleOn;
    setIsToggleOn(newToggleState);
    onToggleDarkMode(newToggleState);
  };

  return (
    <div className={`settings-card settings-card--${variant}`}>
      <div className="settings-card__section">
        <h2 className={`settings-card__title settings-card__title--${variant}`}>
          Light/Dark Mode:
        </h2>
        <div className="settings-card__container-mode">
          <img
            className="settings-card__icon settings-card__icon--sun"
            src={sun}
            alt="Sun Icon"
          ></img>
          <ToggleSwitch checked={isToggleOn} onToggle={handleToggleChange} />
          <img
            className="settings-card__icon settings-card__icon--moon"
            src={moon}
            alt="Moon Icon"
          ></img>
        </div>
      </div>
      <div className="settings-card__section">
        <h2 className={`settings-card__title settings-card__title--${variant}`}>
          Select Theme:
        </h2>
        <div className="settings-card__container-theme">
          <div className="settings-card__radio">
            <label className="settings-card__radio-container">
              <p
                className={`settings-card__option settings-card__option--${variant}`}
              >
                Modern
              </p>
              <input
                className="settings-card__radio--label"
                type="radio"
                value="modern"
                name="theme"
                checked={selectedOption==="modern"}
                onChange={handleRadioClicked}
              />
            </label>
          </div>
          <div className="settings-card__radio">
            <label className="settings-card__radio-container">
              <p
                className={`settings-card__option settings-card__option--${variant}`}
              >
                Tech
              </p>
              <input
                className="settings-card__radio--label"
                type="radio"
                value="tech"
                name="theme"
                checked={selectedOption==="tech"}
                onChange={handleRadioClicked}
              />
            </label>
          </div>
        </div>
      </div>
      <div className="settings-card__button">
        <Button label={"Apply"} variant={"yellow"} onClick={onApplyChanges} />
      </div>
    </div>
  );
};

export default SettingsCard;
