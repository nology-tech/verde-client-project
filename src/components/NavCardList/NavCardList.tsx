import NavCard from "../NavCard/NavCard";
import "./NavCardList.scss";
import { Label } from "../../data/types";
import { Link } from "react-router-dom";

type NavCardProps = {
  labels: Label[];
};

const NavCardList = ({ labels }: NavCardProps) => {
  return (
    <div className="navcardlist">
      {labels.map((label, index) => (
        <Link to={label.path} key={index} className="navcardlist__link">
          {/* link needs to be changed once other components added  */}
          <NavCard label={label.label} buttonLabel={label.buttonLabel} variant={"dark"} />
        </Link>
      ))}
    </div>
  );
};

export default NavCardList;
