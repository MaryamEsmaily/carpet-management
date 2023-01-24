import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Stack,
  Text,
} from "@chakra-ui/react";
import BasketIcon from "components/icon/BasketIcon";
import AddProduct from "container/views/app/products/AddProduct";

function AddProductPage() {
  return (
    <Box>
      <Stack direction="row" alignItems="center" spacing={2}>
        <BasketIcon boxSize={5} />
        <Text fontWeight="bold" fontSize={20}>
          افـزودن محصول
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
          <BreadcrumbLink href="#">افزودن محصول</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <AddProduct />
    </Box>
  );
}

export default AddProductPage;
