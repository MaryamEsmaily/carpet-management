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
import { Link } from "react-router-dom";
import ProductsSection from "container/views/app/products/ProductsSection";
import { useTranslation } from "react-i18next";

function ProductsPage() {
  const { t } = useTranslation();
  return (
    <Box>
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Stack direction="row" alignItems="center" spacing={2}>
            <BasketIcon boxSize={5} />
            <Text fontWeight="bold" fontSize={20}>
              {/* محصولات */}
              {t("7")}
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
              <BreadcrumbLink href="/">
                {/* داشبورد */}
                {t("8")}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink isCurrentPage={true}>
                {/* محصـولات */}
                {t("7")}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Link to="add-product">
          <Button>
            {/* افـزودن محصول */}
            {t("9")}
          </Button>
        </Link>
      </Flex>
      <ProductsSection />
    </Box>
  );
}

export default ProductsPage;
