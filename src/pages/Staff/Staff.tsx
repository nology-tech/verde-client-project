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
import Search from "../../assets/images/search.png";
import { ChangeEvent, useState } from "react";
import { StaffBookings } from "../../types/StaffBookingsTypes";

type StaffProps = {
  variant: "light" | "dark";
};

const Staff = ({ variant }: StaffProps) => {
  const [dropDown, setDropDown] = useState<string>("Sarah Stanley");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortAsc, setSortAsc] = useState<boolean>(true);

  const handleDropDown = (event: ChangeEvent<HTMLSelectElement>) => {
    setDropDown(event.currentTarget.value);
  };

  const handleSearchTerm = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.currentTarget.value);
  };

  const handleSortClick = () => {
    setSortAsc(!sortAsc);
  };

  /**
   * Parses a booking date and time and returns a Date object.
   *
   * @param bookingDate - The date string in the format "DD/MM/YYYY".
   * @param bookingTime - The time string in the format "HH:mm".
   * @returns A Date object representing the parsed date and time.
   */
  const parseDateTime = (bookingDate: string, bookingTime: string): Date => {
    const [year, month, day] = bookingDate.split("-");
    const [hours, minutes] = bookingTime.split(":");

    return new Date(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day),
      parseInt(hours),
      parseInt(minutes)
    );
  };

  /**
   * Compares two StaffBookings based on their booking date and time in ascending order.
   *
   * @param a - The first StaffBookings object to compare.
   * @param b - The second StaffBookings object to compare.
   * @returns A number less than 0 if a should come before b, a number greater than 0 if a should come after b,
   *          and 0 if both objects are considered equal.
   */
  const sortDateAndTimeAsc = (a: StaffBookings, b: StaffBookings): number => {
    const dateA = parseDateTime(a.bookingDate, a.bookingTime);
    const dateB = parseDateTime(b.bookingDate, b.bookingTime);

    return dateA > dateB ? 1 : -1;
  };

  /**
   * Sorts an array of StaffBookings based on their booking date and time.
   *
   * @param bookings - An array of StaffBookings to be sorted.
   * @returns A new array of StaffBookings sorted in ascending order by default or descending order if sortAsc is false.
   */
  const sortBookings = (bookings: StaffBookings[]): StaffBookings[] => {
    const sortedByDateAsc = bookings.sort(sortDateAndTimeAsc);
    return sortAsc ? sortedByDateAsc : sortedByDateAsc.reverse();
  };

  const filteredStaff = StaffList.filter((staff) => staff.name === dropDown);

  const filteredBookings = StaffBookingsList.filter((booking) => {
    return booking.clientName.toLowerCase().includes(searchTerm);
  });
  const sortedBookings = sortBookings(filteredBookings);

  return (
    <Layout>
      <NavBar variant={variant} />
      <main className={`main main--${variant}`}>
        <Header
          title={"Staff"}
          variant={variant}
          buttonOption={false}
          buttonLabel={""}
          buttonVariant={"yellow"}
          dropdownOption={true}
          onChange={handleDropDown}
        />

        <section className="profile--section">
          <h1 className="profile--section__heading">Overview</h1>
          {filteredStaff.map((staff) => (
            <StaffProfileCard
              staff={{
                id: Number(`${staff.id}`),
                name: `${staff.name}`,
                start: `${staff.start}`,
                courseEnd: `${staff.courseEnd}`,
                manager: `${staff.manager}`,
                role: `${staff.role}`,
                description: `${staff.description}`,
              }}
              variant={variant}
              key={staff.id}
              size={"default"}
            />
          ))}
        </section>
        <StaffNavList staff={StaffList} variant={variant} />
        <section className="booking">
          <div className="booking__menu">
            <h1 className="booking__staff">Bookings</h1>
            <div className="display">
              <button className="booking__menu--buttons">
                <img className="booking__menu--icons" src={Justify} />
              </button>
              <button className="booking__menu--buttons">
                <img className="booking__menu--icons" src={Justify_alt} />
              </button>
            </div>
            <div className="search-bar">
              <input
                className="booking__menu--input"
                type="text"
                value={searchTerm}
                onChange={handleSearchTerm}
              ></input>
              <img className="booking__menu--icon" src={Search}></img>
            </div>
            <button className="booking__menu--buttons">
              <img
                className="booking__menu--icons"
                src={Sort}
                onClick={handleSortClick}
              />
            </button>
          </div>
          <StaffBookingList bookings={sortedBookings} variant={variant} />
        </section>
      </main>
      <Footer variant={variant} />
    </Layout>
  );
};

export default Staff;
