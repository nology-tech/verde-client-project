import "./ResourceCardList.scss";
import { ResourceCardProps } from "../../types/ResourceCardTypes";
import ResourceCard from "../ResourceCard/ResourceCard";

type ResourceCardListProps = {
  staff: string;
  resources: ResourceCardProps[];
};

const ResourceCardList = ({ staff, resources }: ResourceCardListProps) => {
  return (
    <div className="resource-card-list">
      <div className="resource-card__titles">
        <p>Resource Name</p>
        <p>Quantity Remaining</p>
        <p className="resource-card-list__titles--spheadings">Cost Per Unit</p>
        <p className="resource-card-list__titles--spheadings">Auto-Purchase</p>
        <p className="resource-card-list__titles--spheadings">
          Auto-Purchase Level
        </p>
      </div>
      {/* <h2 className="resource-card-list__title">{staff}</h2> */}
      <div className="resource-card-list__container">
        {resources.map((resource) => (
          <ResourceCard
            id={resource.id}
            resourceName={resource.resourceName}
            quantityRemaining={resource.quantityRemaining}
            costPerUnit={resource.costPerUnit}
            autoPurchase={resource.autoPurchase}
            autoPurchaseLevel={resource.autoPurchaseLevel}
            path={resource.path}
            variant={resource.variant}
          />
        ))}
      </div>
    </div>
  );
};

export default ResourceCardList;
