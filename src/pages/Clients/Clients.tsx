import ClientNavList from "../../components/ClientNavList/ClientNavList";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import QueryBar from "../../components/QueryBar/QueryBar";
import "./Clients.scss";
import { ClientProfileList } from "../../data/ClientProfileList";
import Footer from "../../components/Footer/Footer";
import { ChangeEvent, useState } from "react";
import leftArrowSrc from "../../assets/images/arrow - left.png";
import rightArrowSrc from "../../assets/images/arrow - right.png";

type ClientsProps = {
  variant: "light" | "dark";
};

export const Clients = ({ variant }: ClientsProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [numOfResults, setNumOfResults] = useState<number>(10);
  const [startingIndex, setStartingIndex] = useState<number>(0);

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

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.currentTarget.value.toLowerCase());
  };

  const filteredClients = ClientProfileList.filter((client) => {
    return client.clientName.toLowerCase().includes(searchTerm);
  });

  console.log(startingIndex);
  console.log(numOfResults);
  
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
        />
        <section className="clients__list">
          <QueryBar
            label="Clients"
            searchTerm={searchTerm}
            hasFilter={true}
            variant={variant}
            handleInput={handleInput}
          />
          <ClientNavList
            clients={filteredClients}
            variant={variant}
            startingIndex={startingIndex}
            maxCards={numOfResults}
          />
        </section>
        <section className="clients__page-results">
          <label htmlFor="results-per-page">Results per page: </label>
          <select
            onChange={handleNumOfResultsChange}
            name="results-per-page"
            id="results-per-page"
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
          <p>1-10 of 30</p>
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
      </main>
      <Footer variant={variant} />
    </Layout>
  );
};
