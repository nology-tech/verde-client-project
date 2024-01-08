import "./NavBar.scss";
import { Link } from 'react-router-dom';

// type NavBarProps = {

// };

const NavBar = () => {
    return (
        <nav className="nav">
            <ul className="nav__list">
            <Link to="/"><li className="nav__list--item"><img src="/src/assets/images/home-icon.png" alt="Home Button" className="nav__image"/>Home</li></Link>
            <Link to="/book-appointment"><li className="nav__list--item"><img src="/src/assets/images/appointment-icon.png" alt="Book Appointment" className="nav__image"/>Book Appointment</li></Link>
            <Link to="/staff"><li className="nav__list--item"><img src="/src/assets/images/staff-icon.png" alt="Staff" className="nav__image"/>Staff</li></Link>
            <Link to="/clients"><li className="nav__list--item"><img src="/src/assets/images/clients-icon.png" alt="Clients" className="nav__image"/>Clients</li></Link>
            <Link to="/resources"><li className="nav__list--item"><img src="/src/assets/images/resources-icon.png" alt="Resources" className="nav__image"/>Resources</li></Link>
                <hr/>
            <Link to="settings"><li className="nav__list--item"><img src="/src/assets/images/settings-icon.png" alt="Settings" className="nav__image"/>Settings</li></Link>
            </ul>
        </nav>
    )
};

export default NavBar;