import Layout from "../../components/Layout/Layout";
import StaffProfileCard from "../../components/StaffProfileCard/StaffProfileCard";
const Home = () => {
  const StaffList = [
    {
      id: 1,
      name: "Staff 1",
      start: "01/01/2022",
      courseEnd: "02/01/2022",
      manager: "Manager 1",
      role: "role",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      image: "",
    },
    {
      id: 2,
      name: "Staff 2",
      start: "01/01/2022",
      courseEnd: "02/01/2022",
      manager: "Manager 1",
      role: "role",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      image: "",
    },
    {
      id: 3,
      name: "Staff 3",
      start: "01/01/2022",
      courseEnd: "02/01/2022",
      manager: "Manager 1",
      role: "role",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      image: "",
    },
    {
      id: 4,
      name: "Staff 4",
      start: "01/01/2022",
      courseEnd: "02/01/2022",
      manager: "Manager 1",
      role: "role",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      image: "",
    },
    {
      id: 5,
      name: "Staff 5",
      start: "01/01/2022",
      courseEnd: "02/01/2022",
      manager: "Manager 1",
      role: "role",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      image: "",
    },
  ];

  return (
    <Layout>
      <StaffProfileCard employee={StaffList[0]} />
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
