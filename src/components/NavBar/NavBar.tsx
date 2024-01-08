import "./NavBar.scss";
import { Link } from 'react-router-dom';

// type NavBarProps = {

// };

const NavBar = () => {
    return (
        <nav>
            <ul>
            <Link to="/"><li><img src="/src/assets/images/home-icon.png" alt="Home Button"/>Home</li></Link>
            <Link to="/book-appointment"><li><img src="/src/assets/images/appointment-icon.png" alt="Book Appointment"/>Book Appointment</li></Link>
            <Link to="/staff"><li><img src="/src/assets/images/staff-icon.png" alt="Staff"/>Staff</li></Link>
            <Link to="/clients"><li><img src="/src/assets/images/clients-icon.png" alt="Clients"/>Clients</li></Link>
            <Link to="/resources"><li><img src="/src/assets/images/resources-icon.png" alt="Resources"/>Clients</li></Link>
                <hr/>
            <Link to="settings"><li><img src="/src/assets/images/settings-icon.png" alt="Settings"/>Settings</li></Link>
            </ul>
        </nav>
    )
};

export default NavBar;