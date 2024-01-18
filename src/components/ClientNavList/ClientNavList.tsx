import { Link } from "react-router-dom";
import { ClientInfo } from "../../types/ClientProfileTypes";
import "./ClientNavList.scss";
import ClientNavCard from "../ClientNavCard/ClientNavCard";
import React from "react";

type ClientNavListProps = {
  clients: ClientInfo[];
  variant: "light" | "dark";
  startingIndex: number;
  maxCards: number;
};

const ClientNavList = ({
  clients,
  variant,
  maxCards,
  startingIndex,
}: ClientNavListProps) => {
  
  const renderCards = () => {
    if (startingIndex > clients.length) return;

    const cardsHtml: React.ReactNode[] = [];
    for (let i = startingIndex; i < startingIndex + maxCards; i++) {
      const client = clients[i];
      if (!client) break;

      cardsHtml.push(
        <Link
          className="clientnavlist__link"
          to={`${client.id}`}
          key={client.id}
        >
          <ClientNavCard
            label={client.clientName}
            dob={client.dob}
            email={client.emailAddress}
            mob={client.mobileNumber}
            role={client.role}
            variant={variant}
          />
        </Link>
      );
    }

    return cardsHtml;
  };

  return (
    <div className="client-list">
      <div className={`client-list__titles client-list__titles--${variant}`}>
        <p>Client Name</p>
        <p>Date of Birth</p>
        <p>Email Address</p>
        <p>Mobile Number</p>
        <p>Role</p>
      </div>
      {renderCards()}
      {/* this is to be updatedd with name and surname? */}
    </div>
  );
};

export default ClientNavList;
