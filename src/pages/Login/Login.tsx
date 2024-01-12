import "./Login.scss";
import logo from "../../assets/images/logo-black.svg";
import Button from "../../components/Button/Button";
import login from "../../assets/images/login-picture.png";
import { loginEmailPassword } from "../../firebase";

const Login = () => {
  // add useState for email, password, error
  
  return (
    <div className="login">
      <div className="login__page">
        <img src={logo} alt="logo" className="login__logo" />
        <div className="login__container">
          <h2 className="login__welcome">Welcome Back</h2>
          <p className="login__message">
            Feugiat magna viverra pellentesque habitant. Libero id amet nisl,
            tellus cras eleifend et in.
          </p>
          <form className="login__form">
            <div className="login__form-container">
              <label htmlFor="email" className="login__form--label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                className="login__form--input"
              />
            </div>
            <div className="login__form-container">
              <label htmlFor="password" className="login__form--label">
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                className="login__form--input"
              />
            </div>
            <div className="login__form--button">
              <Button
                label={"Login"}
                variant={"yellow"}
                size={"extra-large"}
                path="/home"
                onClick={loginEmailPassword}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="login__picture-container">
        <img className="login__picture" src={login} />
      </div>
    </div>
  );
};

export default Login;
