import React, { useMemo } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import useToast from "hook/useToast";
import getInitialValuesFormik from "utils/getInitialValuesFormik";
import Input from "components/custom/Input";
import { usePostBuyerDetails, usePutBuyer } from "hook/api/useBuyersApi";
import { postBuyerDetailsData } from "data/postBuyerDetailsData";
//
const initialValues = {
  fullName: "",
  email: "",
  description: "",
  mobileNumbers: [],
  address: "",
};
//
function EditBuyer() {
  //
  const navigate = useNavigate();
  //
  const toast = useToast();
  //
  const putBuyer = usePutBuyer();
  //
  // API
  //
  // const { id } = useParams();
  // const { data : buyerDetails} = usePostBuyerDetails({ id });
  // const memoizedInitialValues = useMemo(
  //   () =>
  //     getInitialValuesFormik({
  //       data: buyerDetails?.content,
  //       initialValues,
  //     }),
  //   [buyerDetails?.content]
  // );

  // MOCK
  const memoizedInitialValues = useMemo(
    () =>
      getInitialValuesFormik({
        data: postBuyerDetailsData?.Data?.content,
        initialValues,
      }),
    []
  );
  //
  const handleSubmit = (values) => {
    putBuyer.mutate(
      {
        ...values,
        mobileNumbers: values.mobileNumbers.map((size) => size.value),
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

  const formik = useFormik({
    onSubmit: handleSubmit,
    initialValues: memoizedInitialValues,
    enableReinitialize: true,
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
        <GridItem colSpan={1}>
          <FormControl isRequired>
            <FormLabel fontWeight="bold">نام و نام خانوادگـی </FormLabel>
            <Input
              variant="filled"
              _placeholder={{ color: "text-primary" }}
              placeholder="نام و نام خانوادگـی"
              {...formik.getFieldProps("fullName")}
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
        <GridItem colSpan={1}>
          <FormControl isRequired>
            <FormLabel fontWeight="bold">شماره همـراه </FormLabel>
            <SelectCustom
              {...formik.getFieldProps("mobileNumbers")}
              isMulti
              // options={getAllColors?.Data.content}
            />
          </FormControl>
          <FormControl mt={10} isRequired>
            <FormLabel fontWeight="bold">آدرس </FormLabel>
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
            navigate("/app/buyers");
            formik.resetForm();
          }}
        >
          انصراف
        </Button>
        <Button w={140} type="submit">
          ویرایش اطلاعات
        </Button>
      </Stack>
    </Box>
  );
}

export default EditBuyer;
