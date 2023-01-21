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
import { useFormik } from "formik";
import React, { useState } from "react";
//
const initialValues = {
  productName: "",
  sizes: [],
  description: "",
  code: "",
  colors: [],
  images: [],
};
//
function AddProduct() {
  //
  const handleSubmit = () => {};

  //
  const formik = useFormik({
    onSubmit: handleSubmit,
    initialValues: initialValues,
  });
  // multi selects stuff
  const options = [
    { value: "1", label: "Wheat Gluten" },
    { value: "2", label: "Rye Gluten" },
  ];
  const [selected, setSelected] = useState([]);
  const handleSelectChange = (values) => {
    setSelected(values);
  };
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
              onChange={handleSelectChange}
              isMulti
              options={options}
              value={selected}
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
            <Input variant="filled" {...formik.getFieldProps("colors")} />
          </FormControl>
          <FormControl mt={10} isRequired>
            <FormLabel fontWeight="bold">افزودن عکس </FormLabel>
            <Textarea
              h="170px"
              variant="filled"
              _placeholder={{ color: "text-primary" }}
              placeholder="پیوست فـایـل"
              {...formik.getFieldProps("images")}
            />
            <Input variant="filled" {...formik.getFieldProps("images")} />
          </FormControl>
        </GridItem>
      </Grid>
      <Stack direction="row" spacing={2} mt={6} w="full" justify="end">
        <Button w={140} variant="outline">
          انصراف
        </Button>
        <Button w={140}>ثبت اطلاعات</Button>
      </Stack>
    </Box>
  );
}

export default AddProduct;
