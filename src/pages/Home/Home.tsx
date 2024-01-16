import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import NavCardList from "../../components/NavCardList/NavCardList";
import { NavCardLabels } from "../../data/NavCardLabels";
import "./Home.scss";
import { useNavigate } from "react-router";
import { logout } from "../../firebase";
import Button from "../../components/Button/Button";
// import { useEffect } from "react";
type HomeProps = {
  variant: "light" | "dark";

};

const Home = ({ variant }: HomeProps) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    logout();
    navigate('/')
  }

  return (
    <Layout>
      <NavBar variant={variant} />
      <main className={`main main--${variant}`}>
        <Header
          title="Home"
          variant={variant}
          buttonOption={true}
          buttonLabel="Logout"
          buttonVariant="yellow"
          dropdownOption={false}
          onClick={handleLogout}
        />
        <div className="main__container">
          <NavCardList labels={NavCardLabels} variant={variant} />
          <Button size="large" label="Log Out" variant="yellow" path="/" />
        </div>
      </main>
    </Layout>
  );
};

export default Home;
