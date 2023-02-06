import React from "react";
import {
  Box,
  Checkbox,
  Divider,
  Grid,
  GridItem,
  Stack,
} from "@chakra-ui/react";
import AccessIcon from "components/icon/AccessIcon";
import { salesManager } from "constant/salesManager";
import { financialManager } from "constant/financialManager";
//
function EmployeeAccess({ formik }) {
  const [checkedItems, setCheckedItems] = React.useState([false, false]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;
  //
  return (
    <Box mt={8} borderRadius={24} bg="layout-over" p={10} as="form">
      <Stack direction="row" align="center">
        <AccessIcon boxSize={5} />
        <Box>دسترسـی هــا</Box>
      </Stack>
      <Divider my={5} />
      <Box as="form">
        <Checkbox
          isChecked={allChecked}
          isIndeterminate={isIndeterminate}
          onChange={(e) =>
            setCheckedItems([e.target.checked, e.target.checked])
          }
          mb={6}
        >
          مدیـر فـروش
        </Checkbox>
        <Grid templateColumns="repeat(4,minmax(0,1fr))" gap={8}>
          {salesManager?.map((item, index) => (
            <GridItem colSpan={{ base: 4, lg: 1 }} key={index}>
              <Checkbox
                isChecked={checkedItems[1]}
                onChange={(e) =>
                  setCheckedItems([checkedItems[0], e.target.checked])
                }
              >
                <Box whiteSpace="nowrap" fontSize={14}>
                  {item.label}
                </Box>
              </Checkbox>
            </GridItem>
          ))}
        </Grid>
        <Divider variant="dashed" my={5} />
        <Checkbox
          isChecked={allChecked}
          isIndeterminate={isIndeterminate}
          onChange={(e) =>
            setCheckedItems([e.target.checked, e.target.checked])
          }
          mb={6}
        >
          مدیـر مالـی
        </Checkbox>
        <Grid templateColumns="repeat(4,minmax(0,1fr))" gap={8}>
          {financialManager?.map((item, index) => (
            <GridItem colSpan={{ base: 4, lg: 1 }} key={index}>
              <Checkbox
                isChecked={checkedItems[1]}
                onChange={(e) =>
                  setCheckedItems([checkedItems[0], e.target.checked])
                }
              >
                <Box whiteSpace="nowrap" fontSize={14}>
                  {item.label}
                </Box>
              </Checkbox>
            </GridItem>
          ))}
        </Grid>
        <Divider variant="dashed" my={5} />
        <Checkbox
          isChecked={allChecked}
          isIndeterminate={isIndeterminate}
          onChange={(e) =>
            setCheckedItems([e.target.checked, e.target.checked])
          }
          mb={6}
        >
          مدیـر تولیـد
        </Checkbox>
        <Grid templateColumns="repeat(4,minmax(0,1fr))" gap={8}>
          {financialManager?.map((item, index) => (
            <GridItem colSpan={{ base: 4, lg: 1 }} key={index}>
              <Checkbox
                isChecked={checkedItems[1]}
                onChange={(e) =>
                  setCheckedItems([checkedItems[0], e.target.checked])
                }
              >
                <Box whiteSpace="nowrap" fontSize={14}>
                  {item.label}
                </Box>
              </Checkbox>
            </GridItem>
          ))}
        </Grid>
        <Divider variant="dashed" my={5} />
        <Checkbox
          isChecked={allChecked}
          isIndeterminate={isIndeterminate}
          onChange={(e) =>
            setCheckedItems([e.target.checked, e.target.checked])
          }
          mb={6}
        >
          مدیـر انبـار
        </Checkbox>
        <Grid templateColumns="repeat(4,minmax(0,1fr))" gap={8}>
          {financialManager?.map((item, index) => (
            <GridItem colSpan={{ base: 4, lg: 1 }} key={index}>
              <Checkbox
                isChecked={checkedItems[1]}
                onChange={(e) =>
                  setCheckedItems([checkedItems[0], e.target.checked])
                }
              >
                <Box whiteSpace="nowrap" fontSize={14}>
                  {item.label}
                </Box>
              </Checkbox>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default EmployeeAccess;
