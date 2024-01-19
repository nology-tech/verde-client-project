import "./ResourceCardList.scss";
import { ResourceCardProps } from "../../types/ResourceCardTypes";
import ResourceCard from "../ResourceCard/ResourceCard";

type ResourceCardListProps = {
  resources: ResourceCardProps[];
  variant: "light" | "dark";

};

const ResourceCardList = ({ resources, variant }: ResourceCardListProps) => {
  return (
    <div className = {`resource-card-list resource-card-list--${variant}`}>
      <div className="resource-card-list__container">
        {resources.map((resource) => (
          <ResourceCard
            key={resource.id}
            id={resource.id}
            resourceName={resource.resourceName}
            quantityRemaining={resource.quantityRemaining}
            costPerUnit={resource.costPerUnit}
            autoPurchase={resource.autoPurchase}
            autoPurchaseLevel={resource.autoPurchaseLevel}
            path={resource.path + "/" + resource.id}
            variant={variant}
          />
        ))}
      </div>
    </div>
  );
};

export default ResourceCardList;
