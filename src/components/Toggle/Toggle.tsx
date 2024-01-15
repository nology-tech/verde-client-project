import "./Toggle.scss";

type ToggleSwitchProps = {
  onToggle: (isChecked: boolean) => void;
  checked: boolean;
};

const ToggleSwitch = ({ onToggle, checked }: ToggleSwitchProps) => {
  
  /**
   * Handles the toggle event when the toggle switch state changes.
   */
  const handleToggle = () => {
    onToggle(!checked);
  };

  return (
    <label className="toggle-switch">
      <input
        className="toggle-switch__input"
        type="checkbox"
        checked={checked}
        onChange={handleToggle}
      />
      <span className="toggle-switch__slider"></span>
    </label>
  );
};

export default ToggleSwitch;
