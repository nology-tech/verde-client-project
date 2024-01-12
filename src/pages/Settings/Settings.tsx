import "./Settings.scss";
import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import SettingsCard from "../../components/SettingsCard/SettingsCard";

type SettingsProps = {
  variant: "light" | "dark";
};

const Settings = ({ variant }: SettingsProps) => {
  return (
    <Layout>
      <NavBar variant={variant} />
      <main className={`settings settings--${variant}`}>
        <Header
          title="Settings"
          variant={variant}
          buttonOption={true}
          buttonLabel="Log out"
          buttonVariant="yellow"
          dropdownOption={false}
        />
        <div className="settings__container">
          <SettingsCard variant={variant} />
          <div className="settings__card">
            <Button label="Log Out" variant="red" path="/" />
          </div>
        </div>
      </main>
      <Footer variant={variant} />
    </Layout>
  );
};

export default Settings;
