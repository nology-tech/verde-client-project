import "./Login.scss";
import logo from "../../assets/images/logo-black.svg";
import Button from "../Button/Button";

type LoginProps = {};

const Login = () => {
  return (
    <div className="login">
      <img src={logo} alt="logo" className="login__logo" />
      <div className="login__container">
        <h2 className="login__welcome">Welcome Back</h2>
        <p className="login__message">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <form className="login__form">
          <div className="login__form-container">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" required />
          </div>
          <div className="login__form-container">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <Button
            label={"Login"}
            variant={"yellow"}
            size={"large"}
            onClick={() => void {}}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
