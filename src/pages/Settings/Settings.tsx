import "./Settings.scss";
import Layout from "../../components/Layout/Layout"; 
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";

type SettingsProps = {
    variant: "light" | "dark";
}

const Settings = ({variant}:SettingsProps) => {

    return(

    <Layout>
    <NavBar variant={variant} />
    <main className={`main main--${variant}`}>
      <Header
        title="Settings"
        variant={variant}
        buttonOption={true}
        buttonLabel="Log out"
        buttonVariant="yellow"
        dropdownOption={false}
      />
      <div className="settings-container">
      <div className="main__container">
        <Button label="Log Out" variant="red" path="/" />
      </div>
      </div>
    </main>
    <Footer variant={variant}/>
  </Layout>
    )

}

export default Settings;