import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <h1>Page Heading</h1>
      <h2>Section Heading</h2>
      <h3>Panel Heading</h3>
      <h4>Ollie made this change</h4>
      <Button label={"Click me with longer text"} variant={"yellow"}/>
      <Button label={"Click me"} variant={"grey"}/>
      <Button label={"Click me"} variant={"red"}/>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non error
        dolor in nostrum minima odio a fuga saepe soluta adipisci perspiciatis
        maxime tempora, temporibus beatae voluptas repellat rerum. Dignissimos,
        necessitatibus.
      </p>
    </Layout>
  );
};

export default Home;
