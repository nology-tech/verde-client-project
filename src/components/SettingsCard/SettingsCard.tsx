import "./SettingsCard.scss";
import { useState } from "react";
import Button from "../Button/Button";
import ToggleSwitch from "../Toggle/Toggle";
import moon from "../../assets/images/moon.svg";
import sun from "../../assets/images/sun.svg";

const SettingsCard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="settings-card">
      <div className="settings-card__section">
        <h2 className="settings-card__section--title">Light/Dark Mode:</h2>
        <div className="settings-card__container-mode">
          <img
            className="settings-card__icon settings-card__icon--sun"
            src={sun}
            alt="Sun Icon"
          ></img>
          <ToggleSwitch onToggle={handleToggleChange} />
          <img
            className="settings-card__icon settings-card__icon--moon"
            src={moon}
            alt="Moon Icon"
          ></img>
        </div>
      </div>
      <div className="settings-card__section">
        <h2 className="settings-card__section--title">Select Theme:</h2>
        <div className="settings-card__container-theme">
          <div className="settings-card__radio">
            <label className="settings-card__radio-container">
              <p className="settings-card__option">Modern</p>
              <input
                className="settings-card__radio--label"
                type="radio"
                value="enabled"
                name="theme"
              />
            </label>
          </div>
          <div className="settings-card__radio">
            <label className="settings-card__radio-container">
              <p className="settings-card__option">Tech</p>
              <input
                className="settings-card__radio--label"
                type="radio"
                value="disabled"
                name="theme"
              />
            </label>
          </div>
        </div>
        <div className="settings-card__button">
          <Button
            label={"Apply"}
            variant={"yellow"}
            size={"small"}
            onClick={() => void {}}
          />
        </div>
      </div>
    </div>
  );
};

export default SettingsCard;
