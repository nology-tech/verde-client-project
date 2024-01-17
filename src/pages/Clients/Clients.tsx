import ClientNavList from "../../components/ClientNavList/ClientNavList";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import QueryBar from "../../components/QueryBar/QueryBar";
import "./Clients.scss";
import { ClientProfileList } from "../../data/ClientProfileList";
import Footer from "../../components/Footer/Footer";
import { ChangeEvent, useState } from "react";

type ClientsProps = {
  variant: "light" | "dark";
};

export const Clients = ({ variant }: ClientsProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInput = (event: ChangeEvent<HTMLInputElement>) =>{
    setSearchTerm(event.currentTarget.value);
  }

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
        <section className="clients__list">
          <QueryBar
            label="Clients"
            searchTerm={searchTerm}
            hasFilter={true}
            variant={variant}
            handleInput={handleInput}
          />
          <ClientNavList client={ClientProfileList} variant={variant} />
        </section>
      </main>
      <Footer variant={variant} />
    </Layout>
  );
};
