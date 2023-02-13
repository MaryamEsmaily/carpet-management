import {
  Box,
  Grid,
  GridItem,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Radio,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Pagination from "components/Pagination";
import DeleteIcon from "components/icon/DeleteIcon";
import MoreIcon from "components/icon/MoreIcon";
import useToast from "hook/useToast";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  useDeleteStoreReport,
  usePostAllStoreReport,
  usePutStoreReportStatus,
} from "hook/api/useStoreReportApi";
import LayerIcon from "components/icon/LayerIcon";
import StoreIcon from "components/icon/StoreIcon";
import ReportIcon from "components/icon/ReportIcon";
import ColorIcon from "components/icon/ColorIcon";
import EraserIcon from "components/icon/EraserIcon";
import CircleIcon from "components/icon/CircleIcon";
import { postStoreReport } from "data/postStoreReport";

function AllStoreReports({ filterSearch }) {
  //
  const { t } = useTranslation();
  //
  const toast = useToast();
  // for pagination
  const pageNumberOptions = [
    { value: 5, label: "5" },
    { value: 15, label: "15" },
    { value: 30, label: "30" },
  ];

  const [pageSize, setPageSize] = useState(pageNumberOptions?.[0].value);
  const [pageNumber, setPageNumber] = useState(1);
  //
  const deleteStoreReport = useDeleteStoreReport();
  const putStoreReportStatus = usePutStoreReportStatus();
  //
  // API
  // const { data: allStoreReport, totalCount } = usePostAllStoreReport({
  //   filterSearch: filterSearch || null,
  //   pageSize,
  //   pageNumber,
  // });

  // const data = React.useMemo(() => allStoreReport?.content, [allStoreReport?.content]);
  //

  // MOCK DATA
  const data = React.useMemo(() => postStoreReport?.Data?.content, []);

  const totalCount = postStoreReport?.Data?.totalCount;
  //
  const handleDelete = (id) => {
    deleteStoreReport.mutate(
      {
        id,
      },
      {
        onSuccess: (res) => {
          toast.success({ res });
        },
        onError: (err) => {
          toast.error({ err });
        },
      }
    );
  };
  const handleStatus = ({ id, status }) => {
    putStoreReportStatus.mutate(
      {
        id,
        status,
      },
      {
        onSuccess: (res) => {
          toast.success({ res });
        },
        onError: (err) => {
          toast.error({ err });
        },
      }
    );
  };
  //
  return (
    <Box fontSize="sm">
      <Grid mt={5} templateColumns="repeat(1,minmax(0,1fr))" gap={7}>
        {data?.map((store, index) => (
          <GridItem key={store.id} colSpan={1}>
            <SimpleGrid
              borderRadius={14}
              bg={index % 2 === 0 ? "layout" : "layout-over"}
              p={6}
              columns={{ base: 1, lg: 4 }}
              spacing={6}
              position="relative"
            >
              <Stack direction="row" align="center" spacing={2}>
                <StoreIcon color="text-primary" boxSize={5} />
                <Text color="text-primary">نـام :</Text>
                <Text noOfLines={1}>{store.storeName}</Text>
              </Stack>
              <Stack direction="row" align="center" spacing={2}>
                <ReportIcon color="text-primary" boxSize={5} />
                <Text color="text-primary">کد طـرح :</Text>
                <Text>{store.code}</Text>
              </Stack>
              <Stack direction="row" align="center" spacing={2}>
                <ColorIcon color="text-primary" boxSize={5} />
                <Text color="text-primary">نـام رنـگ :</Text>
                {store?.colors?.map((item, index) => (
                  <Text key={index}>
                    {item}{" "}
                    <Text
                      as="span"
                      display={
                        index === store?.colors?.length - 1 ? "none" : "unset"
                      }
                    >
                      -
                    </Text>
                  </Text>
                ))}
              </Stack>
              <Stack direction="row" align="center" spacing={2}>
                <EraserIcon color="text-primary" boxSize={5} />
                <Text color="text-primary">نـام سایـز :</Text>
                {store?.sizes?.map((item, index) => (
                  <Text key={index}>
                    {item}{" "}
                    <Text
                      as="span"
                      display={
                        index === store?.sizes?.length - 1 ? "none" : "unset"
                      }
                    >
                      -
                    </Text>
                  </Text>
                ))}
              </Stack>
              <Stack direction="row" align="center" spacing={2}>
                <LayerIcon color="text-primary" boxSize={5} />
                <Text color="text-primary">تعـداد درجه یـک :</Text>
                <Text>{store.countNumOne}</Text>
              </Stack>
              <Stack direction="row" align="center" spacing={2}>
                <CircleIcon color="text-primary" boxSize={5} />
                <Text color="text-primary">تعـداد درجـه دار :</Text>
                <Text>{store.count}</Text>
              </Stack>
              <Popover placement="left-start">
                <PopoverTrigger>
                  <IconButton
                    position="absolute"
                    top={3}
                    right={3}
                    icon={<MoreIcon boxSize={4} />}
                    variant="unstyled"
                  />
                </PopoverTrigger>
                <PopoverContent
                  sx={{ width: "140px", borderRadius: "8px", p: 4 }}
                >
                  <PopoverArrow />
                  <Stack spacing={4}>
                    <Radio
                      size="lg"
                      isChecked={store.status === "0"}
                      onClick={() =>
                        handleStatus({
                          id: store?.id,
                          status: store?.status === "0" ? "1" : "0",
                        })
                      }
                    >
                      <Text fontSize="md" mx={1}>
                        {/* غیـرفعـال */}
                        {t("13")}
                      </Text>
                    </Radio>
                    <Stack
                      cursor="pointer"
                      direction="row"
                      align="center"
                      spacing={3}
                      onClick={() => handleDelete(store.id)}
                    >
                      <DeleteIcon color="red" boxSize={6} />
                      <Text>
                        {/* حذف */}
                        {t("21")}
                      </Text>
                    </Stack>
                  </Stack>
                </PopoverContent>
              </Popover>
            </SimpleGrid>
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

export default AllStoreReports;
