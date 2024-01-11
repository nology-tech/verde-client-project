import "./SettingsCard.scss";
import {useState} from "react";
import Button from "../Button/Button";
import ToggleSwitch from "../Toggle/Toggle";


const SettingsCard = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);
  
    const handleToggleChange = () => {
      setIsDarkMode(!isDarkMode);
    }

    return (
      <div className="settings-card">
        <div className="settings-card__section">
          <h2 className="settings-card__section--title">Light/Dark Mode:</h2>
          <ToggleSwitch onToggle={handleToggleChange}/> 
        </div>
        <div className="settings-card__section">
          <h2 className="settings-card__section--title">Select Theme:</h2>
          <div className="settings-card__radio">
            <label>
              <input className="settings-card__radio--label" type="radio" value="enabled" name="theme"/>
              Modern
            </label>
          </div>
          <div className="settings-card__radio">
            <label>
              <input className="settings-card__radio--label" type="radio" value="disabled" name="theme" />
              Tech
            </label>
          </div>
            <Button
                label={"Apply"}
                variant={"yellow"}
                size={"small"}
                path="/home"
                onClick={() => void {}}
              />
        </div>
      </div>
    );
  };
  

export default SettingsCard