import "./Button.scss";

type ButtonProps = {
  label: string;
  variant: "yellow" | "grey" | "red" | "purple" | "red-alt";
  onClick: () => void;
};

const Button = ({ label, variant, onClick }: ButtonProps) => {
  const className = `button button--${variant}`;
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
