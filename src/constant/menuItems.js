import AddNewOrderIcon from "components/icon/AddNewOrderIcon";
import CartableIcon from "components/icon/CartableIcon";
import ManagementIcon from "components/icon/ManagementIcon";
import OrderManagementIcon from "components/icon/OrderManagementIcon";
import OrderReportIcon from "components/icon/OrderReportIcon";
import ReportIcon from "components/icon/ReportIcon";

export const menuItems = [
  {
    label: "کارتابل",
    icon: CartableIcon,
    path: "/",
  },
  {
    label: "ایجـاد سفـارش جدیـد",
    icon: AddNewOrderIcon,
    path: "/",
  },
  {
    label: "مدیریت",
    icon: ManagementIcon,
    path: "/app/products",
  },
  {
    label: "مدیریت سفارشات",
    icon: OrderManagementIcon,
    path: "/",
  },
  {
    label: "گزارش گیـری انبـار",
    icon: ReportIcon,
    path: "/",
  },
  {
    label: "گزارش گیـری سفـارشـات",
    icon: OrderReportIcon,
    path: "/",
  },
];
