import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./StaffEdit.scss";
import Calendar from "react-calendar";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { Appointment } from "../../types/BookAppointmentTypes";
import { StaffList } from "../../data/StaffNavList";
import { Staff } from "../../types/StaffNavTypes";
import Modal from "../../components/Modal/Modal";
import { StaffBookingsList } from "../../data/StaffBookingsList";
import { useNavigate } from "react-router-dom";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

type StaffEditProps = {
  variant: "dark" | "light";
};

const StaffEdit = ({ variant }: StaffEditProps) => {
  const [selectedDate, setSelectedDate] = useState<Value>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [appointments, setAppointments] = useState<object[]>([]);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [selectedStaff, setSelectedStaff] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);
  const { clientId } = useParams();
  const navigate = useNavigate();

  const filteredClient = StaffBookingsList.filter(
    (client) => client.id === Number(clientId)
  );
  const client = filteredClient[0];

  useEffect(() => {
    if (client) {
      setFirstName(client.clientName.split(" ").slice(0, -1).join(" "));
      setLastName(client.clientName.split(" ").slice(-1).join(" "));
      setMobileNumber(client.mobNumber);
      setEmailAddress(client.emailAddress);
      setSelectedStaff(client.staffMember);
      setSelectedTime(client.bookingTime);
      setSelectedDate(new Date(client.bookingDate));
    }
  }, [clientId]);

  const timeIntervals: string[] = [];

  const startTime = new Date();
  startTime.setHours(9, 0, 0, 0);
  const endTime = new Date();
  endTime.setHours(17, 30, 0);

  while (startTime < endTime) {
    timeIntervals.push(
      startTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
    startTime.setMinutes(startTime.getMinutes() + 30);
  }

  const handleSubmit = () => {
    if (
      !selectedDate ||
      !selectedTime ||
      !firstName ||
      !lastName ||
      !emailAddress ||
      !mobileNumber ||
      !selectedStaff
    ) {
      console.log("Please fill in all fields");
      return;
    }

    let formattedDate: string;

    if (selectedDate instanceof Date) {
      formattedDate = selectedDate.toLocaleDateString();
    } else {
      console.error("Invalid date format");
      return;
    }

    const newAppointment: Appointment = {
      date: formattedDate,
      time: selectedTime,
      firstName,
      lastName,
      emailAddress,
      mobileNumber,
      selectedStaff,
    };

    setAppointments([...appointments, newAppointment]);
    setModal(!modal);
    console.log("Appointments saved:", newAppointment);
  };

  const handleContinue = () => {
    setModal(false);
  };

  const confirmModal = [
    <Button label={"Continue"} variant={"yellow"} onClick={handleContinue} />,
  ];

  return (
    <div className="container">
      <div className={`staff-edit staff-edit--${variant}`}>
        <div className="staff-edit__navbar">
          <NavBar variant={variant} />
        </div>

        {filteredClient.map((client) => (
          <div className="headerForm-container" key={client.id}>
            <div className="staff-edit__header">
              <Header
                title={`Clients - ${client.clientName}`}
                variant={variant}
                onClick={() => console.log("Shall I go home??")}
                buttonOption={false}
                buttonLabel=""
                buttonVariant="yellow"
                dropdownOption={false}
              />
            </div>
            {!modal && (
              <form className="staff-edit__form">
                <div className="leftRight-wrapper">
                  <div className="staff-edit__form--leftside">
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
                    <label>Staff Member</label>
                    <select
                      name="staffMember"
                      value={selectedStaff}
                      onChange={(e) => setSelectedStaff(e.target.value)}
                    >
                      <option value="" disabled>
                        Select staff member...
                      </option>

                      {StaffList.map((staff: Staff) => (
                        <option key={staff.id} value={staff.name}>
                          {staff.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="staff-edit__form--rightside">
                    <Calendar
                      className="calendar-desktop"
                      onChange={(date) => setSelectedDate(date as Date)}
                      value={selectedDate}
                      minDate={new Date()}
                    />

                    <label>Time:</label>
                    <select
                      name="appointmentTime"
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                    >
                      <option value="" disabled>
                        Select time...
                      </option>

                      {timeIntervals.map((time, index) => (
                        <option key={index} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="buttons-wrapper">
                  <div className="staff-edit__buttons">
                    <div className="cancel-button">
                      <Button
                        label="Cancel"
                        variant="grey"
                        onClick={() => navigate(-1)}
                      />
                    </div>
                    <div className="save-button">
                      <Button
                        label="Save"
                        variant="yellow"
                        onClick={handleSubmit}
                      />
                    </div>
                  </div>
                </div>
              </form>
            )}

            {modal && (
              <Modal
                key={client.id}
                title="Booking Confirmed!"
                buttons={confirmModal}
                variant={variant}
              />
            )}
          </div>
        ))}
        <Footer variant={variant} />
      </div>
    </div>
  );
};

export default StaffEdit;
