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
      <h2 className="resource-card-list__title">{staff}</h2>
      <div className="resource-card-list__cards">
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
