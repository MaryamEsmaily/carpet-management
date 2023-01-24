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
import ProductDetails from "container/views/app/products/ProductDetails";

function ProductDetailsPage() {
  return (
    <Box>
      <Stack direction="row" alignItems="center" spacing={2}>
        <BasketIcon boxSize={5} />
        <Text fontWeight="bold" fontSize={20}>
          جزئیـات محصول
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
          <BreadcrumbLink href="#">جزئیـات محصول</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <ProductDetails />
    </Box>
  );
}

export default ProductDetailsPage;
