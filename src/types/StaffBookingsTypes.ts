export type StaffBookings = {
    id: number;
    clientName: string;
    role?: string;
    dob?: string;
    emailAddress: string;
    mobNumber: string;
    bookingDate: string;
    bookingTime: string;
    path: string;
    staffMember?: string;
};