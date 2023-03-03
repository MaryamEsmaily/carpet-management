import React from "react";
import { Box, Checkbox, Grid, GridItem } from "@chakra-ui/react";

function IndeterminateCheckbox({
  name,
  value,
  onChange,
  checkboxes,
  parentLabel,
}) {
  //
  const allChecked = Object.keys(value).every((key) => Boolean(value[key]));
  const isIndeterminate =
    Object.keys(value).some((key) => Boolean(value[key])) && !allChecked;
  //
  return (
    <>
      <Checkbox
        mb={6}
        isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={(e) =>
          onChange({
            target: {
              name,
              value: Object.keys(value).reduce((value, key) => {
                return { ...value, [key]: e.target.checked };
              }, {}),
            },
          })
        }
      >
        {parentLabel}
      </Checkbox>

      <Grid templateColumns="repeat(4,minmax(0,1fr))" gap={8}>
        {checkboxes.map((checkbox) => {
          return (
            <GridItem colSpan={{ base: 4, lg: 1 }} key={checkbox.value}>
              <Checkbox
                isChecked={value[checkbox.key]}
                onChange={(e) => {
                  onChange({
                    target: {
                      name,
                      value: { ...value, [checkbox.key]: e.target.checked },
                    },
                  });
                }}
              >
                <Box whiteSpace="nowrap" fontSize={14}>
                  {checkbox.label}
                </Box>
              </Checkbox>
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
}

export default IndeterminateCheckbox;
