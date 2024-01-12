import "./Staff.scss";
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
import Search from "../../assets/images/search.png"
import { ChangeEvent, useState } from "react";

type StaffProps = {
  variant: "light" | "dark";
};

 
  

const Staff = ({ variant }: StaffProps) => {
  const [dropDown, setDropDown] = useState<string>("Staff 1")

  const handleDropDown = (event:ChangeEvent<HTMLSelectElement>) => {
    setDropDown(event.currentTarget.value)
    console.log(dropDown)
  }
  
  const filteredStaff = StaffList.filter(staff =>
     staff.name === dropDown)

  return (
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
            onChange={handleDropDown}
          />
        
          <section className="profile--section">
            <h1 className="profile--section__heading">Overview</h1>
            {filteredStaff.map(staff => <StaffProfileCard
              staff={{
                id: Number(`${staff.id}`),
                name:`${staff.name}`,
                start: `${staff.start}`,
                courseEnd: `${staff.courseEnd}`,
                manager: `${staff.manager}`,
                role: `${staff.role}`,
                description: `${staff.description}`,
              }}
              variant={"light"}
            />)}
          </section>
          <StaffNavList staff={StaffList} variant={"light"} />
          <section className="booking">
            <div className="booking__menu">
              <h1 className="booking__staff">Bookings</h1>
              <div className="display">
              <button className="booking__menu--buttons"><img className="booking__menu--icons" src={Justify} /></button>
              <button className="booking__menu--buttons"><img className="booking__menu--icons" src={Justify_alt} /></button>
              </div>
              <div className="search-bar">
              <input className="booking__menu--input" type="text"></input>
              <img className= "booking__menu--icon" src={Search}></img>
              </div>
              <button className="booking__menu--buttons"><img className="booking__menu--icons" src={Sort} /></button>
            </div>
            <StaffBookingList bookings={StaffBookingsList} variant={"light"} /> 
          </section>
        </main>
        <Footer variant={"light"} />
      </Layout>
  );
};

export default Staff;
