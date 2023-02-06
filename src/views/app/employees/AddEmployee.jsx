import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Stack,
  Text,
} from "@chakra-ui/react";
import BasketIcon from "components/icon/BasketIcon";
import EmployeeProfileDetails from "container/views/app/employees/EmployeeProfileDetails";
import EmployeeAccess from "container/views/app/employees/EmployeeAccess";
import { useFormik } from "formik";
import useToast from "hook/useToast";
import { useNavigate } from "react-router-dom";
import { usePostAddEmployee } from "hook/api/useEmployeesApi";

const initialValues = {
  fullName: "",
  userName: "",
  email: "",
  address: "",
  mobileNumbers: [],
  birthDate: "",
  phoneNumber: "",
  image: [],
};

function AddEmployeePage() {
  //
  const navigate = useNavigate();
  //
  const toast = useToast();
  //
  const postAddEmployee = usePostAddEmployee();
  const handleSubmit = (values) => {
    postAddEmployee.mutate(
      {
        ...values,
        image: values?.images.map((item) => item),
        mobileNumbers: values.colors.map((color) => color.value),
      },
      {
        onSuccess: (res) => {
          toast.success({ res });
          formik.resetForm();
        },
        onError: (err) => {
          toast.error({ err });
        },
      }
    );
  };
  //
  const formik = useFormik({
    onSubmit: handleSubmit,
    initialValues: initialValues,
  });
  //
  return (
    <Box>
      <Stack direction="row" alignItems="center" spacing={2}>
        <BasketIcon boxSize={5} />
        <Text fontWeight="bold" fontSize={20}>
          افـزودن پـرسنل
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
          <BreadcrumbLink href="#">افـزودن پـرسنل</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <EmployeeProfileDetails formik={formik} />
      <EmployeeAccess formik={formik} />
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
    </Box>
  );
}

export default AddEmployeePage;
