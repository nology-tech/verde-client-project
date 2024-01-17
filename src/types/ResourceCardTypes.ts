export type ResourceCardProps = {
  id: number;
  resourceName: string;
  quantityRemaining: number;
  costPerUnit: string;
  autoPurchase: string;
  autoPurchaseLevel: string | number;
  path: string;
  variant?:  "light" | "dark";
};
