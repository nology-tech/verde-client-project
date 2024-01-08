import "./BookAppointment.scss"


type Staff = {
    id: number;
    name: string;
  };


const BookAppointment = () => {

    const staffList: Staff[] = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Bob Johnson' },
        { id: 4, name: 'Alice Williams' },
        { id: 5, name: 'Charlie Brown' },
        { id: 6, name: 'Emily Davis' },
        { id: 7, name: 'Frank White' },
        { id: 8, name: 'Grace Miller' },
        { id: 9, name: 'Henry Wilson' },
        { id: 10, name: 'Ivy Robinson' },
      ];


    return (

        <div className="book-appointment_container">
            <h1 className="book-appointment_header">Book Appointment</h1>
            <form className="book-appointment_form">
                <label>First Name</label>
                <input 
                type="text"
                name="firstName"
                ></input>
                <label>Last Name</label>
                <input 
                type="text"
                name="lastName"
                ></input>
                <label>Email Address</label>
                <input 
                type="email"
                name="emailAddress"
                ></input>
                <label>Mobile Number</label>
                <input 
                type="text"
                name="mobileNumber"
                ></input>
                <label>Staff Member</label>
                <select 
                name="staffMember"
                >
                    <option value="" 
                    disabled>Select Staff</option>

                    {staffList.map((staff) => (
                        <option key={staff.id} value={staff.name}>{staff.name}</option>
                    ))}
                </select>
            </form>
        
        </div>

    )
}

export default BookAppointment