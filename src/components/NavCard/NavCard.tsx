import './NavCard.scss'
type NavcardProps = {
name : string;
}

const NavCard = ({name}:NavcardProps) => {
  return (
    <div>
      <p>{name}</p>
      <button> {'>'} </button>
    </div>
  )
}

export default NavCard