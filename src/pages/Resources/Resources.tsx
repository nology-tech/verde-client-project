import "./Resources.scss";
import ResourceCardList from "../../components/ResourceCardList/ResourceCardList";
import Layout from "../../components/Layout/Layout";
import Footer from "../../components/Footer/Footer";
import { ResourceCardListHealth } from "../../data/ResourceCardLists";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";

type ResourcesProps = {
  variant: "light" | "dark";
};

const Resources = ({ variant }: ResourcesProps) => {
  return (
    <Layout>
      <NavBar variant={variant} />
      <main className={`resources resources--${variant}`}>
        <Header
          title="Resources"
          variant={variant}
          buttonOption={true}
          //onClick={handleButtonClick}
          buttonLabel="+ Create"
          buttonVariant="yellow"
          dropdownOption={false}
        />
      <div className="resources__container">
          <ResourceCardList resources={ResourceCardListHealth} variant={variant} />
        </div>

        
      </main>
      <Footer variant={variant} /> 
    </Layout>
  );
};

export default Resources;
