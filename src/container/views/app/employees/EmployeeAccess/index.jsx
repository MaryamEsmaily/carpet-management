import React from "react";
import { Box, Divider, Stack } from "@chakra-ui/react";
import AccessIcon from "components/icon/AccessIcon";
import { salesManager } from "constant/salesManager";
import { financialManager } from "constant/financialManager";
import IndeterminateCheckbox from "components/IndeterminateCheckbox";
//
function EmployeeAccess({ formik }) {
  //
  return (
    <Box mt={8} borderRadius={24} bg="layout-over" p={10}>
      <Stack direction="row" align="center">
        <AccessIcon boxSize={5} />
        <Box>دسترسـی هــا</Box>
      </Stack>
      <Divider my={5} />
      <Box>
        <IndeterminateCheckbox
          parentLabel=" مدیـر فـروش"
          {...formik.getFieldProps("salesManager")}
          checkboxes={salesManager}
        />
        <Divider variant="dashed" my={5} />
        <IndeterminateCheckbox
          parentLabel="مدیـر مالـی"
          {...formik.getFieldProps("financialManager")}
          checkboxes={financialManager}
        />
        <Divider variant="dashed" my={5} />
        <IndeterminateCheckbox
          parentLabel="مدیـر تولیـد"
          {...formik.getFieldProps("productionManager")}
          checkboxes={financialManager}
        />
        <Divider variant="dashed" my={5} />
        <IndeterminateCheckbox
          parentLabel="مدیـر انبـار"
          {...formik.getFieldProps("warehouseManager")}
          checkboxes={financialManager}
        />
      </Box>
    </Box>
  );
}

export default EmployeeAccess;
