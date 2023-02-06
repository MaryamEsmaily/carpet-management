import React from "react";
import {
  Box,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import Uploader from "components/Uploader";
import Input from "components/custom/Input";
import AccountIcon from "components/icon/AccountIcon";
//
function EmployeeProfileDetails({ formik }) {
  return (
    <Box mt={8} borderRadius={24} bg="layout-over" p={10} as="form">
      <Stack direction="row" align="center">
        <AccountIcon />
        <Box>اطلاعـات پـروفایـلی</Box>
      </Stack>
      <Divider my={5} />
      <Grid templateColumns="repeat(2,minmax(0,1fr))" gap={10}>
        <GridItem colSpan={1}>
          <FormControl isRequired>
            <FormLabel fontWeight="bold">نام و نام خانوادگـی </FormLabel>
            <Input
              variant="filled"
              _placeholder={{ color: "text-primary" }}
              placeholder="نام و نام خانوادگـی"
              {...formik.getFieldProps("fullName")}
            />
          </FormControl>
          <FormControl mt={10} isRequired>
            <FormLabel fontWeight="bold">نام کاربری </FormLabel>
            <Input
              variant="filled"
              _placeholder={{ color: "text-primary" }}
              placeholder="نام کاربری "
              {...formik.getFieldProps("userName")}
            />
          </FormControl>
          <FormControl mt={10} isRequired>
            <FormLabel fontWeight="bold">پست الکترونیـک </FormLabel>
            <Input
              variant="filled"
              _placeholder={{ color: "text-primary" }}
              placeholder="پست الکترونیـک"
              {...formik.getFieldProps("email")}
            />
          </FormControl>
          <FormControl mt={10}>
            <FormLabel fontWeight="bold">آدرس</FormLabel>
            <Textarea
              h="170px"
              variant="filled"
              _placeholder={{ color: "text-primary" }}
              placeholder="آدرس را وارد کنید ..."
              {...formik.getFieldProps("address")}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl isRequired>
            <FormLabel fontWeight="bold"> شماره همـراه </FormLabel>
            <Input
              variant="filled"
              _placeholder={{ color: "text-primary" }}
              placeholder=" شماره همـراه "
              {...formik.getFieldProps("mobileNumbers")}
            />
          </FormControl>
          <FormControl mt={10}>
            <FormLabel fontWeight="bold">تاریخ تولـد </FormLabel>
            <Input
              variant="filled"
              _placeholder={{ color: "text-primary" }}
              placeholder="تاریخ تولـد "
              {...formik.getFieldProps("birthDate")}
            />
          </FormControl>
          <FormControl mt={10}>
            <FormLabel fontWeight="bold">تلفـن </FormLabel>
            <Input
              variant="filled"
              _placeholder={{ color: "text-primary" }}
              placeholder="تلفـن"
              {...formik.getFieldProps("phoneNumber")}
            />
          </FormControl>
          <FormControl mt={10}>
            <FormLabel fontWeight="bold">افزودن عکس </FormLabel>
            <Uploader {...formik.getFieldProps("image")} />
          </FormControl>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default EmployeeProfileDetails;
