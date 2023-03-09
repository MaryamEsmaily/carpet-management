import React from "react";
import {
  Box,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import Input from "components/custom/Input";
import BuyerIcon from "components/icon/BuyerIcon";
import getValidationFieldProps from "utils/getValidationFieldProps";
//
function CustomerInfo({ formik }) {
  return (
    <Box mt={8} borderRadius={24} bg="layout-over" p={12} as="form">
      <Stack direction="row" align="center">
        <BuyerIcon boxSize={5} />
        <Text fontWeight="bold">اطلاعـات مشتـری</Text>
      </Stack>
      <Divider my={8} />
      <Grid templateColumns="repeat(10,minmax(0,1fr))" gap={10}>
        <GridItem colSpan={3}>
          <FormControl isRequired>
            <FormLabel fontSize="sm" fontWeight="bold">
              توسط{" "}
            </FormLabel>
            <RadioGroup mt={5}>
              <Stack direction="row" justifyContent="space-between">
                <Radio defaultChecked value="2">
                  کارخـانـه
                </Radio>
                <Radio value="1">متعامل</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
        </GridItem>
        <GridItem colSpan={4}>
          <FormControl isRequired>
            <FormLabel fontSize="sm" fontWeight="bold">
              نام متعامل{" "}
            </FormLabel>
            <Input
              variant="filled"
              _placeholder={{ color: "text-primary" }}
              placeholder="انتخاب سفـارش توسط"
              {...formik.getFieldProps("customerName")}
              {...getValidationFieldProps(formik, "customerName")}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={3}>
          <FormControl isRequired>
            <FormLabel fontSize="sm" fontWeight="bold">
              تاریخ سفـارش
            </FormLabel>
            <Input
              variant="filled"
              _placeholder={{ color: "text-primary" }}
              placeholder="تاریخ سفـارش"
              {...formik.getFieldProps("orderDate")}
              {...getValidationFieldProps(formik, "orderDate")}
            />
          </FormControl>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default CustomerInfo;
