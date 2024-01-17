import ClientProfile from "../../components/ClientProfile/ClientProfile";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import { useParams } from "react-router-dom";
import "./StaffListBooking.scss";
import { StaffBookingsList } from "../../data/StaffBookingsList";
import { useState } from "react";

type StaffBookingListProps = {
  variant: "light" | "dark";
  clientData
};

const StaffListBooking = ({ variant }: StaffBookingListProps) => {
  const { bookingsId } = useParams();
  console.log(bookingsId);

  const [clients, setClients] = useState([]);

  return (
    <Layout>
      <NavBar variant={variant} />
      <main>
        <Header
          title={"Client Booking"}
          variant={variant}
          buttonOption={false}
          buttonLabel={"+ edit"}
          buttonVariant={"yellow"}
          dropdownOption={false}
        />

        <section>
          {StaffBookingsList.map((client) => {
            return(
            <ClientProfile
              clientinfo={{
                clientName: {clientName},
                role: `${client.role}`,
                dob: "",
                emailAddress: "",
                mobileNumber: "",
                appointmentDate: "",
                appointmentTime: "",
                staffMember: "",
              }}
              variant={variant}
            />;
            )
          })}
        </section>
      </main>
    </Layout>
  );
};

export default StaffListBooking;
