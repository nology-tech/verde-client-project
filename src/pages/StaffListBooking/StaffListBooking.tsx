import ClientProfile from "../../components/ClientProfile/ClientProfile";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import { useParams } from "react-router-dom";
import "./StaffListBooking.scss";
import { StaffBookingsList } from "../../data/StaffBookingsList";
import { ChangeEvent, useState } from "react";

type StaffBookingListProps = {
  variant: "light" | "dark"; 
};

const StaffListBooking = ({ variant }: StaffBookingListProps) => {
  const { bookingsId } = useParams();

  const [dropDown, setDropDown] = useState<string>("Sarah Stanley");

  const filteredClients = StaffBookingsList.filter((client) => client.staffMember === dropDown )

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
          {filteredClients.map((client) => {
            return(
              <div className={`container${client.id}`}> 
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
              variant={variant}
            />
            </div>
            )
          })}
        </section>
      </main>
    </Layout>
  );
};

export default StaffListBooking;
