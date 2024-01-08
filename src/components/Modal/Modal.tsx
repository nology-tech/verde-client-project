import "./Modal.scss"
import Button from "../Button/Button"
import { Link } from "react-router-dom"

type ModalProps = {
    title: string;
    variant: "yellow" | "red";
    label: string; 
    onClick: () => void;
    path: string; 
    button2: boolean;
    variant2?: "yellow" | "red";
    label2?: string | undefined;
    onClick2?: () => void;  
}

const Modal = ({title, variant, label, onClick, path, button2, label2, variant2, onClick2} : ModalProps) => {

    return (
        <section className="modal">
            <h2 className="modal__title" >{title}</h2>
            <div className="modal__buttons"> 
                <Link to = {path}>
                    <Button label={label} variant={variant} onClick={onClick}></Button> 
                </Link>
            {button2 && label2 && variant2 && onClick2 ? ( 
              <Button label={label2} variant={variant2} onClick={onClick2}></Button>) : null }
          </div>
        </section>
    );
};

export default Modal;
