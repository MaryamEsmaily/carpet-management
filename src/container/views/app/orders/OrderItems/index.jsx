import {
  Box,
  Divider,
  Grid,
  GridItem,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Radio,
  Stack,
  Text,
} from "@chakra-ui/react";
import Pagination from "components/Pagination";
import DeleteIcon from "components/icon/DeleteIcon";
import EditIcon from "components/icon/EditIcon";
import MoreIcon from "components/icon/MoreIcon";
import useToast from "hook/useToast";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  useDeleteOrderItem,
  usePostOrderItems,
  usePutOrderItemStatus,
} from "hook/api/useOrdersApi";
import AddNewOrderIcon from "components/icon/AddNewOrderIcon";
import TruckIcon from "components/icon/TruckIcon";
import StoreIcon from "components/icon/StoreIcon";
import SimpleReportIcon from "components/icon/SimpleReportIcon";
import ChartIcon from "components/icon/ChartIcon";
import ReportIcon from "components/icon/ReportIcon";
import ColorIcon from "components/icon/ColorIcon";
import EraserIcon from "components/icon/EraserIcon";
import { postOrderItems } from "data/postOrderItems";
import ModalConfirmDelete from "components/modal/ModalConfirmDelete";
import useModal from "hook/useModal";

function OrderItems({ filterSearch }) {
  //
  const { t } = useTranslation();
  //
  const { toggle, config } = useModal();
  const [id, setId] = useState("");
  //
  const [collapse, setCollapse] = useState("");
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
  const deleteOrderItem = useDeleteOrderItem();
  const putOrderItemStatus = usePutOrderItemStatus();
  //

  // API
  // const { id } = useParams();
  // const { data: OrderItems, totalCount } = usePostOrderItems({
  //   id,
  //   pageSize,
  //   pageNumber,
  // });

  // const data = React.useMemo(() => OrderItems?.content, [OrderItems?.content]);
  //

  // MOCK DATA
  const data = React.useMemo(() => postOrderItems?.Data?.content, []);

  const totalCount = postOrderItems?.Data?.totalCount;
  //
  const handleStatus = ({ id, status }) => {
    putOrderItemStatus.mutate(
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
    <>
      <ModalConfirmDelete config={config} id={id} cb={deleteOrderItem} />
      <Box fontSize="sm">
        <Stack direction="row" align="center">
          <ReportIcon boxSize={5} />
          <Text fontWeight="bold">آیتـم هـا</Text>
        </Stack>
        <Grid mt={5} templateColumns="repeat(1,minmax(0,1fr))" gap={7}>
          {data?.map((OrderItem, index) => (
            <GridItem key={OrderItem.id} colSpan={1}>
              <Stack
                borderRadius={14}
                px={10}
                py={4}
                bg={index % 2 === 0 ? "layout" : "layout-over"}
              >
                <Stack direction="row" spacing={40}>
                  <Stack
                    flexGrow={1}
                    onClick={() => {
                      setCollapse({ id: OrderItem.id, show: !collapse.show });
                    }}
                    direction={{ base: "column", xl: "row" }}
                    justify="space-between"
                    cursor="pointer"
                  >
                    <Stack direction="row" align="center" spacing={2}>
                      <AddNewOrderIcon
                        color="text-primary"
                        fill="none"
                        boxSize={5}
                      />
                      <Text color="text-primary">کـد طـرح :</Text>
                      <Text>{OrderItem.code}</Text>
                    </Stack>
                    <Stack direction="row" align="center" spacing={2}>
                      <ColorIcon color="text-primary" boxSize={5} />
                      <Text color="text-primary">نـام رنـگ :</Text>
                      <Text>{OrderItem.color}</Text>
                    </Stack>
                    <Stack direction="row" align="center" spacing={2}>
                      <EraserIcon color="text-primary" boxSize={5} />
                      <Text color="text-primary">نـام سایـز :</Text>
                      <Text>{OrderItem.size}</Text>
                    </Stack>
                  </Stack>
                  <Popover placement="left-start">
                    <PopoverTrigger>
                      <IconButton
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
                          isChecked={OrderItem.status === "1"}
                          onClick={() =>
                            handleStatus({
                              id: OrderItem?.id,
                              status: OrderItem?.status === "0" ? "1" : "0",
                            })
                          }
                        >
                          <Text fontSize="md" mx={1}>
                            {/* فعـال */}
                            {t("13")}
                          </Text>
                        </Radio>
                        <Link to={`OrderItem-edit/${OrderItem.id}`}>
                          <Stack
                            cursor="pointer"
                            direction="row"
                            align="center"
                            spacing={3}
                          >
                            <EditIcon boxSize={5} />
                            <Text>
                              {/* ویرایش */}
                              {t("20")}
                            </Text>
                          </Stack>
                        </Link>
                        <Stack
                          cursor="pointer"
                          direction="row"
                          align="center"
                          spacing={3}
                          onClick={() => {
                            toggle();
                            setId(OrderItem.id);
                          }}
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
                </Stack>
                <Stack
                  spacing={6}
                  display={
                    collapse.id === OrderItem.id && collapse.show
                      ? "block"
                      : "none"
                  }
                  pb={2}
                >
                  <Divider variant="dashed" />
                  <Stack direction="row" justifyContent="space-evenly">
                    <Stack direction="row" align="center" spacing={2}>
                      <TruckIcon color="text-primary" boxSize={5} />
                      <Text color="text-primary">در حال ارسال :</Text>
                      <Text>{OrderItem.send}</Text>
                    </Stack>
                    <Stack direction="row" align="center" spacing={2}>
                      <StoreIcon color="text-primary" boxSize={5} />
                      <Text color="text-primary">در انبـار :</Text>
                      <Text>{OrderItem.inStore}</Text>
                    </Stack>
                    <Stack direction="row" align="center" spacing={2}>
                      <SimpleReportIcon color="text-primary" boxSize={5} />
                      <Text color="text-primary">در حال بافت :</Text>
                      <Text>{OrderItem.preparation}</Text>
                    </Stack>
                    <Stack direction="row" align="center" spacing={2}>
                      <ChartIcon color="text-primary" boxSize={5} />
                      <Text color="text-primary">در حـال آهـار :</Text>
                      <Text>{OrderItem.inProgress}</Text>
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
    </>
  );
}

export default OrderItems;
