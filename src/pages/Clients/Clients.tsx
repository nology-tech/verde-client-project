import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import QueryBar from "../../components/QueryBar/QueryBar";
import "./Clients.scss";

type ClientsProps = {
  variant: "light" | "dark";
};

export const Clients = ({ variant }: ClientsProps) => {
  return (
    <Layout>
      <NavBar variant={variant} />
      <main className={`clients clients--${variant}`}>
        <Header
          title="Clients"
          variant={variant}
          buttonOption={true}
          buttonLabel="+ Create"
          buttonVariant="yellow"
          dropdownOption={false}
        />
        <QueryBar label="Clients" searchTerm="" hasFilter={true} variant={variant} />
      </main>
    </Layout>
  );
};
