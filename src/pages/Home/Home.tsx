import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import NavCardList from "../../components/NavCardList/NavCardList";
import { NavCardLabels } from "../../data/NavCardLabels";
import SettingsCard from "../../components/SettingsCard/SettingsCard";
import "./Home.scss";
type HomeProps = {
  variant: "light" | "dark";
};

const Home = ({ variant }: HomeProps) => {
  return (
    <Layout>
      <NavBar variant={variant} />
      <main className={`main main--${variant}`}>
        <Header
          title="Home"
          variant={variant}
          buttonOption={false}
          buttonLabel="Home"
          buttonVariant="purple"
        />
        <div className="main__container">
          <NavCardList labels={NavCardLabels} variant={variant} />
          <Button size="large" label="Log Out" variant="yellow" path="/login" />
        </div>
      </main>
    </Layout>
  );
};

export default Home;
