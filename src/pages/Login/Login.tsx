import "./Login.scss";
import logo from "../../assets/images/logo-black.svg";
import Button from "../../components/Button/Button";
import login from "../../assets/images/login-picture.png";
import { loginEmailPassword } from "../../firebase";
import { ChangeEvent, useState } from "react";
import { FirebaseError } from "firebase/app";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  /**
   * Handles the change event when the user inputs their email.
   *
   * @param {ChangeEvent<HTMLInputElement>} event - The input change event.
   * @returns {void}
   */
  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    const email = event.currentTarget.value;
    setEmail(email);
  };

  /**
   * Handles the change event when the user inputs their password.
   *
   * @param {ChangeEvent<HTMLInputElement>} event - The input change event.
   * @returns {void}
   */
  const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    const password = event.currentTarget.value;
    setPassword(password);
  };

  /**
   * Handles the login process, attempting to log in the user.
   *
   * @async
   * @returns {Promise<void>}
   */
  const handleLogin = async (userEmail: string, userPassword: string) => {
    try {
      await loginEmailPassword(userEmail, userPassword);
      navigate("/home");
    } catch (error) {
      if (
        error instanceof FirebaseError &&
        error.code === "auth/user-not-found"
      ) {
        console.log("User not found");
      } else if (
        error instanceof FirebaseError &&
        error.code === "auth/wrong-password"
      ) {
        console.log("Wrong password");
      } else {
        console.error("Login failed with error:");
      }
    }
  };

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
                onChange={handleEmailInput}
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
                onChange={handlePasswordInput}
              />
            </div>
            <div className="login__form--button">
              <Button
                label={"Login"}
                variant={"yellow"}
                size={"extra-large"}
                onClick={handleLogin.bind(this, email, password)}
              />
            </div>
            <div className="login__form--button">
              <Button
                label={"Preview Application"}
                variant={"yellow"}
                size={"extra-large"}
                onClick={handleLogin.bind(
                  this,
                  import.meta.env.VITE_TEST_EM,
                  import.meta.env.VITE_TEST_PW
                )}
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
