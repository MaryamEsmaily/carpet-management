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
import { Link } from "react-router-dom";
import BuyersSection from "container/views/app/buyers/BuyersSection";
import BuyerIcon from "components/icon/BuyerIcon";

function BuyersPage() {
  return (
    <Box>
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Stack direction="row" alignItems="center" spacing={2}>
            <BuyerIcon color="text-secondary" boxSize={5} />
            <Text fontWeight="bold" fontSize={20}>
              متعاملان
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
              <BreadcrumbLink isCurrentPage={true}>متعاملان</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Link to="add-buyer">
          <Button>افـزودن متعامـل</Button>
        </Link>
      </Flex>
      <BuyersSection />
    </Box>
  );
}

export default BuyersPage;
