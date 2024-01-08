import logo from "../../../public/images/logo.png";

type HeaderProps = {
    headerTitle: string; 
}

const Header = ({headerTitle} : HeaderProps) => {
    return (
        <div className="header">
        <img src={logo} className="header__logo" alt="logo"/>
        <h1 className="header__title">{headerTitle}</h1>
        </div>
    )
}

export default Header;