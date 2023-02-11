import React from "react";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  IconButton,
  Stack,
  Switch,
  Text,
} from "@chakra-ui/react";
import CubeIcon from "components/icon/CubeIcon";
import Input from "components/custom/Input";
import DeleteIcon from "components/icon/DeleteIcon";
import StoreIcon from "components/icon/StoreIcon";
//
function ProductsInfo({ formik }) {
  //
  return (
    <Box mt={8} borderRadius={24} bg="layout-over" p={10} as="form">
      <Stack direction="row" align="center">
        <CubeIcon boxSize={5} />
        <Text fontWeight="bold">محصولات</Text>
      </Stack>
      <Divider my={8} />
      <Box>
        <Grid
          as="form"
          templateColumns="repeat(14,minmax(0,1fr))"
          alignItems="end"
          gap={5}
        >
          <GridItem colSpan={{ base: 14, md: 7, xl: 2 }}>
            <FormControl isRequired>
              <FormLabel fontSize="sm" fontWeight="bold">
                کد طرح
              </FormLabel>
              <Input variant="filled" {...formik.getFieldProps("userName")} />
            </FormControl>
          </GridItem>
          <GridItem colSpan={{ base: 14, md: 7, xl: 3 }}>
            <FormControl isRequired>
              <FormLabel fontSize="sm" fontWeight="bold">
                سایز بندی
              </FormLabel>
              <Input variant="filled" {...formik.getFieldProps("userName")} />
            </FormControl>
          </GridItem>
          <GridItem colSpan={{ base: 14, md: 7, xl: 3 }}>
            <FormControl isRequired>
              <FormLabel fontSize="sm" fontWeight="bold">
                رنگ بندی
              </FormLabel>
              <Input variant="filled" {...formik.getFieldProps("userName")} />
            </FormControl>
          </GridItem>
          <GridItem colSpan={{ base: 14, md: 7, xl: 3 }}>
            <FormControl isRequired>
              <FormLabel fontSize="sm" fontWeight="bold">
                فـرش درجـه دار
              </FormLabel>
              <Stack
                direction="row"
                height="50px"
                borderRadius="lg"
                justifyContent="space-around"
                align="center"
                bg="layout-main"
              >
                <Text>درجه دار</Text>
                <Switch />
              </Stack>
            </FormControl>
          </GridItem>
          <GridItem colSpan={{ base: 14, md: 7, xl: 2 }}>
            <FormControl isRequired>
              <FormLabel fontSize="sm" fontWeight="bold">
                تعداد
              </FormLabel>
              <Input variant="filled" {...formik.getFieldProps("userName")} />
            </FormControl>
          </GridItem>
          <GridItem colSpan={{ base: 14, md: 7, xl: 1 }}>
            <IconButton
              rounded="lg"
              height="50px"
              colorScheme="red"
              background="layout-main"
              width="full"
              icon={<DeleteIcon fill="red" color="red" boxSize={5} />}
            />
          </GridItem>
        </Grid>
        <Stack direction="row" alignItems="center" mt={4}>
          <Stack direction="row" alignItems="center">
            <StoreIcon boxSize={5} color="text-primary" />
            <Text fontSize="sm" color="text-primary">
              موجودی درجه دار :
            </Text>
          </Stack>
          <Text>۱۲ عـدد</Text>
        </Stack>
      </Box>
      <Divider variant="dashed" my={8} />
      <Box textAlign="end">
        <Button>افـزودن محصول</Button>
      </Box>
    </Box>
  );
}

export default ProductsInfo;
