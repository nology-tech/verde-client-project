import { useState } from "react";
import "./Resources.scss";
import ResourceCardList from "../../components/ResourceCardList/ResourceCardList";
import Layout from "../../components/Layout/Layout";
import Footer from "../../components/Footer/Footer";
import {
  ResourceCardList1,
  ResourceCardList2,
  resourceCardListAdmin,
} from "../../data/ResourceCardLists";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import QueryBar from "../../components/QueryBar/QueryBar";
import { ResourceCardProps } from "../../types/ResourceCardTypes";

type ResourcesProps = {
  variant: "light" | "dark";
};

const Resources = ({ variant }: ResourcesProps) => {
  const [sortAscending, setSortAscending] = useState(true);

  const toggleSort = () => {
    setSortAscending((prevSort) => !prevSort);
  };

  const sortResources = (resources: ResourceCardProps[]) => {
    return sortAscending
      ? resources.sort((a, b) => {
          const propA = a.resourceName;
          const propB = b.resourceName;

          return propA.localeCompare(propB);
        })
      : [...resources].reverse();
  };

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
          path="/resources/create"
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
            sortClick={toggleSort}
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

          <section className="resources__items">
            <h3 className={`resources__staff resources__staff--${variant}`}>
              {ResourceCardList1[0].staffName}
            </h3>
            <ResourceCardList
              resources={sortResources(ResourceCardList1)}
              variant={variant}
            />
          </section>
          <section className="resources__items">
            <h3 className={`resources__staff resources__staff--${variant}`}>
              {ResourceCardList2[0].staffName}
            </h3>
            <ResourceCardList
              resources={sortResources(ResourceCardList2)}
              variant={variant}
            />
          </section>

          <section className="resources__items">
            <h3 className={`resources__admin resources__admin--${variant}`}>
              Admin
            </h3>
            <ResourceCardList
              resources={sortResources(resourceCardListAdmin)}
              variant={variant}
            />
          </section>
        </div>
      </main>
      <Footer variant={variant} />
    </Layout>
  );
};

export default Resources;
