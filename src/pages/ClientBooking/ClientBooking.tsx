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
      <div className="main__container">
        <h3 className="main__container--subtitle"> Overview</h3>
        
      </div>
    </main>
    <Footer variant={variant}/> 
  </Layout>
  )
}

export default ClientBooking