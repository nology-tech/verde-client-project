import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import StaffBookingList from "../../components/StaffBookingList/StaffBookingList";
import StaffProfileCard from "../../components/StaffProfileCard/StaffProfileCard";
import { useParams } from "react-router-dom";
import { StaffList } from "../../data/StaffNavList";
import { StaffBookingsList } from "../../data/StaffBookingsList";
import "./StaffMobile.scss"

type StaffMobileProps = {
  variant: "light" | "dark";
};

const StaffMobile = ({ variant }: StaffMobileProps) => {
  const { staffId } = useParams();

  const filteredStaff = StaffList.filter(
    (staff) => staff.id === Number(staffId)
  );

  const filteredBookings = StaffBookingsList.filter(
    (booking) => booking.staffMember === filteredStaff[0].name
  );

  return (
    <Layout>
      <NavBar variant={variant} />
      <main className={`main-mobile main-mobile--${variant}`}>
        <Header
          title={filteredStaff[0].name}
          variant={variant}
          buttonOption={false}
          buttonLabel={""}
          buttonVariant={"yellow"}
          dropdownOption={false}
        />
        <StaffProfileCard
          staff={filteredStaff[0]}
          variant={variant}
          size={"default"}
        />
        <p className={`main-mobile__heading main-mobile__heading--${variant}`}>{filteredStaff[0].name} Bookings</p>
        <StaffBookingList bookings={filteredBookings} variant={variant} />
      </main>
      <Footer variant={variant} />
    </Layout>
  );
};

export default StaffMobile;
