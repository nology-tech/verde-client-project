import "../CreateClient/CreateClient.scss"
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import ClientInputForm from "../../components/ClientInputForm/ClientInputForm";

type CreateClientProps = {
  variant: "light" | "dark";
 
};

const CreateClient = ({ variant }: CreateClientProps) => {
  return (
    <Layout>
      <NavBar variant={variant} />
      <main className={`main main--${variant}`}>
        <Header
          title={"Add Client"}
          variant={variant}
          buttonOption={true}
          buttonLabel={"Save"}
          buttonVariant={"yellow"}
          dropdownOption={false}
        />
       <ClientInputForm variant={variant} />
      </main>
      <Footer variant={variant} />
    </Layout>
  );
};

export default CreateClient;
