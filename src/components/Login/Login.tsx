import "./Login.scss";
import logo from "../../assets/images/logo-black.svg";
import Button from "../Button/Button";



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
            <label htmlFor="email" className="login__form-label">Email Address</label>
            <input type="email" id="email" required className="login__form-input" />
          </div>
          <div className="login__form-container">
            <label htmlFor="password" className="login__form-label">Password</label>
            <input type="password" id="password" required className="login__form-input"/>
          </div>
          <div className="login__form-container-button">
          <Button
            label={"Login"}
            variant={"yellow"}
            size={"extra-large"}
            onClick={() => void {}}
          />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
