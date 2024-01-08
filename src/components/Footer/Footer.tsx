import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
           <Link to="/"><button className="footer__button"><img src="/src/assets/images/home-footer-icon.png" alt="home-button" className="footer__button--image"/></button></Link>
        </footer>
    )
};

export default Footer;