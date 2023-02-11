import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Stack,
  Text,
} from "@chakra-ui/react";
import StoreIcon from "components/icon/StoreIcon";
import AddStore from "container/views/app/store/AddStore";

function AddStorePage() {
  return (
    <Box>
      <Stack direction="row" alignItems="center" spacing={2}>
        <StoreIcon boxSize={5} />
        <Text fontWeight="bold" fontSize={20}>
          افزودن انبـار
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
          <BreadcrumbLink href="#">افزودن انبـار </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <AddStore />
    </Box>
  );
}

export default AddStorePage;