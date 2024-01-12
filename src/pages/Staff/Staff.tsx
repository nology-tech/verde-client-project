import { StaffList } from "../../data/StaffNavList";
import StaffNavList from "../../components/StaffNavList/StaffNavList";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Layout from "../../components/Layout/Layout";
import StaffProfileCard from "../../components/StaffProfileCard/StaffProfileCard";
import StaffBookingList from "../../components/StaffBookingList/StaffBookingList";
import { StaffBookingsList } from "../../data/StaffBookingsList";
import Justify from "../../assets/images/bi-justify.png";
import Justify_alt from "../../assets/images/bi-grid-3x3-gap-fill.png";
import Sort from "../../assets/images/sort.png";

type StaffProps = {
  variant: "light" | "dark";
};

const Staff = ({ variant }: StaffProps) => {
  return (
    <div>
      <Layout>
        <NavBar variant={variant} />
        <main className={`main main--${variant}`}>
          <Header
            title={"Staff"}
            variant={"light"}
            buttonOption={false}
            buttonLabel={""}
            buttonVariant={"yellow"}
            dropdownOption={true}
          />
          <section className="profile">
            <h1 className="profile__heading">Overview</h1>
            <StaffProfileCard
              staff={{
                id: 0,
                name: "",
                start: "",
                courseEnd: "",
                manager: "",
                role: "",
                description: "",
              }}
              variant={"light"}
            />
          </section>
          <StaffNavList staff={StaffList} variant={"light"} />
          <section className="booking">
            <div className="booking__meanu">
              <h1>Bookings</h1>
              <img src={Justify} />
              <img src={Justify_alt} />
              <input type="text"></input>
              <img src={Sort} />
            </div>
            <StaffBookingList bookings={StaffBookingsList} variant={"light"} />
          </section>
          <Footer variant={"light"} />
        </main>
      </Layout>
    </div>
  );
};

export default Staff;
