import "./Footer.scss";
import homeIconFooter from "../../assets/images/home-footer-icon.svg"
import { Link } from "react-router-dom";

type FooterProps = {
    variant: "light" | "dark";
};

const Footer = ( { variant } : FooterProps ) => {
    const className = `footer footer--${variant}`;

    return (
        <div>
            <footer className= {className}>
                <Link to="/"><button className={`footer--${variant}__button`}><img src={homeIconFooter} alt="home-button" className={`footer--${variant}__button--image`}/></button></Link>
            </footer>
        </div>
    )
};

export default Footer;