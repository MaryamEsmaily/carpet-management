import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Stack,
  Text,
} from "@chakra-ui/react";
import BuyerIcon from "components/icon/BuyerIcon";
import AddBuyer from "container/views/app/buyers/AddBuyer";

function AddBuyerPage() {
  return (
    <Box>
      <Stack direction="row" alignItems="center" spacing={2}>
        <BuyerIcon boxSize={5} />
        <Text fontWeight="bold" fontSize={20}>
          افزودن متعـامـل
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
          <BreadcrumbLink href="#">افزودن متعـامـل</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <AddBuyer />
    </Box>
  );
}

export default AddBuyerPage;
