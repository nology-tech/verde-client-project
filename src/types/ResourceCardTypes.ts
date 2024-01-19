

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

export type ResourceCard = {
  staffName: string,
  category:string;
  id: number,
  resourceName: string,
  quantityRemaining: number,
  costPerUnit: string,
  autoPurchase: "YES" | "NO",
  autoPurchaseLevel: string,
  path: string
}