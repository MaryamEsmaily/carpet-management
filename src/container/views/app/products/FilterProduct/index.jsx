import React, { useRef } from "react";
import {
  Button,
  Checkbox,
  Divider,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Switch,
  Text,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Box,
} from "@chakra-ui/react";

import FilterIcon from "components/icon/FilterIcon";
import SearchIcon from "components/icon/SearchIcon";
import CloseIcon from "components/icon/CloseIcon";
import AddNewOrderIcon from "components/icon/AddNewOrderIcon";
import ColorFilterIcon from "components/icon/ColorFilterIcon";
import EraserIcon from "components/icon/EraserIcon";

function FilterProduct() {
  //
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  //
  return (
    <>
      <Stack
        borderRadius={14}
        direction="row"
        spacing={6}
        py={3}
        px={4}
        mt={8}
        bg="layout-over"
      >
        <InputGroup>
          <Input placeholder="جستجو .." w="full" />
          <InputRightElement
            sx={{
              left: 0,
              right: "unset",
            }}
            pointerEvents="none"
          >
            <SearchIcon fill="none" boxSize={5} />
          </InputRightElement>
        </InputGroup>

        <IconButton
          ref={btnRef}
          onClick={onOpen}
          width={88}
          icon={<FilterIcon />}
          variant="outline"
          colorScheme="gray"
        />
        <Checkbox>همه</Checkbox>
        <Divider orientation="vertical" height="40px" variant="dashed" />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
        >
          <Text whiteSpace="nowrap">غیر فعال</Text>
          <Switch />
          <Text>فعال</Text>
        </Stack>
      </Stack>
      {/*  */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent py={5} px={1} sx={{ borderRadius: "38px" }}>
          <DrawerHeader
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            fontSize={16}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <FilterIcon />
              <Text>فیلتــر هــا</Text>
            </Stack>
            <IconButton
              icon={<CloseIcon fill="none" color="black" boxSize={5} />}
              variant="unstyled"
              onClick={onClose}
            />
          </DrawerHeader>
          <DrawerBody>
            <Divider mb={6} mt={2} />
            <Box>
              <Stack direction="row" spacing={2} align="center">
                <AddNewOrderIcon fill="none" />
                <Text fontSize={14} fontWeight="bold">
                  براساس کد طـرح :
                </Text>
              </Stack>
              <InputGroup mt={3}>
                <Input
                  size="lg"
                  _placeholder={{ fontSize: 16 }}
                  placeholder="بر اساس کد طـرح"
                  variant="filled"
                />
                <InputRightElement
                  sx={{
                    left: 0,
                    right: "unset",
                  }}
                  pointerEvents="none"
                >
                  <SearchIcon fill="none" boxSize={5} />
                </InputRightElement>
              </InputGroup>
            </Box>
            {/*  */}
            <Box mt={10}>
              <Stack direction="row" spacing={2} align="center">
                <ColorFilterIcon fill="none" />
                <Text fontSize={14} fontWeight="bold">
                  براساس رنـگ :
                </Text>
              </Stack>
              <InputGroup mt={3}>
                <Input
                  size="lg"
                  _placeholder={{ fontSize: 16 }}
                  placeholder="بر اساس رنـگ"
                  variant="filled"
                />
                <InputRightElement
                  sx={{
                    left: 0,
                    right: "unset",
                  }}
                  pointerEvents="none"
                >
                  <SearchIcon fill="none" boxSize={5} />
                </InputRightElement>
              </InputGroup>
            </Box>
            <Box mt={10}>
              <Stack direction="row" spacing={2} align="center">
                <EraserIcon fill="none" />
                <Text fontSize={14} fontWeight="bold">
                  براساس سایـز :
                </Text>
              </Stack>
              <InputGroup mt={3}>
                <Input
                  size="lg"
                  _placeholder={{ fontSize: 16 }}
                  placeholder="بر اساس سایـز"
                  variant="filled"
                />
                <InputRightElement
                  sx={{
                    left: 0,
                    right: "unset",
                  }}
                  pointerEvents="none"
                >
                  <SearchIcon fill="none" boxSize={5} />
                </InputRightElement>
              </InputGroup>
            </Box>
          </DrawerBody>

          <DrawerFooter justifyContent="space-between" gap={2}>
            <Button borderRadius={12} w="full" variant="outline">
              حـذف فیلتـر هـا
            </Button>
            <Button borderRadius={12} w="full">
              اعمـال فیلتـر هـا
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default FilterProduct;
