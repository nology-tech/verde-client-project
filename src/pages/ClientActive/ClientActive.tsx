import ClientProfile from "../../components/ClientProfile/ClientProfile";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import { ClientInfo } from "../../types/ClientProfileTypes";
import "./ClientActive.scss";

type ClientActiveProps = {
  variant: "light" | "dark";
  clientInfo: ClientInfo;
};

const ClientActive = ({ variant, clientInfo }: ClientActiveProps) => {
  return (
    <Layout>
      <NavBar variant={variant} />
      <main className={`main main--${variant}`}>
        <Header
          title={"Client"}
          variant={variant}
          buttonOption={true}
          buttonLabel={"+ Edit"}
          buttonVariant={"yellow"}
          dropdownOption={false}
        />
        <ClientProfile clientinfo={clientInfo} variant={variant} />
      </main>
      <Footer variant={variant} />
    </Layout>
  );
};

export default ClientActive;
