import ClientNavList from "../../components/ClientNavList/ClientNavList";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import QueryBar from "../../components/QueryBar/QueryBar";
import "./Clients.scss";
import { ClientProfileList } from "../../data/ClientProfileList";
import Footer from "../../components/Footer/Footer";
import { ChangeEvent, useState } from "react";
import leftArrowSrc from "../../assets/images/arrow - left.svg";
import rightArrowSrc from "../../assets/images/arrow - right.svg";
import { ClientInfo } from "../../types/ClientProfileTypes";

type ClientsProps = {
  variant: "light" | "dark";
};

export const Clients = ({ variant }: ClientsProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [numOfResults, setNumOfResults] = useState<number>(10);
  const [startingIndex, setStartingIndex] = useState<number>(0);
  const [sortAsc, setSortAsc] = useState<boolean>(true);
  const [filterAlph, setFilterAlph] = useState<boolean>(true);

  const handleNumOfResultsChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setNumOfResults(parseInt(event.currentTarget.value));
  };

  const handlePrevPageClick = () => {
    const newIndex = startingIndex - numOfResults;
    setStartingIndex(Math.max(newIndex, 0));
  };

  const handleNextPageClick = () => {
    setStartingIndex(startingIndex + numOfResults);
  };

  const handleFilterClick = () => {
    setFilterAlph(!filterAlph);
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.currentTarget.value.toLowerCase());
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
  const parseDateTime = (date: string): Date => {
    const [day, month, year] = date.split("/");

    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  };

  /**
   * Sorts an array of client information alphabetically based on client names.
   *
   * @param {ClientInfo[]} clients - The array of client information to be sorted.
   * @returns {ClientInfo[]} - The sorted array of client information.
   */
  const sortClientsAlphabeticaly = (clients: ClientInfo[]) => {
    const sortedClients = clients.sort((a, b) =>
      a.clientName.localeCompare(b.clientName)
    );
    return sortAsc ? sortedClients : sortedClients.reverse();
  };

  /**
   * Compares two StaffBookings based on their booking date and time in ascending order.
   *
   * @param a - The first StaffBookings object to compare.
   * @param b - The second StaffBookings object to compare.
   * @returns A number less than 0 if a should come before b, a number greater than 0 if a should come after b,
   *          and 0 if both objects are considered equal.
   */
  const sortDateAndTimeAsc = (a: ClientInfo, b: ClientInfo): number => {
    const dateA = parseDateTime(a.dob);
    const dateB = parseDateTime(b.dob);

    return dateA > dateB ? 1 : -1;
  };

  /**
   * Sorts an array of StaffBookings based on their booking date and time.
   *
   * @param bookings - An array of StaffBookings to be sorted.
   * @returns A new array of StaffBookings sorted in ascending order by default or descending order if sortAsc is false.
   */
  const sortByDOB = (bookings: ClientInfo[]): ClientInfo[] => {
    const sortedByDateAsc = bookings.sort(sortDateAndTimeAsc);
    return sortAsc ? sortedByDateAsc : sortedByDateAsc.reverse();
  };

  const filteredClients = ClientProfileList.filter((client) => {
    return client.clientName.toLowerCase().includes(searchTerm);
  });

  const sortedClients = filterAlph
    ? sortClientsAlphabeticaly(filteredClients)
    : sortByDOB(filteredClients);

  return (
    <Layout>
      <NavBar variant={variant} />
      <main className={`clients clients--${variant}`}>
        <Header
          title="Clients"
          variant={variant}
          buttonOption={true}
          buttonLabel="+ Create"
          buttonVariant="yellow"
          dropdownOption={false}
          path="/clients/create"
        />
        <section className="clients__list">
          <QueryBar
            label="Clients"
            searchTerm={searchTerm}
            hasFilter={true}
            variant={variant}
            handleInput={handleInput}
            sortClick={handleSortClick}
            filterClick={handleFilterClick}
          />
          <ClientNavList
            clients={sortedClients}
            variant={variant}
            startingIndex={startingIndex}
            maxCards={numOfResults}
          />

<section className="clients__page-results">
          <label className="clients__heading" htmlFor="results-per-page">Results per page: </label>
          <select
            onChange={handleNumOfResultsChange}
            name="results-per-page"
            id="results-per-page"
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
          <p className="clients__page-results--index">
            {startingIndex + 1}-{startingIndex + numOfResults} of{" "}
            {filteredClients.length}
          </p>
          <img
            className="clients__page-results--arrow"
            src={leftArrowSrc}
            alt=""
            onClick={handlePrevPageClick}
          />
          <img
            className="clients__page-results--arrow"
            src={rightArrowSrc}
            alt=""
            onClick={handleNextPageClick}
          />
        </section>
        </section>
  
      </main>
      <Footer variant={variant} />
    </Layout>
  );
};
