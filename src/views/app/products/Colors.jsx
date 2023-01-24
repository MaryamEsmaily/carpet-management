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
import ColorIcon from "components/icon/ColorIcon";
import useModal from "hook/useModal";
import ModalAddColor from "components/modal/ModalAddColor";
import ColorSection from "container/views/app/products/ColorSection";

function ColorsPage() {
  const { toggle, config } = useModal();
  //
  return (
    <>
      <ModalAddColor config={config} />
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
              <Box width={1} height={1} mr={2} bg="text-primary" />
              <BreadcrumbLink href="/app/products">داشبورد</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">رنـگ هـا </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Button onClick={toggle}>افـزودن رنـگ</Button>
      </Flex>
      <ColorSection />
    </>
  );
}

export default ColorsPage;
