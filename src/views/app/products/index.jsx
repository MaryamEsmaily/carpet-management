import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import BasketIcon from "components/icon/BasketIcon";
import FilterProduct from "container/views/app/products/FilterProduct";
import AllProducts from "container/views/app/products/AllProducts";
import { Link } from "react-router-dom";

function ProductsPage() {
  return (
    <Box>
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Stack direction="row" alignItems="center" spacing={2}>
            <BasketIcon boxSize={5} />
            <Text fontWeight="bold" fontSize={20}>
              محصولات
            </Text>
          </Stack>
          <Breadcrumb
            mt={3}
            color="text-primary"
            fontSize={18}
            separator={<Box width={1} height={1} bg="text-primary" />}
          >
            <BreadcrumbItem>
              <Box width={1} height={1} ml={2} bg="text-primary" />
              <BreadcrumbLink href="#">داشبورد</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">محصـولات</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Link to="add-product">
          <Button>افـزودن محصول</Button>
        </Link>
      </Flex>
      <FilterProduct />
      <AllProducts />
    </Box>
  );
}

export default ProductsPage;
