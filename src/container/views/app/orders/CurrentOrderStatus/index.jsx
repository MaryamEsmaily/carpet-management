import React from "react";
import { Box, Divider, Stack, Text } from "@chakra-ui/react";
import TruckIcon from "components/icon/TruckIcon";
import StoreIcon from "components/icon/StoreIcon";
import SimpleReportIcon from "components/icon/SimpleReportIcon";
import ChartIcon from "components/icon/ChartIcon";
import CubeIcon from "components/icon/CubeIcon";
import BasketIcon from "components/icon/BasketIcon";
import { usePostOrderStatus } from "hook/api/useOrdersApi";
import { useParams } from "react-router-dom";
import { postOrderStatus } from "data/postOrderStatus";
//
function CurrentOrderStatus() {
  // const { id } = useParams();
  // const { data } = usePostOrderStatus({ id });
  const data = postOrderStatus?.Data?.content;
  return (
    <Box mt={8} borderRadius={24} bg="layout-over" p={12} as="form">
      <Stack direction="row" align="center">
        <BasketIcon boxSize={5} />
        <Text fontWeight="bold">وضعیـت فعلـی سفـارش</Text>
      </Stack>
      <Divider my={8} />
      <Stack direction="row" justifyContent="space-evenly">
        <Stack direction="row" align="center" spacing={2}>
          <TruckIcon color="text-primary" boxSize={5} />
          <Text color="text-primary">در حال ارسال :</Text>
          <Text>{data?.sending}</Text>
        </Stack>
        <Stack direction="row" align="center" spacing={2}>
          <StoreIcon color="text-primary" boxSize={5} />
          <Text color="text-primary">در انبـار :</Text>
          <Text>{data?.inStore}</Text>
        </Stack>
        <Stack direction="row" align="center" spacing={2}>
          <SimpleReportIcon color="text-primary" boxSize={5} />
          <Text color="text-primary">در حال بافت :</Text>
          <Text>{data?.preparation}</Text>
        </Stack>
        <Stack direction="row" align="center" spacing={2}>
          <CubeIcon color="text-primary" boxSize={5} />
          <Text color="text-primary">ارسال شـده :</Text>
          <Text>{data?.send}</Text>
        </Stack>
        <Stack direction="row" align="center" spacing={2}>
          <ChartIcon color="text-primary" boxSize={5} />
          <Text color="text-primary">در حـال آهـار :</Text>
          <Text>{data?.inProgress}</Text>
        </Stack>
      </Stack>
    </Box>
  );
}

export default CurrentOrderStatus;
