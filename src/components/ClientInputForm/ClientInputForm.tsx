import { useState } from "react";
import Button from "../Button/Button";
import "./ClientInputForm.scss"
import uploadImage from "../../assets/images/upload-image.png"


type ClientInputFormProps = {
    variant: "dark" | "light";
  };
    

const ClientInputForm = ({variant}:ClientInputFormProps) => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [dob, setDob] = useState<string>("");
    const [emailAddress, setEmailAddress] = useState<string>("");
    const [mobileNumber, setMobileNumber] = useState<string>("");
    const [clientPic, setClientPic] = useState<string>("");

    const handleSubmit = () => {
    }


  return (
    <div className={`client-input client-input--${variant}`}>
    <form className="client-input__form">
            <div className="leftRight-wrapper">
              <div className="client-input__form--leftside">
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
                
               
              </div>

              <div className="client-input__form--rightside">
              <label>Client Thumbnail</label>
              <input
                  type="file"
                  accept="image/*"
                  name="choose-file"
                  id="choose-file"
                  className="choose-file"
                  onChange={(e) => setClientPic(e.target.value)}
                ></input>
                <label className="fileUpload" htmlFor="choose-file"><img src={uploadImage} alt="upload-image" />
                <div className="upload-button">
                  <Button
                    label="Upload"
                    variant="grey"
                    size="large"
                    onClick={handleSubmit}
                  />
                </div></label>
                <label className="filePath" htmlFor="choose-file">{clientPic.slice(12)}</label>
                 
              </div>
            </div>
            <div className="buttons-wrapper">
              <div className="client-input__buttons">
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

export default ClientInputForm