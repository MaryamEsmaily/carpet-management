import React from "react";
import { Box, Divider, Stack, Text } from "@chakra-ui/react";
import AccessIcon from "components/icon/AccessIcon";
import { salesManager } from "constant/salesManager";
import { financialManager } from "constant/financialManager";
import IndeterminateCheckbox from "components/IndeterminateCheckbox";
import ReactSelect from "react-select";
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
          parentLabel={
            <Stack direction="row" spacing={5} align="center">
              <Text>مدیـر انبـار</Text>
              <ReactSelect
                styles={{
                  control: (base) => ({
                    ...base,
                    height: 40,
                    minHeight: 40,
                    borderRadius: "6px",
                    width: "200px",
                  }),
                  indicatorSeparator: (base) => ({
                    ...base,
                    display: "none",
                  }),
                }}
                placeholder="انبار را انتخاب کنید"
                options={[
                  { label: "انبار شماره یک", value: "1" },
                  { label: "انبار شماره دو", value: "2" },
                ]}
              />
            </Stack>
          }
          {...formik.getFieldProps("warehouseManager")}
          checkboxes={financialManager}
        />
      </Box>
    </Box>
  );
}

export default EmployeeAccess;
