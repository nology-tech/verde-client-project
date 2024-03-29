import "../CreateClient/CreateClient.scss"
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import ClientInputForm from "../../components/ClientInputForm/ClientInputForm";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import Button from "../../components/Button/Button";

type CreateClientProps = {
  variant: "light" | "dark";
 
};

const CreateClient = ({ variant }: CreateClientProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  };

  const modalButton = [
    <Button
      label={"Return to clients"}
      variant={"yellow"}
      path="/clients"
    />,
  ];

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
        <div className="main__container">
       <ClientInputForm variant={variant} onClick={handleButtonClick}/>
       </div>
       <div>
          {isClicked && (
            <Modal title={"You have successfully added a client!"} buttons={modalButton} variant={variant} />
          )}
        </div>
      </main>
      <Footer variant={variant} />
    </Layout>
  );
};

export default CreateClient;
