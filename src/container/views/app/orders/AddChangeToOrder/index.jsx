import React from "react";
import { Box, Button, Divider, Stack, Text } from "@chakra-ui/react";
import EditIcon from "components/icon/EditIcon";
import { useNavigate } from "react-router-dom";
import { usePostEditOrder } from "hook/api/useOrdersApi";
import { useFormik } from "formik";
import useToast from "hook/useToast";
import uuid from "react-uuid";
import ChangeDetails from "../ChangeDetails";
//
const initialValues = {
  changes: [
    { id: 1, fromStatus: "", toStatus: "", count: "", description: "" },
  ],
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
  const handleAddNewChange = () => {
    formik.setFieldValue("changes", [
      ...formik.values.changes,
      {
        id: uuid(),
        fromStatus: "",
        toStatus: "",
        count: "",
        description: "",
      },
    ]);
  };
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
        {formik.values.changes?.map((_, index) => (
          <ChangeDetails index={index} formik={formik} />
        ))}
        <Divider variant="dashed" my={8} />
        <Box textAlign="end">
          <Button onClick={handleAddNewChange}>ایجـاد تغییـر جدیـد</Button>
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
