import Button from "../../components/Button/Button";
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
        <ClientProfile clientinfo={{
            clientName: clientInfo.clientName,
            role: clientInfo.role,
            dob: clientInfo.dob,
            emailAddress: clientInfo.emailAddress,
            mobNumber: clientInfo.mobileNumber,
            bookingDate: clientInfo.appointmentDate,
            bookingTime: clientInfo.appointmentTime,
            staffMember: clientInfo.staffMember,
          }} variant={variant} size="staffBooking"/>
        <Button label={"Edit Client"} variant={"yellow"} size="large" />
      </main>
      <Footer variant={variant} />
    </Layout>
  );
};

export default ClientActive;
