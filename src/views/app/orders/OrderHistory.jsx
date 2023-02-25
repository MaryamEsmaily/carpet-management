import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Grid,
  GridItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import Pagination from "components/Pagination";
import React, { useState } from "react";
import StoreIcon from "components/icon/StoreIcon";
import { postOrderHistory } from "data/postOrderHistory";
import { useParams } from "react-router-dom";
import { usePostOrderHistory } from "hook/api/useOrdersApi";

function OrderHistoryPage() {
  // for pagination
  const pageNumberOptions = [
    { value: 8, label: "8" },
    { value: 16, label: "16" },
    { value: 32, label: "32" },
  ];

  const [pageSize, setPageSize] = useState(pageNumberOptions?.[0].value);
  const [pageNumber, setPageNumber] = useState(1);
  //
  // API
  // const { id } = useParams();
  // const { data: orderHistory } = usePostOrderHistory({
  //   id,
  // });
  // const data = React.useMemo(() => orderHistory?.Data?.content, []);

  // MOCK
  const data = React.useMemo(() => postOrderHistory?.Data?.content, []);
  const totalCount = postOrderHistory?.Data?.totalCount;
  //
  return (
    <Box fontSize="sm">
      <Stack direction="row" alignItems="center" spacing={2}>
        <StoreIcon boxSize={5} />
        <Text fontWeight="bold" fontSize={20}>
          تاریخچــه تغییرات سفـارش
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
          <BreadcrumbLink isCurrentPage={true}>
            تاریخچــه تغییرات سفـارش{" "}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Grid mt={8} templateColumns="repeat(1,minmax(0,1fr))" gap={7}>
        {data?.map((OrderItem, index) => (
          <GridItem key={OrderItem.id} colSpan={1}>
            <Stack
              borderRadius={14}
              px={10}
              py={6}
              bg={index % 2 === 0 ? "layout" : "layout-over"}
              textAlign="center"
            >
              <Text color="text-primary">
                در تاریـخ{" "}
                <Text as="span" fontWeight="bolder" color="text-secondary">
                  {OrderItem?.changeDate}
                </Text>{" "}
                ,{" "}
                <Text as="span" fontWeight="bolder" color="text-secondary">
                  {OrderItem?.author}
                </Text>{" "}
                , تعـداد{" "}
                <Text as="span" fontWeight="bolder" color="text-secondary">
                  {OrderItem?.count}{" "}
                </Text>
                عـدد را از وضعیـت در{" "}
                <Text as="span" fontWeight="bolder" color="text-secondary">
                  {OrderItem?.situation}
                </Text>{" "}
                به وضعیـت{" "}
                <Text as="span" fontWeight="bolder" color="text-secondary">
                  {OrderItem?.status}
                </Text>{" "}
                تغییـر داد.
              </Text>
            </Stack>
          </GridItem>
        ))}
      </Grid>
      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        pageSize={pageSize}
        setPageSize={setPageSize}
        totalCount={totalCount}
        pageNumberOptions={pageNumberOptions}
      />
    </Box>
  );
}

export default OrderHistoryPage;
