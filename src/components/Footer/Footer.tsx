import "./Footer.scss";
import { Link } from "react-router-dom";

type FooterProps = {
    variant: "light" | "dark";
};

const Footer = ( { variant } : FooterProps ) => {
    const className = `footer footer--${variant}`;

    return (
        <footer className= {className}>
            <Link to="/"><button className={`footer--${variant}__button`}><img src="/src/assets/images/homeFooter-icon.svg" alt="home-button" className={`footer--${variant}__button--image`}/></button></Link>
        </footer>
    )
};

export default Footer;