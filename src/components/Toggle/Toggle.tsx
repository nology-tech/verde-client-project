import { useState } from 'react';
import './Toggle.scss';

type ToggleSwitchProps = {
  onToggle: (isChecked: boolean) => void;
};

const ToggleSwitch = ({ onToggle } :ToggleSwitchProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onToggle(newCheckedState);
  };

  return (
    <label className="toggle-switch">
      <input className="toggle-switch__input" type="checkbox" checked={isChecked} onChange={handleToggle} />
      <span className="toggle-switch__slider"></span>
    </label>
  );
};

export default ToggleSwitch;