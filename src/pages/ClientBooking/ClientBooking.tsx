import ClientProfile from "../../components/ClientProfile/ClientProfile";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import "../ClientBooking/ClientBooking.scss";
import Layout from "../../components/Layout/Layout";
import { StaffBookings } from "../../types/StaffBookingsTypes";

type ClientBookingProps = {
  variant: "light" | "dark";
  clientInfo: StaffBookings;
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
          <ClientProfile clients={clientInfo} variant={"light"} />
          <div>
            <Footer variant={variant} />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ClientBooking;
