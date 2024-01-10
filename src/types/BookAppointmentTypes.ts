export type Staff = {
    id: number;
    name: string;
  };
  
 export type Appointment = {
    date: string;
    time: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
    mobileNumber: string;
    selectedStaff: string;
  };