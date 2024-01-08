import "./BookAppointment.scss";
import Calendar from "react-calendar";
import Button from "../../components/Button/Button";

type Staff = {
  id: number;
  name: string;
};

const handleClick = () => {
  console.log("add handleclick logic to this later");
};

const BookAppointment = () => {
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
  startTime.setHours(9, 0, 0);
  const endTime = new Date();
  endTime.setHours(17, 3, 0);

  while (startTime < endTime) {
    timeIntervals.push(
      startTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
    startTime.setMinutes(startTime.getMinutes() + 30);
  }

  return (
    <div className="book-appointment">
      <h1 className="book-appointment__header">Book Appointment</h1>
      {/* uses npmjs react-calendar package */}

      <form className="book-appointment__form">
        <div className="book-appointment__form--leftside">
          <label>First Name</label>
          <input type="text" name="firstName"></input>
          <label>Last Name</label>
          <input type="text" name="lastName"></input>
          <label>Email Address</label>
          <input type="email" name="emailAddress"></input>
          <label>Mobile Number</label>
          <input type="text" name="mobileNumber"></input>
          <label>Staff Member</label>
          <select name="staffMember">
            <option value="" disabled>
              Select Staff
            </option>

            {staffList.map((staff) => (
              <option key={staff.id} value={staff.name}>
                {staff.name}
              </option>
            ))}
          </select>
        </div>

        <div className="book-appointment__form--rightside">
          <Calendar className="calendar-desktop" />
          <label>Appointment Time</label>
          <select name="appointmentTime">
            <option value="" disabled>
              Select Time
            </option>
            {timeIntervals.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </form>
      {/* button component needs buttonprops so we cana hide the submit button on desktop view and show it on mobile view */}
      <Button label="Cancel" variant="grey" onClick={handleClick} />
      <Button label="Save" variant="yellow" onClick={handleClick} />
      <Button label="Submit" variant="yellow" onClick={handleClick} />
    </div>
  );
};

export default BookAppointment;
