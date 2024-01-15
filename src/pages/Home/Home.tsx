import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import NavCardList from "../../components/NavCardList/NavCardList";
import { NavCardLabels } from "../../data/NavCardLabels";
import "./Home.scss";
import { useNavigate } from "react-router";
import { useEffect } from "react";
type HomeProps = {
  variant: "light" | "dark";
  authorization: () => void;
};

const Home = ({ variant, authorization}: HomeProps) => {
  const navigate = useNavigate()

  useEffect(() => {
    authorization()
      }, [authorization])

  const logout = () => {
    window.localStorage.setItem('isAuth', 'false')
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
          onClick={logout}
        />
        <div className="main__container">
          <NavCardList labels={NavCardLabels} variant={variant} />
        </div>
      </main>
    </Layout>
  );
};

export default Home;
