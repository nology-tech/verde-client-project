import Layout from "../../components/Layout/Layout";
import NavCardList from "../../components/NavCardList/NavCardList";
import { Labels } from "../../data/labels";

const Home = () => {
  return (
    <Layout>
      <h1>Page Heading</h1>
      <h2>Section Heading</h2>
      <h3>Panel Heading</h3>
      <h4>Ollie made this change</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non error
        dolor in nostrum minima odio a fuga saepe soluta adipisci perspiciatis
        maxime tempora, temporibus beatae voluptas repellat rerum. Dignissimos,
        necessitatibus.
      </p>
      <NavCardList labels={Labels} variant={"light"}/>
    </Layout>
  );
};

export default Home;
