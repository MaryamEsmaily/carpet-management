import AddNewOrderIcon from "components/icon/AddNewOrderIcon";
import CartableIcon from "components/icon/CartableIcon";
import ManagementIcon from "components/icon/ManagementIcon";
import OrderManagementIcon from "components/icon/OrderManagementIcon";
import OrderReportIcon from "components/icon/OrderReportIcon";
import ReportIcon from "components/icon/ReportIcon";

export const menuItems = [
  {
    // کارتابل
    label: "1",
    icon: CartableIcon,
    path: "/",
  },
  {
    // "ایجـاد سفـارش جدیـد"
    label: "2",
    icon: AddNewOrderIcon,
    path: "/",
  },
  {
    // مدیریت
    label: "3",
    icon: ManagementIcon,
    path: "/app/products",
  },
  {
    // "مدیریت سفارشات"
    label: "4",
    icon: OrderManagementIcon,
    path: "/",
  },
  {
    // "گزارش گیـری انبـار"
    label: "5",
    icon: ReportIcon,
    path: "/",
  },
  {
    // "گزارش گیـری سفـارشـات"
    label: "6",
    icon: OrderReportIcon,
    path: "/",
  },
];
