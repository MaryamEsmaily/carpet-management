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
  Stack,
  Text,
} from "@chakra-ui/react";
import Pagination from "components/Pagination";
import DeleteIcon from "components/icon/DeleteIcon";
import EditIcon from "components/icon/EditIcon";
import MoreIcon from "components/icon/MoreIcon";
import useToast from "hook/useToast";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import UserIcon from "components/icon/UserIcon";
import { postOrders } from "data/postOrders";
import {
  useDeleteOrders,
  usePostAllOrders,
  usePutOrdersStatus,
} from "hook/api/useOrdersApi";
import AddNewOrderIcon from "components/icon/AddNewOrderIcon";
import CalenderIcon from "components/icon/CalenderIcon";
import LampIcon from "components/icon/LampIcon";
import LayerIcon from "components/icon/LayerIcon";

function AllOrders({ filterSearch, filterValue }) {
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
  const deleteOrder = useDeleteOrders();
  const putOrderStatus = usePutOrdersStatus();
  //
  // API
  // const { data: allOrder, totalCount } = usePostAllOrders({
  //   filterSearch: filterSearch || null,
  //   fullName: filterValue?.fullName || null,
  //   store: filterValue?.store || null,
  //   code: filterValue?.code || null,
  //   startDate: filterValue?.startDate || null,
  //   endDate: filterValue?.endDate || null,
  //   sizes: filterValue?.sizes || null,
  //   colors: filterValue?.colors || null,
  //   orderStatus: filterValue?.orderStatus || null,
  //   orderTotalStatus: filterValue?.orderTotalStatus || null,
  //   pageSize,
  //   pageNumber,
  // });

  // const data = React.useMemo(() => allOrder?.content, [allOrder?.content]);
  //

  // MOCK DATA
  const data = React.useMemo(() => postOrders?.Data?.content, []);

  const totalCount = postOrders?.Data?.totalCount;
  //
  const handleDelete = (id) => {
    deleteOrder.mutate(
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
    putOrderStatus.mutate(
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
        {data?.map((order, index) => (
          <GridItem key={order.id} colSpan={1}>
            <Stack
              borderRadius={14}
              bg={index % 2 === 0 ? "layout" : "layout-over"}
              p={6}
              spacing={10}
            >
              <Stack direction={"row"} justify="space-between">
                <Stack
                  direction={{ base: "column", xl: "row" }}
                  justify="space-between"
                  spacing={7}
                >
                  <Stack direction="row" align="center" spacing={2}>
                    <AddNewOrderIcon
                      color="text-primary"
                      fill="none"
                      boxSize={5}
                    />
                    <Text color="text-primary">کـد سفارش :</Text>
                    <Text>{order.orderCode}</Text>
                  </Stack>
                  <Stack direction="row" align="center" spacing={2}>
                    <LampIcon color="text-primary" boxSize={5} />
                    <Text color="text-primary">توسط :</Text>
                    <Text>{order.author}</Text>
                  </Stack>
                  <Stack direction="row" align="center" spacing={2}>
                    <UserIcon color="text-primary" boxSize={5} />
                    <Text color="text-primary">نام متعامل :</Text>
                    <Text>{order.fullName}</Text>
                  </Stack>
                  <Stack direction="row" align="center" spacing={2}>
                    <CalenderIcon color="text-primary" boxSize={5} />
                    <Text color="text-primary">تاریـخ ایجاد :</Text>
                    <Text>{order.date}</Text>
                  </Stack>
                  <Stack direction="row" align="center" spacing={2}>
                    <LayerIcon color="text-primary" boxSize={5} />
                    <Text color="text-primary">آیتم های موجود :</Text>
                    <Text>{order.availableCount}</Text>
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
                        isChecked={order.status === "0"}
                        onClick={() =>
                          handleStatus({
                            id: order?.id,
                            status: order?.status === "0" ? "1" : "0",
                          })
                        }
                      >
                        <Text fontSize="md" mx={1}>
                          {/* غیـرفعـال */}
                          {t("13")}
                        </Text>
                      </Radio>
                      <Link to={`order-edit/${order.id}`}>
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
                        onClick={() => handleDelete(order.id)}
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

export default AllOrders;
