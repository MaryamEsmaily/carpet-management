import ProductsPage from "views/app/products";
import AddProductPage from "views/app/products/AddProduct";
import ColorsPage from "views/app/products/Colors";
import ProductDetailsPage from "views/app/products/ProductDetails";
import SizesPage from "views/app/products/Sizes";

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
