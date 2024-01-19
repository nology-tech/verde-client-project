import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ItemRequestCard from "../../components/ItemRequestCard/ItemRequestCard";
import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import "./RequestResource.scss";

type RequestResourcesProps = {
  variant: "light" | "dark";
};

const RequestResources = ({ variant }: RequestResourcesProps) => {
  return (
    <Layout>
      <NavBar variant={variant} />

      <main className={`request-main request-main--${variant}`}>
      <Header
          title={"Request Resource"}
          variant={variant}
          buttonOption={false}
          buttonLabel={""}
          buttonVariant={"yellow"}
          dropdownOption={false}
        />
        <ItemRequestCard
          id={0}
          variant={variant}
          resource={{
            staffName: "",
            category: "",
            id: 0,
            resourceName: "",
            quantityRemaining: 0,
            costPerUnit: "",
            autoPurchase: "YES",
            autoPurchaseLevel: "",
            path: "",
          }}
          isRequestCard={true}
        />
      </main>
      <Footer variant={variant} />
    </Layout>
  );
};

export default RequestResources;
