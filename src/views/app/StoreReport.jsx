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
import StoreReportsSection from "container/views/app/storeReport/StoreReportsSection";
import StoreIcon from "components/icon/StoreIcon";

function StoreReportPage() {
  return (
    <Box>
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Stack direction="row" alignItems="center" spacing={2}>
            <StoreIcon boxSize={5} />
            <Text fontWeight="bold" fontSize={20}>
              گـزارش گیـری از انبـار
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
                گـزارش گیـری از انبـار
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
      </Flex>
      <StoreReportsSection />
    </Box>
  );
}

export default StoreReportPage;
