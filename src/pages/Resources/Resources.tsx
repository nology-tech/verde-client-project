import "./Resources.scss";
import ResourceCardList from "../../components/ResourceCardList/ResourceCardList";
import Layout from "../../components/Layout/Layout";
import Footer from "../../components/Footer/Footer";
import {
  ResourceCardList1,
  ResourceCardList2,
} from "../../data/ResourceCardLists";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import QueryBar from "../../components/QueryBar/QueryBar";

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
          <QueryBar
            label={"Health Products"}
            searchTerm={""}
            hasFilter={true}
            handleInput={function (): void {
              console.log("");
            }}
            columnViewClick={function (): void {
              console.log("");
            }}
            gridViewClick={function (): void {
              console.log("");
            }}
            sortClick={function (): void {
              console.log("");
            }}
            filterClick={function (): void {
              console.log("");
            }}
            variant={variant}
          />
          <div className="resources__titles">
            <p>Resource Name</p>
            <p>Quantity Remaining</p>
            <p className="resources__titles--spheadings">Cost Per Unit</p>
            <p className="resources__titles--spheadings">Auto-Purchase</p>
            <p className="resources__titles--spheadings">Auto-Purchase Level</p>
          </div>
          <h3 className="resources__mobile-header">Health Products</h3>
          <h3 className={`resources__staff resources__staff--${variant}`}>{ResourceCardList1[0].staffName}</h3>
          <ResourceCardList resources={ResourceCardList1} variant={variant} />
          <h3 className={`resources__staff resources__staff--${variant}`}>{ResourceCardList2[0].staffName}</h3>
          <ResourceCardList resources={ResourceCardList2} variant={variant} />
        </div>
      </main>
      <Footer variant={variant} />
    </Layout>
  );
};

export default Resources;
