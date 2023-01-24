import React, { useRef, useState } from "react";
import {
  Button,
  Divider,
  IconButton,
  Input,
  InputGroup,
  Stack,
  Text,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Box,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  InputRightElement,
} from "@chakra-ui/react";
import FilterIcon from "components/icon/FilterIcon";
import SearchIcon from "components/icon/SearchIcon";
import CloseIcon from "components/icon/CloseIcon";
import AddNewOrderIcon from "components/icon/AddNewOrderIcon";
import ColorFilterIcon from "components/icon/ColorFilterIcon";
import EraserIcon from "components/icon/EraserIcon";
import OptionsOutsideSelect from "components/custom/OptionsOutsideSelect";
import AllProducts from "../AllProducts";
import { useFormik } from "formik";
import { useGetAllColors } from "hook/api/useProductManagementApi";
import { getAllColors } from "data/getAllColors";
import { getAllSizes } from "data/getAllSizes";
import { useTranslation } from "react-i18next";

const initialValues = {
  code: "",
  colors: [],
  sizes: [],
};

function ProductsSection() {
  //
  const { t } = useTranslation();
  //
  const [searchInput, setSearchInput] = useState("");
  const [status, setStatus] = useState("2");
  const [filterValues, setFilterValues] = useState();
  //
  const { isOpen, onOpen, onClose } = useDisclosure();
  // API
  // const getAllColors = useGetAllColors();
  // const getAllSizes = useGetAllSizes();
  //
  const btnRef = useRef();
  //
  const handleSubmit = (values) => {
    setFilterValues({
      ...values,
      colors: values.colors.map((color) => color.value),
      sizes: values.sizes.map((color) => color.value),
    });
  };
  //
  const formik = useFormik({
    onSubmit: handleSubmit,
    initialValues: initialValues,
  });
  //
  return (
    <>
      <Stack
        borderRadius={14}
        direction="row"
        spacing={6}
        py={4}
        px={5}
        mt={8}
        bg="layout-over"
        align="center"
      >
        <InputGroup>
          <Input
            // "جستجو .."
            placeholder={t("10")}
            w="full"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <InputRightElement
            sx={{
              right: 0,
              left: "unset",
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
        <Divider orientation="vertical" height="40px" variant="dashed" />

        <RadioGroup onChange={setStatus} value={status}>
          <Stack direction="row" spacing={8}>
            <Radio defaultChecked value="2">
              {/* همـه */}
              {t("11")}
            </Radio>
            <Radio value="1">
              {/* فعـال */}
              {t("12")}
            </Radio>
            <Radio value="0">
              {/*غ یـرفعـال*/}
              {t("13")}
            </Radio>
          </Stack>
        </RadioGroup>
      </Stack>
      {/*  */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <Box h="full" as="form" onSubmit={formik.handleSubmit}>
          <DrawerContent py={5} px={1} sx={{ borderRadius: "38px" }}>
            <DrawerHeader
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              fontSize={16}
            >
              <Stack direction="row" spacing={2} alignItems="center">
                <FilterIcon />
                <Text>
                  {/* فیلتــر هــا */}
                  {t("14")}
                </Text>
              </Stack>
              <IconButton
                icon={
                  <CloseIcon fill="none" color="text-secondary" boxSize={5} />
                }
                variant="unstyled"
                onClick={onClose}
              />
            </DrawerHeader>
            <DrawerBody>
              <Divider mb={6} mt={2} />

              <FormControl>
                <FormLabel>
                  <Stack direction="row" spacing={2} align="center">
                    <AddNewOrderIcon fill="none" boxSize={4} />
                    <Text fontSize={14} fontWeight="bold">
                      {/* براساس کد طـرح : */}
                      {t("15")} :
                    </Text>
                  </Stack>
                </FormLabel>
                <InputGroup mt={3}>
                  <Input
                    _placeholder={{ color: "text-primary", fontSize: 16 }}
                    // "بر اساس کد طـرح"
                    placeholder={t("15")}
                    variant="filled"
                    {...formik.getFieldProps("code")}
                  />
                  <InputRightElement
                    sx={{
                      right: 0,
                      left: "unset",
                    }}
                    pointerEvents="none"
                  >
                    <SearchIcon fill="none" boxSize={5} />
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <FormControl mt={10}>
                <FormLabel>
                  <Stack direction="row" spacing={2} align="center" mb={3}>
                    <ColorFilterIcon fill="none" boxSize={4} />
                    <Text fontSize={14} fontWeight="bold">
                      {/* براساس رنـگ */}
                      {t("16")} :
                    </Text>
                  </Stack>
                </FormLabel>
                <OptionsOutsideSelect
                  formik={formik}
                  //  براساس رنـگ :
                  placeholder={t("16")}
                  isMulti
                  options={getAllColors?.Data.content}
                  {...formik.getFieldProps("colors")}
                />
              </FormControl>

              <FormControl mt={10}>
                <FormLabel>
                  <Stack direction="row" spacing={2} align="center" mb={3}>
                    <EraserIcon fill="none" boxSize={4} />
                    <Text fontSize={14} fontWeight="bold">
                      {/* براساس سایـز : */}
                      {t("17")}
                    </Text>
                  </Stack>
                </FormLabel>
                <OptionsOutsideSelect
                  formik={formik}
                  //  "بر اساس سایـز"
                  placeholder={t("17")}
                  isMulti
                  options={getAllSizes?.Data.content}
                  {...formik.getFieldProps("sizes")}
                />
              </FormControl>
            </DrawerBody>
            <DrawerFooter gap={2}>
              <Button w="full" variant="outline" onClick={formik.resetForm}>
                {/* حـذف فیلتـر هـا */}
                {t("18")}
              </Button>
              <Button w="full" type="submit">
                {/* اعمـال فیلتـر هـا */}
                {t("19")}
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Box>
      </Drawer>
      {/*  */}
      <AllProducts
        filterValues={filterValues}
        searchInput={searchInput}
        status={status}
      />
    </>
  );
}

export default ProductsSection;
