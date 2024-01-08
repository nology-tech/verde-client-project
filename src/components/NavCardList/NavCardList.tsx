import './NavCardList.scss'
import NavCard from '../NavCard/NavCard'


const NavCardList = () => {
  return (
    <div>
      <NavCard name="New booking"/>
      <NavCard name="Staff Detail"/>
      <NavCard name="Client Detail"/>
      <NavCard name="Resources"/>
      <NavCard name="Settings"/>
    </div>
  )
}

export default NavCardList