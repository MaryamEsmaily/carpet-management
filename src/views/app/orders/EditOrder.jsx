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
import CurrentOrderStatus from "container/views/app/orders/CurrentOrderStatus";
import AddChangeToOrder from "container/views/app/orders/AddChangeToOrder";

function EditOrderPage() {
  //
  return (
    <Box>
      <Stack direction="row" alignItems="center" spacing={2}>
        <BasketIcon boxSize={5} />
        <Text fontWeight="bold" fontSize={20}>
          ایجــاد تغییـرات
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
          <BreadcrumbLink href="#">ایجــاد تغییـرات</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <CurrentOrderStatus />
      <AddChangeToOrder />
    </Box>
  );
}

export default EditOrderPage;
