import React from "react";
import { Box, Divider, Stack, Text } from "@chakra-ui/react";
import AddNewOrderIcon from "components/icon/AddNewOrderIcon";
import CalenderIcon from "components/icon/CalenderIcon";
import LampIcon from "components/icon/LampIcon";
import LayerIcon from "components/icon/LayerIcon";
import TruckIcon from "components/icon/TruckIcon";
import StoreIcon from "components/icon/StoreIcon";
import SimpleReportIcon from "components/icon/SimpleReportIcon";
import ChartIcon from "components/icon/ChartIcon";
import UserIcon from "components/icon/UserIcon";
import ReportIcon from "components/icon/ReportIcon";

function OrderInfo({ data }) {
  return (
    <>
      <Stack direction="row" align="center">
        <ReportIcon boxSize={5} />
        <Text fontWeight="bold">اطلاعـات سفـارش</Text>
      </Stack>
      <Stack
        fontSize="sm"
        borderRadius={14}
        p={10}
        spacing={6}
        bg="layout-over"
        mt={8}
      >
        <Stack
          direction={{ base: "column", xl: "row" }}
          justify="space-between"
          spacing={7}
        >
          <Stack direction="row" align="center" spacing={2}>
            <AddNewOrderIcon color="text-primary" fill="none" boxSize={5} />
            <Text color="text-primary">کـد سفارش :</Text>
            <Text>{data.orderCode}</Text>
          </Stack>
          <Stack direction="row" align="center" spacing={2}>
            <LampIcon color="text-primary" boxSize={5} />
            <Text color="text-primary">توسط :</Text>
            <Text>{data.creatorName}</Text>
          </Stack>
          <Stack direction="row" align="center" spacing={2}>
            <UserIcon color="text-primary" boxSize={5} />
            <Text color="text-primary">نام متعامل :</Text>
            <Text>{data.fullName}</Text>
          </Stack>
          <Stack direction="row" align="center" spacing={2}>
            <CalenderIcon color="text-primary" boxSize={5} />
            <Text color="text-primary">تاریـخ ایجاد :</Text>
            <Text>{data.orderCreateDate}</Text>
          </Stack>
          <Stack direction="row" align="center" spacing={2}>
            <LayerIcon color="text-primary" boxSize={5} />
            <Text color="text-primary">آیتم های موجود :</Text>
            <Text>{data.availableCount}</Text>
          </Stack>
        </Stack>
        <Box>
          <Divider variant="dashed" mb={6} />
          <Stack direction="row" justifyContent="space-evenly">
            <Stack direction="row" align="center" spacing={2}>
              <TruckIcon color="text-primary" boxSize={5} />
              <Text color="text-primary">در حال ارسال :</Text>
              <Text>{data.send}</Text>
            </Stack>
            <Stack direction="row" align="center" spacing={2}>
              <StoreIcon color="text-primary" boxSize={5} />
              <Text color="text-primary">در انبـار :</Text>
              <Text>{data.inStore}</Text>
            </Stack>
            <Stack direction="row" align="center" spacing={2}>
              <SimpleReportIcon color="text-primary" boxSize={5} />
              <Text color="text-primary">در حال بافت :</Text>
              <Text>{data.preparation}</Text>
            </Stack>
            <Stack direction="row" align="center" spacing={2}>
              <ChartIcon color="text-primary" boxSize={5} />
              <Text color="text-primary">در حـال آهـار :</Text>
              <Text>{data.inProgress}</Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}

export default OrderInfo;
