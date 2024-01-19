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
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const sortResources = (
    resources: ResourceCardProps[],
    order: "asc" | "desc"
  ) => {
    return resources.sort((a, b) => {
      const comparison = a.resourceName.localeCompare(b.resourceName);
      return order === "asc" ? comparison : -comparison;
    });
  };

  const filteredResources1 = ResourceCardList1.filter((resource) =>
    resource.resourceName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredResources2 = ResourceCardList2.filter((resource) =>
    resource.resourceName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredResourcesAdmin = resourceCardListAdmin.filter((resource) =>
    resource.resourceName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <NavBar variant={variant} />

      <main className={`resources resources--${variant}`}>
        <Header
          title="Resources"
          variant={variant}
          buttonOption={true}
          buttonLabel="+ Create"
          buttonVariant="yellow"
          dropdownOption={false}
          path="/resources/create"
        />
        <div className="resources__container">
          <QueryBar
            label={"Health Products"}
            searchTerm={searchTerm}
            hasFilter={true}
            handleInput={(e) => setSearchTerm(e.target.value)}
            columnViewClick={() => console.log("Column View")}
            gridViewClick={() => console.log("Grid View")}
            sortClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            filterClick={() => console.log("Filter Click")}
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
              resources={sortResources(filteredResources1, sortOrder)}
              variant={variant}
            />
          </section>
          <section className="resources__items">
            <h3 className={`resources__staff resources__staff--${variant}`}>
              {ResourceCardList2[0].staffName}
            </h3>
            <ResourceCardList
              resources={sortResources(filteredResources2, sortOrder)}
              variant={variant}
            />
          </section>

          <section className="resources__items">
            <h3 className={`resources__admin resources__admin--${variant}`}>
              Admin
            </h3>
            <ResourceCardList
              resources={sortResources(filteredResourcesAdmin, sortOrder)}
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
