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
import SelectCustom from "components/custom/SelectCustom";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import useToast from "hook/useToast";
import Input from "components/custom/Input";
import { usePostAddBuyer } from "hook/api/useBuyersApi";
//
const initialValues = {
  title: "",
  fullName: "",
  address: "",
  storeType: [],
  mobileNumber: "",
};
//
function AddStore() {
  //
  const navigate = useNavigate();
  //
  const toast = useToast();
  //
  const postAddBuyer = usePostAddBuyer();
  //
  const handleSubmit = (values) => {
    postAddBuyer.mutate(
      {
        ...values,
        mobileNumber: values.storeType.map((size) => size.value),
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
            <FormLabel fontWeight="bold">نـام </FormLabel>
            <Input
              variant="filled"
              _placeholder={{ color: "text-primary" }}
              placeholder="نام"
              {...formik.getFieldProps("title")}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={{ base: 2, lg: 1 }}>
          <FormControl isRequired>
            <FormLabel fontWeight="bold">نـوع انبـار </FormLabel>
            <SelectCustom
              {...formik.getFieldProps("storeType")}
              isMulti
              // options={getAllColors?.Data.content}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={{ base: 2, lg: 1 }}>
          <FormControl isRequired>
            <FormLabel fontWeight="bold">انباردار </FormLabel>
            <Input
              variant="filled"
              _placeholder={{ color: "text-primary" }}
              placeholder="انباردار"
              {...formik.getFieldProps("fullName")}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={{ base: 2, lg: 1 }}>
          <FormControl isRequired>
            <FormLabel fontWeight="bold">شماره تلفـن</FormLabel>
            <SelectCustom
              {...formik.getFieldProps("mobileNumber")}
              isMulti
              // options={getAllColors?.Data.content}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={{ base: 2, lg: 1 }}>
          <FormControl isRequired>
            <FormLabel fontWeight="bold">آدرس</FormLabel>
            <Textarea
              h="170px"
              variant="filled"
              _placeholder={{ color: "text-primary" }}
              placeholder="آدرس را وارد کنید ..."
              {...formik.getFieldProps("address")}
            />
          </FormControl>
        </GridItem>
      </Grid>
      <Stack direction="row" spacing={2} mt={6} w="full" justify="end">
        <Button
          w={140}
          variant="outline"
          onClick={() => {
            navigate("/app/stores");
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

export default AddStore;
