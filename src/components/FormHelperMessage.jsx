import { Text } from "@chakra-ui/react";
import React from "react";

function FormHelperMessage({ formik, name, ...props }) {
  const error = formik.errors?.[name];
  const isTouched = formik.touched?.[name];
  return error && isTouched ? (
    <Text fontSize="xs" ms={4} mt={1} {...props}>
      {error}
    </Text>
  ) : null;
}

export default FormHelperMessage;
