import "./Modal.scss"
import Button from "../Button/Button"
import { Link } from "react-router-dom"

type ModalProps = {
    title: string;
    variant: "yellow" | "red";
    label: string; 
    onClick: () => void;
    path: string; 
}

const Modal = ({title, variant, label, onClick, path} : ModalProps) => {
const handleClick = () => {
    console.log("clicked")
}
    return (
        <section>
        <h2>{title}</h2>
        <div> 
            <Link to = {path}>
                <Button label={label} variant={variant} onClick={onClick}></Button> 
                
            </Link>
        </div>
        </section>
    )
}

export default Modal
