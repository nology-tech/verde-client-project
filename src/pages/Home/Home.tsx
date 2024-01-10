import Layout from "../../components/Layout/Layout";
import StaffProfileCard from "../../components/StaffProfileCard/StaffProfileCard";

import { StaffList } from "../../data/StaffNavList";

const Home = () => {
  return (
    <Layout>
      <StaffProfileCard staff={StaffList[0]} variant="light" />
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
    </Layout>
  );
};

export default Home;
