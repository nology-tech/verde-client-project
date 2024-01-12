import "./Settings.scss";
import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import SettingsCard from "../../components/SettingsCard/SettingsCard";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";

type SettingsProps = {
  variant: "light" | "dark";
};

const Settings = ({ variant }: SettingsProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isLogoutClicked, setIsLogoutClicked] = useState<boolean>(false);

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
    setIsVisible(!isVisible);
  };

  const handleLogoutClicked = () => {
    setIsLogoutClicked(!isLogoutClicked)
  }

  const modalOne = [
    <Button label={"Logout"} variant={"red"} onClick={handleLogoutClicked} />,
    <Button
      label={"Back"}
      variant={"yellow"}
      onClick={handleButtonClick}
    />,
  ];

  const modalTwo = [
    <Button label={"Back to Login"} variant={"red"} onClick={handleLogoutClicked} path="/"/>,
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
        />
        {!isClicked && (
        <div className="settings__container">
          <SettingsCard variant={variant} />
          <div className={`settings__card settings__card--${variant}`}>
            <Button label="Log Out" variant="red" onClick={handleButtonClick} />
          </div>
        </div>
        )}
          <div className={"settings__modal"}>
          {isClicked && !isLogoutClicked && (
            <Modal
              title={"Are you sure you want to log out?"}
              buttons={modalOne}
              variant={"dark"}
            />
          )}
          {isLogoutClicked && (
            <Modal
              title={"Logged out!"}
              buttons={modalTwo}
              variant={"dark"}
            />
          )}
          </div>
          
      </main>

      <Footer variant={variant} />
    </Layout>
  );
};

export default Settings;
