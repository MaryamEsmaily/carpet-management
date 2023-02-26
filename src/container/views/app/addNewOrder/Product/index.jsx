import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  IconButton,
  Stack,
  Switch,
  Text,
} from "@chakra-ui/react";
import Input from "components/custom/Input";
import DeleteIcon from "components/icon/DeleteIcon";
import StoreIcon from "components/icon/StoreIcon";
//
function Product({ index, formik }) {
  //
  const handleDelete = (id) => {
    formik.setFieldValue(
      "products",
      formik.values.products.filter((item) => id !== item.id)
    );
  };
  //
  return (
    <Box mt={4}>
      <Grid
        as="form"
        templateColumns="repeat(14,minmax(0,1fr))"
        alignItems="end"
        gap={5}
      >
        <GridItem colSpan={{ base: 14, md: 7, xl: 2 }}>
          <FormControl isRequired>
            <FormLabel fontSize="sm" fontWeight="bold">
              کد طرح
            </FormLabel>
            <Input
              variant="filled"
              {...formik.getFieldProps(`products.${[index]}.code`)}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={{ base: 14, md: 7, xl: 3 }}>
          <FormControl isRequired>
            <FormLabel fontSize="sm" fontWeight="bold">
              سایز بندی
            </FormLabel>
            <Input
              variant="filled"
              {...formik.getFieldProps(`products.${[index]}.sizes`)}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={{ base: 14, md: 7, xl: 3 }}>
          <FormControl isRequired>
            <FormLabel fontSize="sm" fontWeight="bold">
              رنگ بندی
            </FormLabel>
            <Input
              variant="filled"
              {...formik.getFieldProps(`products.${[index]}.colors`)}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={{ base: 14, md: 7, xl: 3 }}>
          <FormControl isRequired>
            <FormLabel fontSize="sm" fontWeight="bold">
              فـرش درجـه دار
            </FormLabel>
            <Stack
              direction="row"
              height="50px"
              borderRadius="lg"
              justifyContent="space-around"
              align="center"
              bg="layout-main"
            >
              <Text>درجه دار</Text>
              <Switch />
            </Stack>
          </FormControl>
        </GridItem>
        <GridItem
          colSpan={{
            base: 14,
            md: 7,
            xl: formik.values.products.length > 1 ? 2 : 3,
          }}
        >
          <FormControl isRequired>
            <FormLabel fontSize="sm" fontWeight="bold">
              تعداد
            </FormLabel>
            <Input
              variant="filled"
              {...formik.getFieldProps(`products.${[index]}.count`)}
            />
          </FormControl>
        </GridItem>
        {formik.values.products.length > 1 ? (
          <GridItem colSpan={{ base: 14, md: 7, xl: 1 }}>
            <IconButton
              onClick={() => handleDelete(formik.values.products?.[index]?.id)}
              rounded="lg"
              height="50px"
              colorScheme="red"
              background="layout-main"
              width="full"
              icon={<DeleteIcon fill="red" color="red" boxSize={5} />}
            />
          </GridItem>
        ) : null}
      </Grid>
      <Stack direction="row" alignItems="center" mt={4}>
        <Stack direction="row" alignItems="center">
          <StoreIcon boxSize={5} color="text-primary" />
          <Text fontSize="sm" color="text-primary">
            موجودی درجه دار :
          </Text>
        </Stack>
        <Text>۱۲ عـدد</Text>
      </Stack>
    </Box>
  );
}

export default Product;
