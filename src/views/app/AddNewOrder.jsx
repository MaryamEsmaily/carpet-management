import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  FormControl,
  FormLabel,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import BasketIcon from "components/icon/BasketIcon";
import { useFormik } from "formik";
import useToast from "hook/useToast";
import { useNavigate } from "react-router-dom";
import { usePostAddEmployee } from "hook/api/useEmployeesApi";
import CustomerInfo from "container/views/app/addNewOrder/CustomerInfo";
import ProductsInfo from "container/views/app/addNewOrder/ProductsInfo";

const initialValues = {
  author: "",
  customerName: "",
  orderDate: "",
  description: "",
  products: [
    {
      id: 1,
      code: "",
      sizes: [],
      colors: [],
      isGraded: "",
      count: "",
    },
  ],
};

function AddNewOrderPage() {
  //
  const navigate = useNavigate();
  //
  const toast = useToast();
  //
  const postAddEmployee = usePostAddEmployee();
  const handleSubmit = (values) => {
    postAddEmployee.mutate(values, {
      onSuccess: (res) => {
        toast.success({ res });
        formik.resetForm();
      },
      onError: (err) => {
        toast.error({ err });
      },
    });
  };
  //
  const formik = useFormik({
    onSubmit: handleSubmit,
    initialValues: initialValues,
  });
  //
  return (
    <Box as="form" onSubmit={formik.handleSubmit}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <BasketIcon boxSize={5} />
        <Text fontWeight="bold" fontSize={20}>
          ایجاد سفـارش جدیـد
        </Text>
      </Stack>
      <Breadcrumb
        mt={3}
        color="text-primary"
        fontSize={18}
        separator={<Box width={1} height={1} bg="text-primary" />}
      >
        <BreadcrumbItem>
          <Box width={1} height={1} mr={2} bg="text-primary" />
          <BreadcrumbLink href="/app/products">داشبورد</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">ایجاد سفـارش جدیـد</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <CustomerInfo formik={formik} />
      <ProductsInfo formik={formik} />
      <Stack
        direction="row"
        align="end"
        mt={8}
        borderRadius={24}
        bg="layout-over"
        p={10}
      >
        <FormControl>
          <FormLabel fontSize="sm" fontWeight="bold">
            توضیحـات
          </FormLabel>
          <Textarea
            h="170px"
            variant="filled"
            _placeholder={{ color: "text-primary" }}
            placeholder="توضیحـات بیشتر ..."
            {...formik.getFieldProps("description")}
          />
        </FormControl>
        <Stack direction="row" spacing={2} mt={6} w="full" justify="end">
          <Button
            w={140}
            variant="outline"
            onClick={() => {
              navigate("/app/employees");
              formik.resetForm();
            }}
          >
            انصراف
          </Button>
          <Button w={140} type="submit">
            ثبت اطلاعات
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default AddNewOrderPage;
