import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import SelectCustom from "components/custom/SelectCustom";
import Uploader from "components/Uploader";
import { useFormik } from "formik";
import { getAllSizes } from "data/getAllSizes";
import { getAllColors } from "data/getAllColors";
import { useNavigate } from "react-router-dom";
import { usePostAddProduct } from "hook/api/useProductManagementApi";
import useToast from "hook/useToast";
import filePreparation from "utils/filePreparation";
//
import firstProduct from "assets/images/product-1.avif";
import secondProduct from "assets/images/product-2.avif";
import thirdProduct from "assets/images/product-3.avif";
import forthProduct from "assets/images/product-4.avif";
//
const initialValues = {
  productName: "",
  sizes: [],
  description: "",
  code: "",
  colors: [],
  images: [firstProduct, secondProduct, thirdProduct, forthProduct],
};
//
function AddProduct() {
  //
  const navigate = useNavigate();
  //
  const toast = useToast();
  //
  // API
  // const getAllColors = useGetAllColors();
  // const getAllSizes = useGetAllSizes();
  //
  const postAddProduct = usePostAddProduct();
  //
  const handleSubmit = (values) => {
    postAddProduct.mutate(
      {
        ...values,
        images: filePreparation(values?.images),
        colors: values.colors.map((color) => color.value),
        sizes: values.sizes.map((color) => color.value),
      },
      {
        onSuccess: (res) => {
          toast.success({ res });
        },
        onError: (err) => {
          toast.error({ err });
          formik.resetForm();
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
        <GridItem colSpan={1}>
          <FormControl isRequired>
            <FormLabel fontWeight="bold">نـام محصول </FormLabel>
            <Input
              variant="filled"
              _placeholder={{ color: "text-primary" }}
              placeholder="نـام محصول"
              {...formik.getFieldProps("productName")}
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
            <Uploader
              multiple={true}
              label="پیوست فایل"
              {...formik.getFieldProps("images")}
            />
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
          ثبت اطلاعات
        </Button>
      </Stack>
    </Box>
  );
}

export default AddProduct;
