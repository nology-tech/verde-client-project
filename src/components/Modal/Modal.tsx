import "./Modal.scss"
import Button from "../Button/Button"
import { Link } from "react-router-dom"

/* Modal takes button object array as prop. This is to allow for multiple buttons on the modal.   */
type ModalProps = {
    title: string;
    buttons: ButtonProps[];
    variant: "light" | "dark"
}

/* Added path as a button prop for this modal to allow links to different pages */
type ButtonProps = {
    label: string;
    buttonVariant: "yellow" | "red";
    onClick?: () => void
    path?: string; 
    size?: 'large' | 'small'
}

const Modal = ({title, buttons, variant} : ModalProps) => {

    return (
        <div className={`modal modal--${variant}`} >
            <h2 className="modal__title" >{title}</h2>
            <div className="modal__buttons"> 
                {buttons.map((button) => (
                        <Button
                            label={button.label}
                            variant={button.buttonVariant}
                            onClick={() => button.onClick && button.onClick()}
                            path={button.path? button.path : '#'}
                            size={button.size}
                        />
                ))}
            </div>
        </div>
    );
};

export default Modal;
