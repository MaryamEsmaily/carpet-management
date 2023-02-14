import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Divider,
  Stack,
  Text,
} from "@chakra-ui/react";
import BasketIcon from "components/icon/BasketIcon";
import BannerSection from "container/views/app/orders/BannerSection";
import OrderInfo from "container/views/app/orders/OrderInfo";
import OrderItems from "container/views/app/orders/OrderItems";
import { usePostOrderDetails } from "hook/api/useOrdersApi";
import { useParams } from "react-router-dom";
import { postOrderDetails } from "data/postOrderDetails";

function OrderDetailsPage() {
  // API
  // const { id } = useParams();
  // const { data: orderDetails } = usePostOrderDetails({
  //   id,
  // });
  // const data = React.useMemo(() => orderDetails?.Data?.content, []);

  // MOCK
  const data = React.useMemo(() => postOrderDetails?.Data?.content, []);
  //
  return (
    <Box>
      <Stack direction="row" alignItems="center" spacing={2}>
        <BasketIcon boxSize={5} />
        <Text fontWeight="bold" fontSize={20}>
          جزئیـات سفـارش
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
          <BreadcrumbLink href="#">جزئیـات سفـارش</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Box mt={8}>
        <BannerSection data={data} />
        <Divider variant="dashed" my={6} size="100" />
        <OrderInfo data={data} />
        <Divider variant="dashed" my={6} />
        <OrderItems />
      </Box>
    </Box>
  );
}

export default OrderDetailsPage;
