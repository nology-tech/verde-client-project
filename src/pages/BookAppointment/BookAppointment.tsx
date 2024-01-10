import { useState } from "react";
import "./BookAppointment.scss";
import Calendar from "react-calendar";
import DatePicker from "react-datepicker";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";

type Staff = {
  id: number;
  name: string;
};

type Appointment = {
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  mobileNumber: string;
  selectedStaff: string;
};


const BookAppointment = () => {
  const [selectedDate, setSelectedDate] = useState<Date | Date[]>(new Date());
  const [datePickerDate, setDatePickerDate] = useState<Date | null>(null);

  const [selectedTime, setSelectedTime] = useState<string>("");
  const [appointments, setAppointments] = useState<object[]>([]);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [selectedStaff, setSelectedStaff] = useState<string>("");

  const staffList: Staff[] = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Bob Johnson" },
    { id: 4, name: "Alice Williams" },
    { id: 5, name: "Charlie Brown" },
    { id: 6, name: "Emily Davis" },
    { id: 7, name: "Frank White" },
    { id: 8, name: "Grace Miller" },
    { id: 9, name: "Henry Wilson" },
    { id: 10, name: "Ivy Robinson" },
  ];

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

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);

    console.log(date);
  };

  const handleSubmit = () => {
    console.log(selectedDate);

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
    // we can add the logic to connect to a database or another form of storing  data here
  };

  const handleDatePickerChange = (date: Date | null) => {
    setDatePickerDate(date);
    console.log(date);
  };

  const handleDatePickerSubmit = () => {
    console.log(datePickerDate);

    if (
      !datePickerDate ||
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

    const formattedDate: string = datePickerDate.toLocaleDateString();

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
    <div className="book-appointment">
      <Header
        title="Book Appointment"
        variant="light"
        onClick={() => console.log("Shall I go home??")}
        buttonOption={true}
        buttonLabel=""
        buttonVariant="yellow"
      />
      {/* uses npmjs react-calendar package */}
      <NavBar variant="light" />
      <form className="book-appointment__form">
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

            {staffList.map((staff) => (
              <option key={staff.id} value={staff.name}>
                {staff.name}
              </option>
            ))}
          </select>
        </div>

        <div className="book-appointment__form--rightside">
          <Calendar
            className="calendar-desktop"
            onChange={(date: any) => handleDateChange(date)}
            value={selectedDate as Date}
          />

          <label>Date:</label>
          <DatePicker
            selected={datePickerDate as Date}
            className="datepicker-mobile"
            onChange={handleDatePickerChange}
            placeholderText="Select date..."
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
      </form>
      {/* button component needs buttonprops so we cant hide the submit button on desktop view and show it on mobile view */}
      <div className="save-button">
        <Button label="Save" variant="yellow" onClick={handleSubmit} />
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
          size="large"
        />
      </div>
    </div>
  );
};

export default BookAppointment;
