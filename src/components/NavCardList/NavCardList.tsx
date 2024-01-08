import NavCard from "../NavCard/NavCard";
import "./NavCardList.scss";
import { Labels } from "../../data/labels";

type NavCardProps = {
  labels: typeof Labels;
};

const NavCardList = ({ labels }: NavCardProps) => {
  return (
    <div className="navcardlist">
      {labels.map((label) => (
        <NavCard label={label.label} buttonLabel={label.buttonLabel} />
      ))}
    </div>
  );
};

export default NavCardList;
