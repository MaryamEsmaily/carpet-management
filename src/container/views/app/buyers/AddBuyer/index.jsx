import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import useToast from "hook/useToast";
import Input from "components/custom/Input";
import { usePostAddBuyer } from "hook/api/useBuyersApi";
import InputSelectList from "components/custom/InputSelectList";
import getValidationFieldProps from "utils/getValidationFieldProps";
//
const initialValues = {
  fullName: "",
  email: "",
  description: "",
  mobileNumbers: [],
  address: "",
};
//
function AddBuyer() {
  //
  const navigate = useNavigate();
  //
  const toast = useToast();
  //
  const postAddBuyer = usePostAddBuyer();
  //
  const handleSubmit = (values) => {
    postAddBuyer.mutate(values, {
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
    <Box
      mt={8}
      borderRadius={24}
      bg="layout-over"
      p={10}
      as="form"
      onSubmit={formik.handleSubmit}
    >
      <Grid templateColumns="repeat(2,minmax(0,1fr))" gap={10}>
        <GridItem colSpan={{ base: 2, lg: 1 }}>
          <FormControl isRequired>
            <FormLabel fontWeight="bold">نام و نام خانوادگـی </FormLabel>
            <Input
              variant="filled"
              _placeholder={{ color: "text-primary" }}
              placeholder="نام و نام خانوادگـی"
              {...formik.getFieldProps("fullName")}
              {...getValidationFieldProps(formik, "fullName")}
            />
          </FormControl>
          <FormControl mt={10}>
            <FormLabel fontWeight="bold">پست الکترونیـک</FormLabel>
            <Input
              variant="filled"
              _placeholder={{ color: "text-primary" }}
              placeholder="پست الکترونیـک"
              {...formik.getFieldProps("email")}
            />
          </FormControl>
          <FormControl mt={10}>
            <FormLabel fontWeight="bold">توضیحـات</FormLabel>
            <Textarea
              h="170px"
              variant="filled"
              _placeholder={{ color: "text-primary" }}
              placeholder="توضیحـات بیشتر ..."
              {...formik.getFieldProps("description")}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={{ base: 2, lg: 1 }}>
          <FormControl isRequired>
            <FormLabel fontWeight="bold">شماره همـراه</FormLabel>
            <InputSelectList {...formik.getFieldProps("mobileNumbers")} />
          </FormControl>
          <FormControl mt={10} isRequired>
            <FormLabel fontWeight="bold">آدرس </FormLabel>
            <Textarea
              h="170px"
              variant="filled"
              _placeholder={{ color: "text-primary" }}
              placeholder="آدرس را وارد کنید ..."
              {...formik.getFieldProps("address")}
              {...getValidationFieldProps(formik, "address")}
            />
          </FormControl>
        </GridItem>
      </Grid>
      <Stack direction="row" spacing={2} mt={6} w="full" justify="end">
        <Button
          w={140}
          variant="outline"
          onClick={() => {
            navigate("/app/buyers");
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

export default AddBuyer;
