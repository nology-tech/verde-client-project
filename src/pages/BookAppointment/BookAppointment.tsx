import { useState } from "react";
import "./BookAppointment.scss";
import Calendar from "react-calendar";
import DatePicker from "react-datepicker";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { Appointment } from "../../types/BookAppointmentTypes";
import { StaffList } from "../../data/StaffNavList";
import { Staff } from "../../types/StaffNavTypes";

const BookAppointment = () => {
  const [selectedDate, setSelectedDate] = useState<Date | Date[]>(new Date());

  const [selectedTime, setSelectedTime] = useState<string>("");
  const [appointments, setAppointments] = useState<object[]>([]);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [selectedStaff, setSelectedStaff] = useState<string>("");

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

    console.log("Appointment saved:", newAppointment);
  };

  const handleDatePickerSubmit = () => {
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

    const formattedDate: string = selectedDate.toLocaleString();

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

    console.log("Appointment saved:", newAppointment);
    // Additional logic for saving data, connecting to a database, etc.
  };

  return (
    <div className="container">
      <div className="book-appointment">
        <div className="book-appointment__navbar">
          <NavBar variant="light" />
        </div>
        <div className="headerForm-container">
          <div className="book-appointment__header">
            <Header
              title="Book Appointment"
              variant="light"
              onClick={() => console.log("Shall I go home??")}
              buttonOption={false}
              buttonLabel=""
              buttonVariant="yellow"
              dropdownOption={false}
            />
            {/* uses npmjs react-calendar package */}
          </div>
          <form className="book-appointment__form">
            <div className="leftRight-wrapper">
              <div className="book-appointment__form--leftside">
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

              <div className="book-appointment__form--rightside">
                <Calendar
                  className="calendar-desktop"
                  onChange={(date) => setSelectedDate(date as Date)}
                  value={selectedDate as Date}
                  minDate={new Date()}
                />

                <label className="datepicker-label">Date:</label>
                <div className="datepicker">
                  <DatePicker
                    selected={selectedDate as Date}
                    className="datepicker-mobile"
                    onChange={(date) => setSelectedDate(date as Date)}
                    placeholderText="DD/MM/YYYY"
                    dateFormat="dd/MM/yyyy"
                    minDate={new Date()}
                  />
                </div>
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
              <div className="book-appointment__buttons">
                <div className="save-button">
                  <Button
                    label="Save"
                    variant="yellow"
                    onClick={handleSubmit}
                  />
                </div>
                <div className="submit-button">
                  <Button
                    label="Submit"
                    variant="yellow"
                    onClick={handleDatePickerSubmit}
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
        <Footer variant="light" />
      </div>
    </div>
  );
};

export default BookAppointment;
