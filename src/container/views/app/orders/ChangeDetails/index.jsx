import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import Input from "components/custom/Input";
import StoreIcon from "components/icon/StoreIcon";
import SelectCustom from "components/custom/SelectCustom";
import DeleteIcon from "components/icon/DeleteIcon";

function ChangeDetails({ index, formik }) {
  //
  const handleDelete = (id) => {
    formik.setFieldValue(
      "changes",
      formik.values.changes.filter((item) => id !== item.id)
    );
  };
  //
  return (
    <Box mt={4}>
      <Grid templateColumns="repeat(14,minmax(0,1fr))" alignItems="end" gap={5}>
        <GridItem colSpan={{ base: 14, md: 7, xl: 3 }}>
          <FormControl>
            <FormLabel fontSize="sm" fontWeight="bold">
              از وضعیـت
            </FormLabel>
            <SelectCustom
              {...formik.getFieldProps(`changes.${[index]}.fromStatus`)}
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
              {...formik.getFieldProps(`changes.${[index]}.toStatus`)}
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
            <Input
              variant="filled"
              {...formik.getFieldProps(`changes.${[index]}.count`)}
            />
          </FormControl>
        </GridItem>
        <GridItem
          colSpan={{
            base: 14,
            md: 7,
            xl: formik.values.changes.length > 1 ? 5 : 6,
          }}
        >
          <FormControl>
            <FormLabel fontSize="sm" fontWeight="bold">
              توضیحـات
            </FormLabel>
            <Input
              variant="filled"
              {...formik.getFieldProps(`changes.${[index]}.description`)}
            />
          </FormControl>
        </GridItem>
        {formik.values.changes.length > 1 ? (
          <GridItem colSpan={{ base: 14, md: 7, xl: 1 }}>
            <IconButton
              onClick={() => handleDelete(formik.values.changes?.[index]?.id)}
              rounded="lg"
              height="50px"
              colorScheme="red"
              background="layout-main"
              width="full"
              icon={<DeleteIcon fill="red" color="red" boxSize={5} />}
            />
          </GridItem>
        ) : null}
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
  );
}

export default ChangeDetails;
