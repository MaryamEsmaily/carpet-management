import firstProduct from "assets/images/product-1.avif";
import secondProduct from "assets/images/product-2.avif";
import thirdProduct from "assets/images/product-3.avif";
import forthProduct from "assets/images/product-4.avif";

export const postAllProductsData = {
  statusCode: 200,
  isSuccess: true,
  message: "",
  Data: {
    content: [
      {
        id: 1,
        label: "فرش دست بافت کاشان",
        code: "۴۵۹۲۴۱۰۷۸۴",
        colors: ["طلایی", "خاکستری"],
        sizes: ["24", "12"],
        image: firstProduct,
        status: "1",
      },
      {
        id: 2,
        label: "فرش دست بافت کاشان",
        code: "۴۵۹۲۴۱۰۷۸۴",
        colors: ["طلایی", "خاکستری"],
        sizes: ["24", "12"],
        image: secondProduct,
        status: "1",
      },
      {
        id: 3,
        label: "فرش دست بافت کاشان",
        code: "۴۵۹۲۴۱۰۷۸۴",
        colors: ["قرمز", "زرد"],
        sizes: ["24", "12"],
        image: thirdProduct,
        status: "1",
      },
      {
        id: 4,
        label: "فرش دست بافت کاشان",
        code: "۴۵۹۲۴۱۰۷۸۴",
        colors: ["سبز", "آبی"],
        sizes: ["24", "12"],
        image: forthProduct,
        status: "1",
      },
      {
        id: 5,
        label: "فرش دست بافت کاشان",
        code: "۴۵۹۲۴۱۰۷۸۴",
        colors: ["سفید", "آبی"],
        sizes: ["24", "12"],
        image: firstProduct,
        status: "0",
      },
      {
        id: 6,
        label: "فرش دست بافت کاشان",
        code: "۴۵۹۲۴۱۰۷۸۴",
        colors: ["طلایی", "خاکستری"],
        sizes: ["24", "12"],
        image: secondProduct,
        status: "0",
      },
      {
        id: 7,
        label: "فرش دست بافت کاشان",
        code: "۴۵۹۲۴۱۰۷۸۴",
        colors: ["طلایی", "خاکستری"],
        sizes: ["24", "12"],
        image: thirdProduct,
        status: "0",
      },
      {
        id: 8,
        label: "فرش دست بافت کاشان",
        code: "۴۵۹۲۴۱۰۷۸۴",
        colors: ["طلایی", "خاکستری"],
        sizes: ["24", "12"],
        image: forthProduct,
        status: "1",
      },
    ],
    totalCount: 8,
  },
};
