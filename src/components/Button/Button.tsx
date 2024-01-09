import "./Button.scss";
import { Link } from "react-router-dom";

type ButtonProps = {
  label: string;
  variant: "yellow" | "grey" | "red" | "purple" | "red-alt";
  onClick: () => void;
  size?: "large" | "small";
  path?: string;
};

const Button = ({ label, variant, onClick, size, path }: ButtonProps) => {
  const className = `button button--${variant} button--${size || "small"}`;
  return (
    <Link to={path || "#"} >
      <button className={className} onClick={onClick}>
        {label}
      </button>
    </Link>
  );
};

export default Button;
