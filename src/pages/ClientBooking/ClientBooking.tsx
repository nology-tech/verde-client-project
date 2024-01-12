import ClientProfile from "../../components/ClientProfile/ClientProfile"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Layout from "../../components/Layout/Layout"
import NavBar from "../../components/NavBar/NavBar"
import "../ClientBooking/ClientBooking.scss"

type ClientBookingProps = {
    variant: "light" | "dark"
} 

const ClientBooking = ({variant}:ClientBookingProps) => {
  return (
    <Layout>
    <NavBar variant={variant} />
    <main className={`main main--${variant}`}>
      <Header
        title="Client Booking"
        variant={variant}
        buttonOption={true}
        buttonLabel="+ Edit"
        buttonVariant="yellow"
        dropdownOption={false}
      />
        <div>
       
       </div>
       <div className="main__container">
        <h3 className="main__subtitle"> Overview</h3>
        <ClientProfile clientinfo={{
                      clientName: "Bob",
                      role: "Manager",
                      dob: "30/09/1997",
                      emailAddress: "bob@live.com",
                      mobileNumber: "9782748959",
                      appointmentDate: "20/05/2022",
                      appointmentTime: "14.00pm",
                      staffMember: "Staff 03"
                  }} variant={"light"}/>
      <div>
    <Footer variant={variant}/> 
    </div>
    </div>
    </main>
    
  </Layout>
  )
}

export default ClientBooking