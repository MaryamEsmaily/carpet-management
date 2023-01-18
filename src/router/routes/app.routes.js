import { lazy } from "react";

const ProductsPage = lazy(() => import("views/app/ProductsPage"));

const appRoutes = [
  {
    path: "/app/products",
    element: ProductsPage,
  },
];

export default appRoutes;
