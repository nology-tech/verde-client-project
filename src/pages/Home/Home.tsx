import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import NavCardList from "../../components/NavCardList/NavCardList";
import { NavCardLabels } from "../../data/NavCardLabels";
import "./Home.scss";
import { useNavigate } from "react-router";
import { useEffect } from "react";
type HomeProps = {
  variant: "light" | "dark";
  authorization: () => void;
  setAuth: (isAuth : boolean) => void;
};

const Home = ({ variant, authorization, setAuth }: HomeProps) => {
  const navigate = useNavigate()

  useEffect(() => {
    authorization()
      }, [authorization])

  const logout = () => {
    setAuth(false)
    console.log('test')
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
        />
        <div className="main__container">
          <NavCardList labels={NavCardLabels} variant={variant} />
          <Button size="large" label="Log Out" variant="yellow"  onClick={logout}/>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
