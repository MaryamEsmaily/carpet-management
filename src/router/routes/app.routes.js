import ProductsPage from "views/app/products";
import AddProductPage from "views/app/products/AddProduct";
import ProductDetailsPage from "views/app/products/ProductDetails";

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
];

export default appRoutes;
