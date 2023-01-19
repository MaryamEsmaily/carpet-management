import ProductsPage from "views/app/products";
import AddProductPage from "views/app/products/AddProduct";
import ProductDetailsPage from "views/app/products/ProductDetails";

const appRoutes = [
  {
    path: "/app/products",
    element: ProductsPage,
  },
  {
    path: "/app/add-product",
    element: AddProductPage,
  },
  {
    path: "/app/product-details/:id",
    element: ProductDetailsPage,
  },
];

export default appRoutes;
