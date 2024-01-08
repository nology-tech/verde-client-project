import "./Button.scss";

type ButtonProps = {
  label: string;
  variant: "yellow" | "grey" | "red";
};

const Button = ({ label, variant }: ButtonProps) => {
  const className = `button button--${variant}`;
  return <button className={className}>{label}</button>;
};

export default Button;
