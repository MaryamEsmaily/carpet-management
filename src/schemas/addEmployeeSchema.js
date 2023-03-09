import * as yup from "yup";
//
const addEmployeeSchema = yup.object().shape({
  fullName: yup.string().required("لطفا نام و نام خانوادگی خود را وارد کنید"),
  userName: yup.string().required("لطفا نام کاربری خود را وارد کنید"),
  email: yup
    .string()
    .required("لطفا ایمیل خود را وارد کنید")
    .email("با فرمت درست وارد کنید"),
  mobileNumbers: yup
    .array()
    .min(1, "حداقل یک شماره موبایل وارد کنید")
    .required("لطفا شماره همراه خود را وارد کنید"),
});
export default addEmployeeSchema;
