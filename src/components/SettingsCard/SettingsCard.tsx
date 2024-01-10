import "./SettingsCard.scss";

const SettingsCard = () => {
    return (
      <div className="settings-card">
        <div className="settings-card__section">
          <h2 className="settings-card__section-title">Light/Dark Mode:</h2>
          <label className="settings-card__toggle">
            <input type="checkbox" className="settings-card__toggle--checkbox" />
            <span className="settings-card__toggle--slider"></span>
          </label>
        </div>
        <div className="settings-card__section">
          <h2 className="settings-card__section-title">Select Theme:</h2>
          <div className="settings-card__radio">
            <label>
              <input type="radio" value="enabled" name="theme"/>
              Modern
            </label>
          </div>
          <div className="settings-card__radio">
            <label>
              <input type="radio" value="disabled" name="theme" />
              Tech
            </label>
          </div>
        </div>
      </div>
    );
  };
  

export default SettingsCard