import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import Button from  "../../components/Button/Button";
import NavCardList from "../../components/NavCardList/NavCardList"
import{NavCardLabels} from "../../data/NavCardLabels"
import './Home.scss'

const Home = () => {

  const onClick = () => {

  }
  return (
<Layout>
      <NavBar variant={"light"}/>
      <main className="main">
          <Header title="Home" variant="light" onClick={onClick} buttonOption={false} buttonLabel="Home" buttonVariant="purple" />
          <div className="main__container">
            <NavCardList labels={NavCardLabels} variant={"light"} />
            <Button size="large" label="Log Out" variant="yellow" onClick={onClick} path=""/>
          </div>
      </main>
    </Layout>
  );
};

export default Home;
