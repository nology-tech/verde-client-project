import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import "./Home.scss";
import { useNavigate } from "react-router";
import { logout } from "../../firebase";
import ItemRequestCard from "../../components/ItemRequestCard/ItemRequestCard";
import { ResourceCardList1 } from "../../data/ResourceCardLists";
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
       <ItemRequestCard resource={ResourceCardList1[0]} variant={variant} id={0}  placeholder={"Edit ..."}/>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
