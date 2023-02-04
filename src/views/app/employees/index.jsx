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
import BasketIcon from "components/icon/BasketIcon";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import EmployeesSection from "container/views/app/employees/EmployeesSection";

function EmployeesPage() {
  const { t } = useTranslation();
  return (
    <Box>
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Stack direction="row" alignItems="center" spacing={2}>
            <BasketIcon boxSize={5} />
            <Text fontWeight="bold" fontSize={20}>
              پـرسنــل
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
              <BreadcrumbLink href="/">
                {/* داشبورد */}
                {t("8")}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink isCurrentPage={true}>پـرسنــل</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Link to="add-employee">
          <Button>افـزودن پـرسنــل</Button>
        </Link>
      </Flex>
      <EmployeesSection />
    </Box>
  );
}

export default EmployeesPage;
