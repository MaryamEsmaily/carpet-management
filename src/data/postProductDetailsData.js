import firstProduct from "assets/images/product-1.avif";
import secondProduct from "assets/images/product-2.avif";
import thirdProduct from "assets/images/product-3.avif";
import forthProduct from "assets/images/product-4.avif";

export const postProductDetailsData = {
  statusCode: 200,
  isSuccess: true,
  message: "",
  Data: {
    content: {
      id: 1,
      title: "فـرش دست بافـت کاشـان مدل سلطنتـی",
      code: "148893828",
      colors: [
        { label: "طلایی", value: 1 },
        { label: "خاکستری", value: 2 },
      ],
      sizes: [
        { label: "12", value: 1 },
        { label: "24", value: 2 },
      ],
      description:
        "با توجه به تاریخچه کهنی که در تولید فرش و قالی دستباف ایرانی وجود دارد در حال حاضر می‌توان گفت محصول بافته شده به دست هنرمندان ایرانی جزو بهترین و زیباترین نوع فرش در دنیا است که این امر از نظر کارشناسان بین‌المللی فرش تایید شده است .",
      status: "1",
      author: "امیـر عرب",
      createData: "۱۴۰۱/۱۲/۰۴",
      changeByAuthor: "مـریـم اسماعیـلی",
      lastChangeDate: "۱۴۰۱/۱۲ /۲۹",
      images: [firstProduct, secondProduct, thirdProduct, forthProduct],
    },
  },
};
