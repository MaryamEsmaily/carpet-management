import { Box, Divider, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import Pagination from "components/Pagination";
import React, { useState } from "react";
import { postOrderReports } from "data/postOrderReports";
import AddNewOrderIcon from "components/icon/AddNewOrderIcon";
import TruckIcon from "components/icon/TruckIcon";
import StoreIcon from "components/icon/StoreIcon";
import SimpleReportIcon from "components/icon/SimpleReportIcon";
import ChartIcon from "components/icon/ChartIcon";
import ColorIcon from "components/icon/ColorIcon";
import EraserIcon from "components/icon/EraserIcon";
import InventoryIcon from "components/icon/InventoryIcon";

function AllOrderReport({ filterSearch, filterValues, status }) {
  //
  const [collapse, setCollapse] = useState("");
  // for pagination
  const pageNumberOptions = [
    { value: 8, label: "8" },
    { value: 16, label: "16" },
    { value: 32, label: "32" },
  ];

  const [pageSize, setPageSize] = useState(pageNumberOptions?.[0].value);
  const [pageNumber, setPageNumber] = useState(1);
  //
  // API
  // const { data: allCartable, totalCount } = usePostAllCartable({
  //   code: filterValues?.code || null,
  //   colors: filterValues?.colors || null,
  //   sizes: filterValues?.sizes || null,
  //   orderStatus: filterValues?.orderStatus || null,
  //   filterSearch: filterSearch || null,
  //   status,
  //   pageSize,
  //   pageNumber,
  // });

  // const data = React.useMemo(() => allCartable?.content, [allCartable?.content]);
  //

  // MOCK DATA
  const data = React.useMemo(() => postOrderReports?.Data?.content, []);

  const totalCount = postOrderReports?.Data?.totalCount;
  //
  return (
    <Box fontSize="sm">
      <Grid mt={5} templateColumns="repeat(1,minmax(0,1fr))" gap={7}>
        {data?.map((order, index) => (
          <GridItem key={order.id} colSpan={1}>
            <Stack
              spacing={6}
              borderRadius={14}
              bg={index % 2 === 0 ? "layout" : "layout-over"}
              px={10}
              py={6}
            >
              <Stack
                flexGrow={1}
                onClick={() => {
                  setCollapse({ id: order.id, show: !collapse.show });
                }}
                direction={{ base: "column", xl: "row" }}
                justify="space-evenly"
                cursor="pointer"
              >
                <Stack direction="row" align="center" spacing={2}>
                  <AddNewOrderIcon
                    color="text-primary"
                    fill="none"
                    boxSize={5}
                  />
                  <Text color="text-primary">کـد طـرح :</Text>
                  <Text>{order.code}</Text>
                </Stack>
                <Stack direction="row" align="center" spacing={2}>
                  <ColorIcon color="text-primary" boxSize={5} />
                  <Text color="text-primary">نـام رنـگ :</Text>
                  <Text>{order.color}</Text>
                </Stack>
                <Stack direction="row" align="center" spacing={2}>
                  <EraserIcon color="text-primary" boxSize={5} />
                  <Text color="text-primary">نـام سایـز :</Text>
                  <Text>{order.size}</Text>
                </Stack>
                <Stack direction="row" align="center" spacing={2}>
                  <InventoryIcon color="text-primary" boxSize={5} />
                  <Text color="text-primary">موجودی درجـه یک :</Text>
                  <Text>{order.numOneInventory}</Text>
                </Stack>
                <Stack direction="row" align="center" spacing={2}>
                  <InventoryIcon color="text-primary" boxSize={5} />
                  <Text color="text-primary">موجودی درجـه دو :</Text>
                  <Text>{order.numTwoInventory}</Text>
                </Stack>
              </Stack>
              <Stack
                spacing={6}
                display={
                  collapse.id === order.id && collapse.show ? "block" : "none"
                }
                pb={2}
              >
                <Divider variant="dashed" />
                <Stack direction="row" justifyContent="space-evenly">
                  <Stack direction="row" align="center" spacing={2}>
                    <TruckIcon color="text-primary" boxSize={5} />
                    <Text color="text-primary">در حال ارسال :</Text>
                    <Text>{order.send}</Text>
                  </Stack>
                  <Stack direction="row" align="center" spacing={2}>
                    <StoreIcon color="text-primary" boxSize={5} />
                    <Text color="text-primary">در انبـار :</Text>
                    <Text>{order.inStore}</Text>
                  </Stack>
                  <Stack direction="row" align="center" spacing={2}>
                    <SimpleReportIcon color="text-primary" boxSize={5} />
                    <Text color="text-primary">در حال بافت :</Text>
                    <Text>{order.preparation}</Text>
                  </Stack>
                  <Stack direction="row" align="center" spacing={2}>
                    <ChartIcon color="text-primary" boxSize={5} />
                    <Text color="text-primary">در حـال آهـار :</Text>
                    <Text>{order.inProgress}</Text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </GridItem>
        ))}
      </Grid>
      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        pageSize={pageSize}
        setPageSize={setPageSize}
        totalCount={totalCount}
        pageNumberOptions={pageNumberOptions}
      />
    </Box>
  );
}

export default AllOrderReport;
