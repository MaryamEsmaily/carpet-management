import AddNewOrderIcon from "components/icon/AddNewOrderIcon";
import BoxIcon from "components/icon/BoxIcon";
import CartableIcon from "components/icon/CartableIcon";
import HouseIcon from "components/icon/HouseIcon";
import ManagementIcon from "components/icon/ManagementIcon";
import OrderManagementIcon from "components/icon/OrderManagementIcon";
import OrderReportIcon from "components/icon/OrderReportIcon";
import ReportIcon from "components/icon/ReportIcon";
import UserIcon from "components/icon/UserIcon";

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
    path: "/app/add-new-order",
  },
  {
    // مدیریت
    label: "3",
    icon: ManagementIcon,
    children: [
      {
        // مدیریت متعاملان
        label: "59",
        icon: ManagementIcon,
        path: "/app/buyers",
      },
      {
        // مدیریت پرسنل
        label: "60",
        icon: ManagementIcon,
        path: "/app/employees",
      },
      {
        // مدیریت محصول
        label: "61",
        icon: BoxIcon,
        path: "/app/products",
      },
      {
        // مدیریت انبـار
        label: "62",
        icon: HouseIcon,
        path: "/app/stores",
      },
    ],
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
