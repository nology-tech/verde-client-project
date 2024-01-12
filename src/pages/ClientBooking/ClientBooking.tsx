import ClientProfile from "../../components/ClientProfile/ClientProfile";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import div from "../../components/div/div";
import NavBar from "../../components/NavBar/NavBar";
import "../ClientBooking/ClientBooking.scss";
import Layout from "../../components/Layout/Layout";

type ClientBookingProps = {
  variant: "light" | "dark";
};

const ClientBooking = ({ variant }: ClientBookingProps) => {
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
        <h3 className={`page__subtitle page__subtitle--${variant}`}> Overview</h3>
        </div>
        <div className="page__container">
          <ClientProfile
            clientinfo={{
              clientName: "Bob",
              role: "Manager",
              dob: "30/09/1997",
              emailAddress: "bob@live.com",
              mobileNumber: "9782748959",
              appointmentDate: "20/05/2022",
              appointmentTime: "14.00pm",
              staffMember: "Staff 03",
            }}
            variant={variant}
          />
          <div>
            <Footer variant={variant} />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ClientBooking;
