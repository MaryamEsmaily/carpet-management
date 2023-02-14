import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import StoreIcon from "components/icon/StoreIcon";
import OrdersSection from "container/views/app/orders/OrdersSection";

function OrdersPage() {
  return (
    <Box>
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Stack direction="row" alignItems="center" spacing={2}>
            <StoreIcon boxSize={5} />
            <Text fontWeight="bold" fontSize={20}>
              سفـارشـات
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
              <BreadcrumbLink href="/">داشبورد</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink isCurrentPage={true}>سفـارشـات</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
      </Flex>
      <OrdersSection />
    </Box>
  );
}

export default OrdersPage;
