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
import SizeIcon from "components/icon/SizeIcon";
import FilterSize from "container/views/app/products/FilterSize";
import AllSizes from "container/views/app/products/AllSizes";

function SizesPage() {
  return (
    <Box>
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Stack direction="row" alignItems="center" spacing={2}>
            <SizeIcon boxSize={6} />
            <Text fontWeight="bold" fontSize={20}>
              سایـز هـا
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
              <BreadcrumbLink href="/app/products">داشبورد</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">سایـز هـا </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Button>افـزودن سایـز</Button>
      </Flex>
      <FilterSize />
      <AllSizes />
    </Box>
  );
}

export default SizesPage;
