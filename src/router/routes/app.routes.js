import { lazy } from "react";
// routes
const ProductsPage = lazy(() => import("views/app/products"));
const AddProductPage = lazy(() => import("views/app/products/AddProduct"));
const ColorsPage = lazy(() => import("views/app/products/Colors"));
const SizesPage = lazy(() => import("views/app/products/Sizes"));
const ProductDetailsPage = lazy(() =>
  import("views/app/products/ProductDetails")
);
//
const appRoutes = [
  {
    path: "/app/products",
    element: ProductsPage,
  },
  {
    path: "/app/products/add-product",
    element: AddProductPage,
  },
  {
    path: "/app/products/product-details/:id",
    element: ProductDetailsPage,
  },
  {
    path: "/app/products/colors",
    element: ColorsPage,
  },
  {
    path: "/app/products/sizes",
    element: SizesPage,
  },
];

export default appRoutes;
