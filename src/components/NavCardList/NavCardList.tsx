import NavCard from "../NavCard/NavCard";
import "./NavCardList.scss";
import { NavCardLabel } from "../../data/NavCardTypes";
import { Link } from "react-router-dom";

type NavCardListProps = {
  labels: NavCardLabel[];
  variant: "light" | "dark";
};

const NavCardList = ({ labels, variant }: NavCardListProps) => {
  return (
    <div className="navcardlist">
      {labels.map((label, index) => (
        <Link to={label.path} key={index} className="navcardlist__link">
          {/* link needs to be changed once other components added  */}
          <NavCard label={label.label} buttonLabel={label.buttonLabel} variant={variant} />
        </Link>
      ))}
    </div>
  );
};

export default NavCardList;
