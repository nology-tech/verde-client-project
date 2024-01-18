import "./ResourceCard.scss";
import { Link } from "react-router-dom";
import arrow from "../../assets/images/arrow-icon.svg";
import { ResourceCardProps } from "../../types/ResourceCardTypes";

const ResourceCard = ({
  id,
  resourceName,
  quantityRemaining,
  costPerUnit,
  autoPurchase,
  autoPurchaseLevel,
  path,
  variant,
}: ResourceCardProps) => {
  return (
    <>
      <Link to={path} key={id}>
        <div className={`resource-card resource-card--${variant}`}>
          <p className={`resource-card__name resource-card__name--${variant}`}>
            {resourceName}
          </p>
          <p className="resource-card__quantity">{quantityRemaining}</p>
          <p className="resource-card__cost">{costPerUnit}</p>
          <p className="resource-card__autopurchase">{autoPurchase}</p>
          <p className="resource-card__autopurchaselevel">
            {autoPurchaseLevel}
          </p>

          <img className="resource-card__arrow" src={arrow} alt="arrow"></img>
        </div>
      </Link>
    </>
  );
};

export default ResourceCard;
