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
import Uploader from "components/Uploader";
import { useFormik } from "formik";
import { getAllSizes } from "data/getAllSizes";
import { getAllColors } from "data/getAllColors";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetAllColors,
  useGetAllSizes,
  usePostProductDetails,
  usePutProduct,
} from "hook/api/useProductManagementApi";
import useToast from "hook/useToast";
import filePreparation from "utils/filePreparation";
//
import firstProduct from "assets/images/product-1.avif";
import secondProduct from "assets/images/product-2.avif";
import thirdProduct from "assets/images/product-3.avif";
import forthProduct from "assets/images/product-4.avif";
import getInitialValuesFormik from "utils/getInitialValuesFormik";
import { postProductDetailsData } from "data/postProductDetailsData";
import Input from "components/custom/Input";
//
const initialValues = {
  title: "",
  sizes: [],
  description: "",
  code: "",
  colors: [],
  images: [firstProduct, secondProduct, thirdProduct, forthProduct],
};
//
function EditProduct() {
  //
  const navigate = useNavigate();
  //
  const toast = useToast();
  //
  const putProduct = usePutProduct();
  //
  // API
  // const getAllColors = useGetAllColors();
  // const getAllSizes = useGetAllSizes();
  //
  // const { id } = useParams();
  // const { data : productDetails} = usePostProductDetails({ id });
  // const memoizedInitialValues = useMemo(
  //   () =>
  //     getInitialValuesFormik({
  //       data: productDetails?.content,
  //       initialValues,
  //     }),
  //   [productDetails?.content]
  // );

  // MOCK
  const memoizedInitialValues = useMemo(
    () =>
      getInitialValuesFormik({
        data: postProductDetailsData?.Data?.content,
        initialValues,
      }),
    []
  );
  //
  const handleSubmit = (values) => {
    putProduct.mutate(
      {
        ...values,
        images: filePreparation(values?.images),
        colors: values.colors.map((color) => color.value),
        sizes: values.sizes.map((size) => size.value),
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
            <FormLabel fontWeight="bold">نـام محصول </FormLabel>
            <Input
              variant="filled"
              _placeholder={{ color: "text-primary" }}
              placeholder="نـام محصول"
              {...formik.getFieldProps("title")}
            />
          </FormControl>
          <FormControl mt={10} isRequired>
            <FormLabel fontWeight="bold">سایز بندی </FormLabel>
            <SelectCustom
              {...formik.getFieldProps("sizes")}
              isMulti
              options={getAllSizes?.Data.content}
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
            <FormLabel fontWeight="bold">کـد طرح </FormLabel>
            <Input
              variant="filled"
              _placeholder={{ color: "text-primary" }}
              placeholder="کـد طرح "
              {...formik.getFieldProps("code")}
            />
          </FormControl>
          <FormControl mt={10} isRequired>
            <FormLabel fontWeight="bold">رنگ بندی </FormLabel>
            <SelectCustom
              {...formik.getFieldProps("colors")}
              isMulti
              options={getAllColors?.Data.content}
            />
          </FormControl>
          <FormControl mt={10} isRequired>
            <FormLabel fontWeight="bold">افزودن عکس </FormLabel>
            <Uploader multiple={true} {...formik.getFieldProps("images")} />
          </FormControl>
        </GridItem>
      </Grid>
      <Stack direction="row" spacing={2} mt={6} w="full" justify="end">
        <Button
          w={140}
          variant="outline"
          onClick={() => {
            navigate("/app/products");
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

export default EditProduct;
