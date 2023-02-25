import React from "react";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import Input from "components/custom/Input";
import StoreIcon from "components/icon/StoreIcon";
import EditIcon from "components/icon/EditIcon";
import SelectCustom from "components/custom/SelectCustom";
import { useNavigate } from "react-router-dom";
import { usePostEditOrder } from "hook/api/useOrdersApi";
import { useFormik } from "formik";
import useToast from "hook/useToast";
//
const initialValues = {
  fromStatus: "",
  toStatus: "",
  count: "",
  description: "",
};
//
function AddChangeToOrder() {
  //
  const navigate = useNavigate();
  //
  const toast = useToast();
  //
  const postEditOrder = usePostEditOrder();
  //
  const handleSubmit = (values) => {
    postEditOrder.mutate(values, {
      onSuccess: (res) => {
        toast.success({ res });
        formik.resetForm();
      },
      onError: (err) => {
        toast.error({ err });
      },
    });
  };
  //
  const formik = useFormik({
    onSubmit: handleSubmit,
    initialValues,
  });
  //
  return (
    <Box as="form" onSubmit={formik.handleSubmit}>
      <Box mt={8} borderRadius={24} bg="layout-over" p={10}>
        <Stack direction="row" align="center">
          <EditIcon boxSize={5} />
          <Text fontWeight="bold">ایجــاد تغییـر</Text>
        </Stack>
        <Divider my={8} />
        <Box>
          <Grid
            templateColumns="repeat(14,minmax(0,1fr))"
            alignItems="end"
            gap={5}
          >
            <GridItem colSpan={{ base: 14, md: 7, xl: 3 }}>
              <FormControl>
                <FormLabel fontSize="sm" fontWeight="bold">
                  از وضعیـت
                </FormLabel>
                <SelectCustom
                  {...formik.getFieldProps("fromStatus")}
                  isMulti
                  // options={getAllColors?.Data.content}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={{ base: 14, md: 7, xl: 3 }}>
              <FormControl>
                <FormLabel fontSize="sm" fontWeight="bold">
                  بـه وضعیـت
                </FormLabel>
                <SelectCustom
                  {...formik.getFieldProps("toStatus")}
                  isMulti
                  // options={getAllColors?.Data.content}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={{ base: 14, md: 7, xl: 2 }}>
              <FormControl>
                <FormLabel fontSize="sm" fontWeight="bold">
                  تعداد
                </FormLabel>
                <Input variant="filled" {...formik.getFieldProps("count")} />
              </FormControl>
            </GridItem>
            <GridItem colSpan={{ base: 14, md: 7, xl: 6 }}>
              <FormControl>
                <FormLabel fontSize="sm" fontWeight="bold">
                  توضیحـات
                </FormLabel>
                <Input
                  variant="filled"
                  {...formik.getFieldProps("description")}
                />
              </FormControl>
            </GridItem>
          </Grid>
          <Stack direction="row" alignItems="center" mt={4}>
            <Stack direction="row" alignItems="center">
              <StoreIcon boxSize={5} color="text-primary" />
              <Text fontSize="sm" color="text-primary">
                موجودی فعلی :
              </Text>
            </Stack>
            <Text>۱۲ عـدد</Text>
          </Stack>
        </Box>
        <Divider variant="dashed" my={8} />
        <Box textAlign="end">
          <Button>ایجـاد تغییـر جدیـد</Button>
        </Box>
      </Box>
      <Stack direction="row" spacing={2} mt={6} w="full" justify="end">
        <Button
          w={140}
          variant="outline"
          onClick={() => {
            navigate("/app/orders");
            formik.resetForm();
          }}
        >
          انصراف
        </Button>
        <Button w={140} type="submit">
          ثبت اطلاعات
        </Button>
      </Stack>
    </Box>
  );
}

export default AddChangeToOrder;
