import { ResourceCard } from "../types/ResourceCardTypes";

export const ResourceCardList1 : ResourceCard[] = [
  {
    staffName: "Sarah Stanley",
    category: "Health",
    id: 1,
    resourceName: "Syringes",
    quantityRemaining: 300,
    costPerUnit: "12.99",
    autoPurchase: "YES",
    autoPurchaseLevel: "50",
    path: "/resources"
  },
  {
    staffName: "Sarah Stanley",
    category: "Health",
    id: 2,
    resourceName: "Needles",
    quantityRemaining: 300,
    costPerUnit: "12.99",
    autoPurchase: "YES",
    autoPurchaseLevel: "100",
    path: "/resources",
  },
  {
    staffName: "Sarah Stanley",
    category: "Health",
    id: 3,
    resourceName: "Saline",
    quantityRemaining: 100,
    costPerUnit: "1.99",
    autoPurchase: "YES",
    autoPurchaseLevel: "1L",
    path: "/resources",
  }];




  export const ResourceCardList2 = [
  {
    staffName: "April Orr",
    id: 1,
    resourceName: "Syringes",
    quantityRemaining: 200,
    costPerUnit: "12.99",
    autoPurchase: "YES",
    autoPurchaseLevel: 50,
    path: "/resources",
  },

  {
    staffName: "April Orr",
    id: 2,
    resourceName: "Needles",
    quantityRemaining: 300,
    costPerUnit: "12.99",
    autoPurchase: "YES",
    autoPurchaseLevel: 50,
    path: "/resources",
  },

  {
    staffName: "April Orr",
    id: 3,
    resourceName: "Saline",
    quantityRemaining: 100,
    costPerUnit: "1.99",
    autoPurchase: "YES",
    autoPurchaseLevel: "1L",
    path: "/resources",
  },
];

export const resourceCardListAdmin = [
  {
    id: 1,
    resourceName: "Notepad",
    quantityRemaining: 20,
    costPerUnit: "1.99",
    autoPurchase: "YES",
    autoPurchaseLevel: 10,
    path: "/resources",
  },
];
