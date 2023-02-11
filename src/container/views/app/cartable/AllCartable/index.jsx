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
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import UserIcon from "components/icon/UserIcon";
import { postCartable } from "data/postCartable";
import {
  useDeleteCartable,
  usePostAllCartable,
  usePutCartableStatus,
} from "hook/api/useCartableApi";
import AddNewOrderIcon from "components/icon/AddNewOrderIcon";
import CalenderIcon from "components/icon/CalenderIcon";
import LampIcon from "components/icon/LampIcon";
import LayerIcon from "components/icon/LayerIcon";
import TruckIcon from "components/icon/TruckIcon";
import StoreIcon from "components/icon/StoreIcon";
import SimpleReportIcon from "components/icon/SimpleReportIcon";
import ChartIcon from "components/icon/ChartIcon";

function AllCartable({ filterSearch }) {
  //
  const { t } = useTranslation();

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
  const deleteCartable = useDeleteCartable();
  const putCartableStatus = usePutCartableStatus();
  //
  // API
  // const { data: allCartable, totalCount } = usePostAllCartable({
  //   filterSearch: filterSearch || null,
  //   pageSize,
  //   pageNumber,
  // });

  // const data = React.useMemo(() => allCartable?.content, [allCartable?.content]);
  //

  // MOCK DATA
  const data = React.useMemo(() => postCartable?.Data?.content, []);

  const totalCount = postCartable?.Data?.totalCount;
  //
  const handleDelete = (id) => {
    deleteCartable.mutate(
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
    putCartableStatus.mutate(
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
        {data?.map((cartable, index) => (
          <GridItem key={cartable.id} colSpan={1}>
            <Box
              borderRadius={14}
              bg={index % 2 === 0 ? "layout" : "layout-over"}
              p={6}
              spacing={6}
            >
              <Stack direction={"row"} justify="space-between">
                <Stack
                  direction={{ base: "column", xl: "row" }}
                  justify="space-between"
                  id={index}
                  onClick={() => {
                    setCollapse({ id: cartable.id, show: !collapse.show });
                  }}
                  spacing={7}
                  cursor="pointer"
                >
                  <Stack direction="row" align="center" spacing={2}>
                    <AddNewOrderIcon
                      color="text-primary"
                      fill="none"
                      boxSize={5}
                    />
                    <Text color="text-primary">کـد سفارش :</Text>
                    <Text>{cartable.orderCode}</Text>
                  </Stack>
                  <Stack direction="row" align="center" spacing={2}>
                    <LampIcon color="text-primary" boxSize={5} />
                    <Text color="text-primary">توسط :</Text>
                    <Text>{cartable.author}</Text>
                  </Stack>
                  <Stack direction="row" align="center" spacing={2}>
                    <UserIcon color="text-primary" boxSize={5} />
                    <Text color="text-primary">نام متعامل :</Text>
                    <Text>{cartable.fullName}</Text>
                  </Stack>
                  <Stack direction="row" align="center" spacing={2}>
                    <CalenderIcon color="text-primary" boxSize={5} />
                    <Text color="text-primary">تاریـخ ایجاد :</Text>
                    <Text>{cartable.date}</Text>
                  </Stack>
                  <Stack direction="row" align="center" spacing={2}>
                    <LayerIcon color="text-primary" boxSize={5} />
                    <Text color="text-primary">آیتم های موجود :</Text>
                    <Text>{cartable.availableCount}</Text>
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
                        isChecked={cartable.status === "0"}
                        onClick={() =>
                          handleStatus({
                            id: cartable?.id,
                            status: cartable?.status === "0" ? "1" : "0",
                          })
                        }
                      >
                        <Text fontSize="md" mx={1}>
                          {/* غیـرفعـال */}
                          {t("13")}
                        </Text>
                      </Radio>
                      <Link to={`Cartable-edit/${cartable.id}`}>
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
                        onClick={() => handleDelete(cartable.id)}
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
              <Box
                display={
                  collapse.id === cartable.id && collapse.show
                    ? "block"
                    : "none"
                }
              >
                <Divider variant="dashed" my={6} />
                <Stack direction="row" justifyContent="center" spacing={6}>
                  <Stack direction="row" align="center" spacing={2}>
                    <TruckIcon color="text-primary" boxSize={5} />
                    <Text color="text-primary">در حال ارسال :</Text>
                    <Text>{cartable.send}</Text>
                  </Stack>
                  <Stack direction="row" align="center" spacing={2}>
                    <StoreIcon color="text-primary" boxSize={5} />
                    <Text color="text-primary">در انبـار :</Text>
                    <Text>{cartable.inStore}</Text>
                  </Stack>
                  <Stack direction="row" align="center" spacing={2}>
                    <SimpleReportIcon color="text-primary" boxSize={5} />
                    <Text color="text-primary">در حال بافت :</Text>
                    <Text>{cartable.preparation}</Text>
                  </Stack>
                  <Stack direction="row" align="center" spacing={2}>
                    <ChartIcon color="text-primary" boxSize={5} />
                    <Text color="text-primary">در حـال آهـار :</Text>
                    <Text>{cartable.inProgress}</Text>
                  </Stack>
                </Stack>
              </Box>
            </Box>
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

export default AllCartable;
