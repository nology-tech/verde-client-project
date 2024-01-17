import ClientProfile from "../../components/ClientProfile/ClientProfile";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import { useParams } from "react-router-dom";
import "./StaffListBooking.scss";
import { StaffBookingsList } from "../../data/StaffBookingsList";
import Footer from "../../components/Footer/Footer";

type StaffBookingListProps = {
  variant: "light" | "dark"; 
};

const StaffListBooking = ({ variant }: StaffBookingListProps) => {
  const { bookingsId } = useParams();

  const filteredClients = StaffBookingsList.filter((client) => client.id === Number(bookingsId))

  return (
    <Layout>
    <NavBar variant={variant} />
      <main className="booking-main">
        <Header
          title={"Client Booking"}
          variant={variant}
          buttonOption={false}
          buttonLabel={"+ edit"}
          buttonVariant={"yellow"}
          dropdownOption={false}
        />

        <section>
          {filteredClients.map((client) => {
            return(
              <div className={`container${client.id}`} key={client.id} > 
            <ClientProfile
                  clientinfo={{
                    clientName: `${client.clientName}`,
                    role: `${client.role}`,
                    dob: `${client.dob}`,
                    emailAddress: `${client.emailAddress}`,
                    mobNumber: `${client.mobNumber}`,
                    bookingDate: `${client.bookingDate}`,
                    bookingTime: `${client.bookingTime}`,
                    staffMember: `${client.staffMember}`,
                    
                  }}
                  variant={variant} size={"staffBooking"}          />
            </div>
            )
          })}
        </section>
      </main>
      <Footer variant={variant}/>
    </Layout>
  );
};

export default StaffListBooking;
