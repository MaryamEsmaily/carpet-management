import { lazy } from "react";

const ProductsPage = lazy(() => import("views/app/products"));

const appRoutes = [
  {
    path: "/app/products",
    component: ProductsPage,
    // kindRoute: "",
  },
];

export default appRoutes;
