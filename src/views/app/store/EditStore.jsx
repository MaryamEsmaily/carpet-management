import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Stack,
  Text,
} from "@chakra-ui/react";
import EditFillIcon from "components/icon/EditFillIcon";
import EditStore from "container/views/app/store/EditStore";

function EditStorePage() {
  return (
    <Box>
      <Stack direction="row" alignItems="center" spacing={2}>
        <EditFillIcon boxSize={5} />
        <Text fontWeight="bold" fontSize={20}>
          ویـرایش انبـار
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
          <BreadcrumbLink href="#">ویرایش انبـار</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <EditStore />
    </Box>
  );
}

export default EditStorePage;
