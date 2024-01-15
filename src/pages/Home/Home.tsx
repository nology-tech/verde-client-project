import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import NavCardList from "../../components/NavCardList/NavCardList";
import { NavCardLabels } from "../../data/NavCardLabels";
import "./Home.scss";
import { useEffect } from "react";
type HomeProps = {
  variant: "light" | "dark";
  authorization: () => void;
};

const Home = ({ variant, authorization }: HomeProps) => {
  

  useEffect(() => {
    authorization()
      }, [])

  const logout = () => {
    
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
          <Button size="large" label="Log Out" variant="yellow" path="/" />
        </div>
      </main>
    </Layout>
  );
};

export default Home;
