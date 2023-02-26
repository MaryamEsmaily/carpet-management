import React from "react";
import { Box, Button, Divider, Stack, Text } from "@chakra-ui/react";
import CubeIcon from "components/icon/CubeIcon";
import Product from "../Product";
import uuid from "react-uuid";
//
function ProductsInfo({ formik }) {
  //
  const handleAddNewProduct = () => {
    formik.setFieldValue("products", [
      ...formik.values.products,
      {
        id: uuid(),
        code: "",
        sizes: [],
        colors: [],
        isGraded: "",
        count: "",
      },
    ]);
  };
  //
  return (
    <Box mt={8} borderRadius={24} bg="layout-over" p={10} as="form">
      <Stack direction="row" align="center">
        <CubeIcon boxSize={5} />
        <Text fontWeight="bold">محصولات</Text>
      </Stack>
      <Divider my={8} />
      {formik.values.products?.map((_, index) => (
        <Product index={index} formik={formik} />
      ))}

      <Divider variant="dashed" my={8} />
      <Box textAlign="end">
        <Button onClick={handleAddNewProduct}>افـزودن محصول</Button>
      </Box>
    </Box>
  );
}

export default ProductsInfo;
