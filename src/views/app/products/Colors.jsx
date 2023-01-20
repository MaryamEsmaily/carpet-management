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
import FilterColor from "container/views/app/products/FilterColor";
import ColorIcon from "components/icon/ColorIcon";
import AllColors from "container/views/app/products/AllColors";

function ColorsPage() {
  return (
    <Box>
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Stack direction="row" alignItems="center" spacing={2}>
            <ColorIcon boxSize={6} />
            <Text fontWeight="bold" fontSize={20}>
              رنـگ هـا
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
              <BreadcrumbLink href="#">رنـگ هـا </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Button>افـزودن رنـگ</Button>
      </Flex>
      <FilterColor />
      <AllColors />
    </Box>
  );
}

export default ColorsPage;
