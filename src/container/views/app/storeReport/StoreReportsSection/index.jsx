import React, { useRef, useState } from "react";
import {
  Button,
  Divider,
  IconButton,
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
  FormControl,
  FormLabel,
  InputRightElement,
  useTheme,
} from "@chakra-ui/react";
import SearchIcon from "components/icon/SearchIcon";
import { useTranslation } from "react-i18next";
import Input from "components/custom/Input";
import AllStoreReports from "../AllStoreReports";
import FilterIcon from "components/icon/FilterIcon";
import { useFormik } from "formik";
import CloseIcon from "components/icon/CloseIcon";
import AddNewOrderIcon from "components/icon/AddNewOrderIcon";
import ColorFilterIcon from "components/icon/ColorFilterIcon";
import OptionsOutsideSelect from "components/custom/OptionsOutsideSelect";
import EraserIcon from "components/icon/EraserIcon";
import StoreIcon from "components/icon/StoreIcon";
import { getAllColors } from "data/getAllColors";
import { getAllSizes } from "data/getAllSizes";
import ExportIcon from "components/icon/ExportIcon";
import useModal from "hook/useModal";
import ModalExportData from "components/modal/ModalExportData";

const initialValues = {
  store: "",
  code: "",
  colors: [],
  sizes: [],
};

function StoreReportsSection() {
  //
  const { direction } = useTheme();
  //
  const { t } = useTranslation();
  //
  const { toggle, config } = useModal();
  //
  const [searchInput, setSearchInput] = useState("");
  const [filterValues, setFilterValues] = useState();
  const [filterSearch, setFilterSearch] = useState("");
  //
  const { isOpen, onOpen, onClose } = useDisclosure();
  // API
  // const getAllColors = useGetAllColors();
  // const getAllSizes = useGetAllSizes();
  //
  const btnRef = useRef();
  //
  const handleSubmitSearch = () => {
    setFilterSearch(searchInput);
  };
  //
  const handleSubmit = (values) => {
    setFilterValues({
      ...values,
      colors: values.colors.map((color) => color.value),
      sizes: values.sizes.map((size) => size.value),
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
      <ModalExportData config={config} />
      <Stack
        borderRadius={14}
        direction="row"
        spacing={4}
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
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                handleSubmitSearch();
              }
            }}
          />
          <InputRightElement
            sx={{
              right: 0,
              left: "unset",
            }}
          >
            <IconButton
              onClick={handleSubmitSearch}
              variant="unstyled"
              icon={<SearchIcon boxSize={5} />}
            />
          </InputRightElement>
        </InputGroup>
        <IconButton
          ref={btnRef}
          onClick={onOpen}
          width="60px"
          icon={<FilterIcon boxSize={5} />}
          variant="outline"
          colorScheme="gray"
        />
        <IconButton
          width="60px"
          icon={<ExportIcon boxSize={5} />}
          onClick={toggle}
        />
      </Stack>
      {/*  */}
      <Drawer
        isOpen={isOpen}
        placement={direction === "ltr" ? "left" : "right"}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <Box h="full" as="form" onSubmit={formik.handleSubmit}>
          <DrawerContent py={5} px={1}>
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
                icon={<CloseIcon color="text-secondary" boxSize={5} />}
                variant="unstyled"
                onClick={onClose}
              />
            </DrawerHeader>
            <DrawerBody>
              <Divider mb={6} mt={2} />
              <FormControl>
                <FormLabel>
                  <Stack direction="row" spacing={2} align="center">
                    <StoreIcon boxSize={4} />
                    <Text fontSize={14} fontWeight="bold">
                      براساس انبـار :
                    </Text>
                  </Stack>
                </FormLabel>
                <OptionsOutsideSelect
                  placeholder="براساس انبـار "
                  {...formik.getFieldProps("store")}
                />
              </FormControl>
              <FormControl mt={10}>
                <FormLabel>
                  <Stack direction="row" spacing={2} align="center">
                    <AddNewOrderIcon boxSize={4} />
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
                    <SearchIcon boxSize={5} />
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <FormControl mt={10}>
                <FormLabel>
                  <Stack direction="row" spacing={2} align="center" mb={3}>
                    <ColorFilterIcon boxSize={4} />
                    <Text fontSize={14} fontWeight="bold">
                      {/* براساس رنـگ */}
                      {t("16")} :
                    </Text>
                  </Stack>
                </FormLabel>
                <OptionsOutsideSelect
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
                    <EraserIcon boxSize={4} />
                    <Text fontSize={14} fontWeight="bold">
                      {/* براساس سایـز : */}
                      {t("17")}
                    </Text>
                  </Stack>
                </FormLabel>
                <OptionsOutsideSelect
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
      <AllStoreReports
        filterValues={filterValues}
        filterSearch={filterSearch}
      />
    </>
  );
}

export default StoreReportsSection;
