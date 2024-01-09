import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import "./Home.scss";


const Home = () => {

  const onClick = () => {

  };

  return (
    <Layout>
      <NavBar />
      <main className="main">
      <Header title="Home" variant="light" onClick={onClick} buttonOption={false} buttonLabel="Home" buttonVariant="purple" />
      <Button size="large" label="Log Out" variant="yellow" onClick={onClick} path=""/>
      </main>
    </Layout>
  );
};

export default Home;
