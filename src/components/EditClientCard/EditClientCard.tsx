import "./editClientCard.scss";
import { useState } from "react";
import Button from "../Button/Button";
import {ClientProfileList} from "../../data/ClientProfileList";
import {useParams} from "react-router-dom";



type EditClientProps = {
    variant: "dark" | "light";
  };
    

const EditClient = ({variant}:EditClientProps) => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [dob, setDob] = useState<string>("");
    const [emailAddress, setEmailAddress] = useState<string>("");
    const [mobileNumber, setMobileNumber] = useState<string>("");
    const [employer, setEmployer] = useState<string>("");
    const [role, setRole]=useState<string>("")
    const [clientPic, setClientPic] = useState<string>("");
    const [employed, setEmployed] = useState<string>("");
    const {clientId} = useParams();

    const filteredClient = ClientProfileList.filter(client =>
        client.id ===Number(clientId));

    const handleSubmit = () => {
    }


  return (
    <div className={`edit-client edit-client--${variant}`}>

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

                {/* <label>Employed Post Course</label>
                <select
                  name="employed"
                  value={}
                  onChange={(e) => setEmployed(e.target.value)}
                >
                  <option value="" disabled>
                    Select staff member...
                  </option>

                  {StaffList.map((staff: Staff) => (
                    <option key={staff.id} value={staff.name}>
                      {staff.name}
                    </option>
                  ))}
                </select> */}
                
               
              </div>

              <div className="edit-client__form--rightside">
              <label>Client Thumbnail</label>
              <input
                  type="text"
                  name="clientPic"
                  value={clientPic}
                  onChange={(e) => setClientPic(e.target.value)}
                ></input>
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
                 <div className="upload-button">
                  <Button
                    label="Upload"
                    variant="grey"
                    size="small"
                    onClick={handleSubmit}
                  />
                </div>
              </div>
            </div>
            <div className="buttons-wrapper">
              <div className="edit-client__buttons">
                <div className="save-button">
                  <Button
                    label="Save"
                    variant="yellow"
                    size="large"
                    onClick={handleSubmit}
                  />
                </div>
                <div className="submit-button">
                  <Button
                    label="Submit"
                    variant="yellow"
                    onClick={handleSubmit}
                  />
                </div>
                <div className="cancel-button">
                  <Button
                    label="Cancel"
                    variant="grey"
                    onClick={() => console.log("Cancel button clicked")}
                  />
                </div>
              </div>
            </div>
          </form>
          </div>
  )
}

export default EditClient
  