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
  Checkbox,
  CheckboxGroup,
  SimpleGrid,
} from "@chakra-ui/react";
import SearchIcon from "components/icon/SearchIcon";
import { useTranslation } from "react-i18next";
import Input from "components/custom/Input";
import AllOrders from "../AllOrders";
import FilterIcon from "components/icon/FilterIcon";
import { useFormik } from "formik";
import CloseIcon from "components/icon/CloseIcon";
import ColorFilterIcon from "components/icon/ColorFilterIcon";
import OptionsOutsideSelect from "components/custom/OptionsOutsideSelect";
import EraserIcon from "components/icon/EraserIcon";
import { getAllColors } from "data/getAllColors";
import { getAllSizes } from "data/getAllSizes";
import CalenderIcon from "components/icon/CalenderIcon";
import SelectCustom from "components/custom/SelectCustom";
import CrownIcon from "components/icon/CrownIcon";
import UsersIcon from "components/icon/UsersIcon";
import ClockIcon from "components/icon/ClockIcon";
import OrderReportIcon from "components/icon/OrderReportIcon";
import ReportIcon from "components/icon/ReportIcon";

const initialValues = {
  fullName: "",
  store: "",
  code: "",
  startDate: "",
  endDate: "",
  sizes: [],
  colors: [],
  orderStatus: [],
  orderTotalStatus: [],
};

function OrdersSection() {
  //
  const { direction } = useTheme();
  //
  const { t } = useTranslation();
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
      orderStatus: values.sizes.map((size) => size.value),
      orderTotalStatus: values.sizes.map((size) => size.value),
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
            <DrawerBody py={5}>
              <FormControl>
                <FormLabel>
                  <Stack direction="row" spacing={2} align="center">
                    <UsersIcon boxSize={4} />
                    <Text fontSize={14} fontWeight="bold">
                      براساس متعامـل :
                    </Text>
                  </Stack>
                </FormLabel>
                <SelectCustom
                  isMulti
                  placeholder="براساس متعامـل"
                  {...formik.getFieldProps("fullName")}
                  // options={getAllColors?.Data.content}
                />
              </FormControl>

              <FormControl mt={10}>
                <FormLabel>
                  <Stack direction="row" spacing={2} align="center">
                    <CrownIcon boxSize={4} />
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
              <FormControl mt={10}>
                <FormLabel>
                  <Stack direction="row" spacing={2} align="center">
                    <ClockIcon boxSize={4} />
                    <Text fontSize={14} fontWeight="bold">
                      براساس بازه زمانـی :
                    </Text>
                  </Stack>
                </FormLabel>
                <Stack direction="row" spacing={4} mt={3}>
                  <InputGroup>
                    <Input
                      _placeholder={{ color: "text-primary", fontSize: 16 }}
                      placeholder="از تاریخ"
                      variant="filled"
                      {...formik.getFieldProps("startDate")}
                    />
                    <InputRightElement
                      sx={{
                        right: 0,
                        left: "unset",
                      }}
                      pointerEvents="none"
                    >
                      <CalenderIcon boxSize={5} />
                    </InputRightElement>
                  </InputGroup>
                  <InputGroup>
                    <Input
                      _placeholder={{ color: "text-primary", fontSize: 16 }}
                      placeholder="تا تاریخ"
                      variant="filled"
                      {...formik.getFieldProps("endDate")}
                    />
                    <InputRightElement
                      sx={{
                        right: 0,
                        left: "unset",
                      }}
                      pointerEvents="none"
                    >
                      <CalenderIcon boxSize={5} />
                    </InputRightElement>
                  </InputGroup>
                </Stack>
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
              <FormControl mt={10}>
                <FormLabel>
                  <Stack direction="row" spacing={2} align="center">
                    <ReportIcon boxSize={4} />
                    <Text fontSize={14} fontWeight="bold">
                      براساس وضعیت کلی سفارش :
                    </Text>
                  </Stack>
                </FormLabel>
                <CheckboxGroup>
                  <SimpleGrid columns={2} spacing={3} mt={5}>
                    <Checkbox value="1">تکمیل شده</Checkbox>
                    <Checkbox value="2">در حال تکمیل</Checkbox>
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
      <AllOrders filterValues={filterValues} filterSearch={filterSearch} />
    </>
  );
}

export default OrdersSection;
