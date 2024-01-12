import ClientProfile from "../../components/ClientProfile/ClientProfile";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import "../ClientBooking/ClientBooking.scss";
import Layout from "../../components/Layout/Layout";
import { ClientInfo } from "../../types/ClientProfileTypes";

type ClientBookingProps = {
  variant: "light" | "dark";
  clientInfo: ClientInfo[];
};

const ClientBooking = ({ variant, clientInfo }: ClientBookingProps) => {
  return (
    <Layout>
      <NavBar variant={variant} />
      <main className={`page page--${variant}`}>
        <Header
          title="Client Booking"
          variant={variant}
          buttonOption={true}
          buttonLabel="+ Edit"
          buttonVariant="yellow"
          dropdownOption={false}
        />
        <div className="page__subtitle-container">
          <h3 className={`page__subtitle page__subtitle--${variant}`}>
            Overview
          </h3>
        </div>
        <div className="page__container">
          {clientInfo.map((client) => 
            <ClientProfile
              id={client.id}
              clientName={client.clientName}
              role={client.role}
              dob={client.dob}
              emailAddress={client.emailAddress}
              mobileNumber={client.mobileNumber}
              appointmentDate={client.appointmentDate}
              appointmentTime={client.appointmentTime}
              staffMember={client.staffMember}
              path={client.path}
              variant={variant}
            />
          )}
          <div>
            <Footer variant={variant} />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ClientBooking;
