import "./Modal.scss"
import Button from "../Button/Button"

/* Modal takes button object array as prop. This is to allow for multiple buttons on the modal.   */
type ModalProps = {
    title: string;
    buttons: ButtonProps[];
    variant: "light" | "dark"
}

type ButtonProps = {
    label: string;
    buttonVariant: "yellow" | "grey" | "red" | "purple" | "red-alt";
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
                            onClick={button.onClick}
                            path={button.path}
                            size={button.size}
                        />
                ))}
            </div>
        </div>
    );
};

export default Modal;
