import { Link } from "react-router-dom";
import { ClientInfo } from "../../types/ClientProfileTypes";
import "./ClientNavList.scss";
import ClientNavCard from "../ClientNavCard/ClientNavCard";

type ClientNavListProps = {
    client: ClientInfo[];
  variant: "light" | "dark";
};

const ClientNavList = ({ client, variant }: ClientNavListProps) => {
  return (
    <div className="client-list">
    
            <div className={`client-list__titles client-list__titles--${variant}`}>
                <p>Client Name</p>
                <p>Date of Birth</p>
                <p>Email Address</p>
                <p>Mobile Number</p>
                <p>Role</p>
                
            </div>
      {client.map((client) => (
        <Link className="clientnavlist__link" to={`/client-details`} key={client.id}>
          <ClientNavCard label={client.clientName} dob={client.dob} email={client.emailAddress} mob={client.mobileNumber} role={client.role} variant={variant} />
        </Link>
      ))}
      {/* this is to be updatedd with name and surname? */}
    </div>
  );
};

export default ClientNavList;