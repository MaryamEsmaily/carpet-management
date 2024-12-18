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
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  InputRightElement,
  useTheme,
  CheckboxGroup,
  SimpleGrid,
  Checkbox,
} from "@chakra-ui/react";
import FilterIcon from "components/icon/FilterIcon";
import SearchIcon from "components/icon/SearchIcon";
import CloseIcon from "components/icon/CloseIcon";
import AddNewOrderIcon from "components/icon/AddNewOrderIcon";
import ColorFilterIcon from "components/icon/ColorFilterIcon";
import EraserIcon from "components/icon/EraserIcon";
import OptionsOutsideSelect from "components/custom/OptionsOutsideSelect";
import { useFormik } from "formik";
import {
  useGetAllColors,
  useGetAllSizes,
} from "hook/api/useProductManagementApi";
import { getAllColors } from "data/getAllColors";
import { getAllSizes } from "data/getAllSizes";
import { useTranslation } from "react-i18next";
import Input from "components/custom/Input";
import AllOrderReports from "../AllOrderReports";
import OrderReportIcon from "components/icon/OrderReportIcon";

const initialValues = {
  code: "",
  colors: [],
  sizes: [],
  orderStatus: [],
};

function OrderReportsSection() {
  //
  const { direction } = useTheme();
  //
  const { t } = useTranslation();
  //
  const [searchInput, setSearchInput] = useState("");
  const [status, setStatus] = useState("2");
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
      orderStatus: values.sizes.map((size) => size.value),
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
              icon={<SearchIcon fill="none" boxSize={5} />}
            />
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
        placement={direction === "ltr" ? "left" : "right"}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <Box h="full" as="form" onSubmit={formik.handleSubmit}>
          <DrawerContent bg="layout-over" py={5} px={1}>
            <DrawerHeader>
              <Stack
                direction="row"
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
              </Stack>

              <Divider mt={2} />
            </DrawerHeader>
            <DrawerBody>
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
                  //  "بر اساس سایـز"
                  placeholder={t("17")}
                  isMulti
                  options={getAllSizes?.Data.content}
                  {...formik.getFieldProps("sizes")}
                />
              </FormControl>
              <FormControl mt={10}>
                <FormLabel>
                  <Stack direction="row" spacing={2} align="center">
                    <OrderReportIcon boxSize={4} />
                    <Text fontSize={14} fontWeight="bold">
                      براساس وضعیت سفارش :
                    </Text>
                  </Stack>
                </FormLabel>
                <CheckboxGroup>
                  <SimpleGrid columns={2} spacing={3} mt={5}>
                    <Checkbox value="1">در حال ارسال</Checkbox>
                    <Checkbox value="2">در حال بافت</Checkbox>
                    <Checkbox value="3">ارسال شده</Checkbox>
                    <Checkbox value="4">در انبار</Checkbox>
                    <Checkbox value="5">در حال آهار</Checkbox>
                  </SimpleGrid>
                </CheckboxGroup>
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
      <AllOrderReports
        filterValues={filterValues}
        filterSearch={filterSearch}
        status={status}
      />
    </>
  );
}

export default OrderReportsSection;
