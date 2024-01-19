import "./editClientCard.scss";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import { ClientProfileList } from "../../data/ClientProfileList";
import { useNavigate, useParams } from "react-router-dom";
import profilePicture from "../../assets/images/profile-picture.png";
import Modal from "../Modal/Modal";

type EditClientProps = {
  variant: "dark" | "light";
};

const EditClientCard = ({ variant }: EditClientProps) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [employer, setEmployer] = useState<string>("");
  const [role, setRole] = useState<string>("");
/*   const [clientPic, setClientPic] = useState<string>(""); */
  const [employed, setEmployed] = useState<string>("");
  const { clientId } = useParams();
  const [modal, setModal] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [saveModal, setSaveModal] = useState<boolean>(false)

  const navigate = useNavigate()

  const filteredClient = ClientProfileList.filter(
    (client) => client.id === Number(clientId)
  );

  const client = filteredClient[0];

  useEffect(() => {
    if (client) {
      setFirstName(client.clientName.split(" ").slice(0, -1).join(" "));
      setLastName(client.clientName.split(" ").slice(-1).join(" "));
      setMobileNumber(client.mobileNumber);
      setDob(client.dob);
      setEmailAddress(client.emailAddress);
      setEmployer(client.staffMember);
      setRole(client.role);
      setEmployed("");
    }
  }, [clientId, client]);

  const handleSubmit = () => {
    if (
      !employer ||
      !role ||
      !firstName ||
      !lastName ||
      !emailAddress ||
      !mobileNumber ||
      // !employed ||
      !dob
    ) {
      console.log("Please fill in all fields");
      console.log(employer, role, firstName, lastName, emailAddress, mobileNumber, employed, dob)
      return;
    }
  };

  // const handleDeleteUser = () => {
  //   const index = ClientProfileList.indexOf(client);
  //   ClientProfileList.splice(index)
  // };

  const handleDeleteClicked = () => {
    console.log("confirmed");
    // const index = ClientProfileList.indexOf(client);
    // ClientProfileList.splice(index)
    console.log(ClientProfileList);
    setModal(!modal);
  }
  const handleButtonClicked = () => {
    setModal(!modal)
  }

  const handleSaveButton = () => {
    setSaveModal(!saveModal)
  }


  const modalTwo= [
    <Button label={"Cancel"} variant={"red-alt"} onClick={handleButtonClicked} />,
    <Button label={"Confirm"} variant={"red"} onClick={handleDeleteClicked} />,
  ];

  return (
    <div className={`edit-client edit-client--${variant}`}>

      {!modal  && (
      <form className="edit-client__form">
        <div className="leftRight-wrapper">
          <div className="edit-client__form--leftside">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
            <label>Date of Birth</label>
            <input
              type="text"
              name="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            ></input>
            <label>Email Address</label>
            <input
              type="email"
              name="emailAddress"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            ></input>
            <label>Mobile Number</label>
            <input
              type="text"
              name="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            ></input>
            <label>Employed Post Course</label>
                <select
                  name="employed"
                  value={employed}
                  onChange={(e) => setEmployed(e.target.value)}
                >
                  <option value="YES" >
                    YES
                  </option>
                  <option value="NO" >
                    NO
                  </option>
                </select> 
          </div>

          <div className="edit-client__form--rightside">
            <label>Client Thumbnail</label>
            <div className={`edit-client__form--rightside--profile`}>
              <img
                src={profilePicture}
                className={`profile__img profile__img--${variant}`}
                alt="Profile Picture"
              />
            </div>
            <button className="edit-client__form--rightside--button">Upload</button>
            <label>Employer</label>
            <input
              type="text"
              name="employer"
              value={employer}
              onChange={(e) => setEmployer(e.target.value)}
            ></input>
            <label>Role</label>
            <input
              type="text"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            ></input>
          <div className="edit-client__form--rightside__buttons">
          <div className="cancel-button">
              <Button
                label="Cancel"
                variant="purple"
                onClick={() => navigate(-1)}
            
              />
              </div>
              <div className="submit-button">
              <Button label="Save" variant="yellow" onClick={handleSaveButton} />
            </div>
          </div>
          <button className="edit-client__form--rightside--delete" onClick={handleDeleteClicked}>Delete User</button>
        </div>
            </div>
      </form>
)};

{modal &&(
  <Modal title={"Client Saved!"} buttons={[<Button label={"Back"} variant={"yellow"} onClick={handleSaveButton} />]} variant={variant}/> 
)}

{modal &&(
   <Modal title={"Are you sure you want to delete this client?"} buttons={modalTwo} variant={variant}/> 
)}
</div>
  );
};

export default EditClientCard;
