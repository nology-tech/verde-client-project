import "./Settings.scss";
import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import SettingsCard from "../../components/SettingsCard/SettingsCard";
import Modal from "../../components/Modal/Modal";
import { ChangeEvent, useState } from "react";
import { logout } from "../../firebase";

type SettingsProps = {
  variant: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  font: "modern" | "tech";
  setFont: (font: any) => void;
};

const Settings = ({ variant, setTheme, font, setFont }: SettingsProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isLogoutClicked, setIsLogoutClicked] = useState<boolean>(false);
  const [tempTheme, setTempTheme] = useState<"light" | "dark">(variant);
  const [fontTheme, setFontTheme] = useState<string>(font);

  /**
   * Handles the button click event to toggle the 'log out' modal visibility.
   */
  const handleButtonClick = () => {
    setIsClicked(!isClicked);
    setIsVisible(!isVisible);
  };

  /**
   * Handles the button click event when the logout button is clicked.
   */
  const handleLogoutClicked = () => {
    logout();
    setIsLogoutClicked(!isLogoutClicked);
  };

  /**
   * Handles the toggle of dark mode.
   *
   * @param {boolean} newThemeState - The new state of dark mode (true for dark, false for light).
   */
  const handleToggleDarkMode = (newThemeState: boolean) => {
    setTempTheme(newThemeState ? "dark" : "light");
  };

    
const handleRadioClicked = (event: ChangeEvent<HTMLInputElement>) => {
  setFontTheme(event.currentTarget.value);

};
  /**
   * Handles applying theme changes when the "Apply" button is clicked.
   * Only applies changes if the selected theme is different from the current theme.
   */
  const handleApplyChanges = () => {
    if (tempTheme !== variant) {
      setTheme(tempTheme);
    }

    if(fontTheme !== font){
      setFont(fontTheme);
    }
  };


  const modalOne = [
    <Button label={"Logout"} variant={"red"} onClick={handleLogoutClicked} />,
    <Button label={"Back"} variant={"yellow"} onClick={handleButtonClick} />,
  ];

  const modalTwo = [
    <Button
      label={"Back to Login"}
      variant={"red"}
      path="/"
    />,
  ];

  return (
    <Layout>
      <NavBar variant={variant} />
      <main className={`settings settings--${variant}`}>
        <Header
          title="Settings"
          variant={variant}
          buttonOption={true}
          onClick={handleButtonClick}
          buttonLabel="Log out"
          buttonVariant="yellow"
          dropdownOption={false} 
          font={"modern"}        />
        {!isClicked && (
          <div className="settings__container">
            <SettingsCard
              variant={variant}
              onToggleDarkMode={handleToggleDarkMode}
              onApplyChanges={handleApplyChanges} 
              handleRadioClicked={handleRadioClicked}
              
            />
            <div className={`settings__card settings__card--${variant}`}>
              <Button
                label="Log Out"
                variant="red"
                onClick={handleButtonClick}
              />
            </div>
          </div>
        )}
        <div className={"settings__modal"}>
          {isClicked && !isLogoutClicked && (
            <Modal
              title={"Are you sure you want to log out?"}
              buttons={modalOne}
              variant={variant}
            />
          )}
          {isLogoutClicked && (
            <Modal title={"Logged out!"} buttons={modalTwo} variant={variant} />
          )}
        </div>
      </main>

      <Footer variant={variant} />
    </Layout>
  );
};

export default Settings;
