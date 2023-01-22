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
import useModal from "hook/useModal";
import ModalAddSize from "components/modal/ModalAddSize";
import SizeSection from "container/views/app/products/SizeSection";

function SizesPage() {
  const { toggle, config } = useModal();
  //
  return (
    <>
      <ModalAddSize config={config} />
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
        <Button onClick={toggle}>افـزودن سایـز</Button>
      </Flex>
      <SizeSection />
    </>
  );
}

export default SizesPage;
