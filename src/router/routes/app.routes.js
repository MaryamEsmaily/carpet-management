import { lazy } from "react";
// products
const ProductsPage = lazy(() => import("views/app/products"));
const AddProductPage = lazy(() => import("views/app/products/AddProduct"));
const ColorsPage = lazy(() => import("views/app/products/Colors"));
const SizesPage = lazy(() => import("views/app/products/Sizes"));
const EditProductPage = lazy(() => import("views/app/products/EditProduct"));
const ProductDetailsPage = lazy(() =>
  import("views/app/products/ProductDetails")
);
// buyers
const BuyersPage = lazy(() => import("views/app/buyers"));
const AddBuyerPage = lazy(() => import("views/app/buyers/AddBuyer"));
const EditBuyerPage = lazy(() => import("views/app/buyers/EditBuyer"));
// employees
const EmployeesPage = lazy(() => import("views/app/employees"));
const AddEmployeePage = lazy(() => import("views/app/employees/AddEmployee"));
const EmployeeDetailsPage = lazy(() =>
  import("views/app/employees/EmployeeDetails")
);
// store
const StorePage = lazy(() => import("views/app/store"));
const AddStorePage = lazy(() => import("views/app/store/AddStore"));
const EditStorePage = lazy(() => import("views/app/store/EditStore"));
// add new order
const AddNewOrderPage = lazy(() => import("views/app/AddNewOrder"));
// Cartable
const CartablePage = lazy(() => import("views/app/Cartable"));
// StoreReport
const StoreReportPage = lazy(() => import("views/app/StoreReport"));

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
  {
    path: "/app/products/product-edit/:id",
    element: EditProductPage,
  },
  {
    path: "/app/buyers",
    element: BuyersPage,
  },
  {
    path: "/app/buyers/add-buyer",
    element: AddBuyerPage,
  },
  {
    path: "/app/buyers/buyer-edit/:id",
    element: EditBuyerPage,
  },
  {
    path: "/app/employees",
    element: EmployeesPage,
  },
  {
    path: "/app/employees/employee-details/:id",
    element: EmployeeDetailsPage,
  },
  {
    path: "/app/employees/add-employee",
    element: AddEmployeePage,
  },
  {
    path: "/app/stores",
    element: StorePage,
  },
  {
    path: "/app/stores/add-store",
    element: AddStorePage,
  },
  {
    path: "/app/stores/store-edit/:id",
    element: EditStorePage,
  },
  {
    path: "/app/add-new-order",
    element: AddNewOrderPage,
  },
  {
    path: "/app/cartable",
    element: CartablePage,
  },
  {
    path: "/app/store-report",
    element: StoreReportPage,
  },
];

export default appRoutes;
