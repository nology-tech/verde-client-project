import "./Modal.scss"
import Button from "../Button/Button"

const Modal = ({}) => {
const handleClick = () => {
    console.log("clicked")
}

    return (
        <section>
        <div>Hello World!</div>
        <div>
           <Button label="booking-confirmation" variant="yellow" onClick={handleClick}></Button> 
        </div>
        </section>
    )
}

export default Modal
