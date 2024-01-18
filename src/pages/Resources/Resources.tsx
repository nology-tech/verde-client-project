import "./Resources.scss";
import ResourceCardList from "../../components/ResourceCardList/ResourceCardList";
import Layout from "../../components/Layout/Layout";
import Footer from "../../components/Footer/Footer";
import { ResourceCardList1, resourceCardList2 } from "../../data/ResourceCardLists";
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
      <div className="resources__titles">
        <p>Resource Name</p>
        <p>Quantity Remaining</p>
        <p className="resources__titles--spheadings">Cost Per Unit</p>
        <p className="resources__titles--spheadings">Auto-Purchase</p>
        <p className="resources__titles--spheadings">
          Auto-Purchase Level
        </p>
      </div>
          <ResourceCardList resources={ResourceCardList1} variant={variant} />
          <ResourceCardList resources={ResourceCardList1} variant={variant} />
        </div>

        
      </main>
      <Footer variant={variant} /> 
    </Layout>
  );
};

export default Resources;
