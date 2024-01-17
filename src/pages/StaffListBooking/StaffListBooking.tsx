
import ClientProfile from "../../components/ClientProfile/ClientProfile";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import { useParams } from "react-router-dom";
import "./StaffListBooking.scss";
import { StaffBookings } from "../../types/StaffBookingsTypes";


type StaffBookingListProps = {
    variant: "light" | "dark";
    booking: StaffBookings;
   

}

const StaffListBooking = ({variant, booking}:StaffBookingListProps) => {
   
    const {bookingsId} = useParams();
    console.log(bookingsId)

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
        <ClientProfile
          clientinfo={{
            clientName:"",
            role: "",
            dob: "",
            emailAddress: "",
            mobileNumber: "",
            appointmentDate: "",
            appointmentTime: "",
            staffMember: "",
          }}
          variant={variant}
        />
        
        </section>
      </main>
    
      </Layout>
  );
};

export default StaffListBooking;
