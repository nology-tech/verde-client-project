import "./NavBar.scss";
import { Link } from 'react-router-dom';
import homeIcon from '../../assets/images/home-icon.svg'
import brandLogo from '../../assets/images/logo.png';
import appointmentIcon from '../../assets/images/appointment-icon.png';
import staffIcon from '../../assets/images/staff-icon.png';
import clientsIcon from '../../assets/images/clients-icon.png';
import resourcesIcon from '../../assets/images/resources-icon.png';
import settingsIcon from '../../assets/images/settings-icon.png';

type NavBarProps = {
    variant: "light" | "dark";}

const NavBar = ({ variant }: NavBarProps ) => {

    const className = `nav nav--${variant}`;

    return (
        <nav className= {className}>
            <img alt="Brand Logo" className="nav__logo" src={brandLogo}/>
            <ul className="nav__list">
            <Link to="/home"><li className="nav__list--item"><img src={homeIcon} alt="Home Button" className="nav__image"/>Home</li></Link>
            <Link to="/book-appointment"><li className="nav__list--item"><img src={appointmentIcon} alt="Book Appointment" className="nav__image"/>Book Appointment</li></Link>
            <Link to="/staff"><li className="nav__list--item"><img src={staffIcon} alt="Staff" className="nav__image"/>Staff</li></Link>
            <Link to="/clients"><li className="nav__list--item"><img src={clientsIcon} alt="Clients" className="nav__image"/>Clients</li></Link>
            <Link to="/resources"><li className="nav__list--item"><img src={resourcesIcon} alt="Resources" className="nav__image"/>Resources</li></Link>
                <hr/>
            <Link to="settings"><li className="nav__list--item"><img src={settingsIcon} alt="Settings" className="nav__image"/>Settings</li></Link>
            </ul>
        </nav>
    )
};

export default NavBar;