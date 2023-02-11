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
import EditIcon from "components/icon/EditIcon";
import MoreIcon from "components/icon/MoreIcon";
import useToast from "hook/useToast";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import UserIcon from "components/icon/UserIcon";
import LocationIcon from "components/icon/LocationIcon";
import PhoneIcon from "components/icon/PhoneIcon";
import { postStores } from "data/postStores";
import StoreIcon from "components/icon/StoreIcon";
import StarIcon from "components/icon/StarIcon";
import {
  useDeleteStore,
  usePostAllStores,
  usePutStoreStatus,
} from "hook/api/useStoresApi";

function AllStores({ filterSearch, status }) {
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
  const deleteStore = useDeleteStore();
  const putStoreStatus = usePutStoreStatus();
  //
  // API
  // const { data: allStores, totalCount } = usePostAllStores({
  //   filterSearch: filterSearch || null,
  //   status,
  //   pageSize,
  //   pageNumber,
  // });

  // const data = React.useMemo(() => allStores?.content, [allStores?.content]);
  //

  // MOCK DATA
  const data = React.useMemo(() => postStores?.Data?.content, []);

  const totalCount = postStores?.Data?.totalCount;
  //
  const handleDelete = (id) => {
    deleteStore.mutate(
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
    putStoreStatus.mutate(
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
              columns={{ base: 1, lg: 3 }}
              spacing={6}
              position="relative"
            >
              <Stack direction="row" align="center" spacing={2}>
                <StoreIcon color="text-primary" boxSize={5} />
                <Text color="text-primary">نـام :</Text>
                <Text>{store.title}</Text>
              </Stack>
              <Stack direction="row" align="center" spacing={2}>
                <StarIcon color="text-primary" boxSize={5} />
                <Text color="text-primary">نوع انبـار :</Text>
                <Text>{store.storeType}</Text>
              </Stack>
              <Stack direction="row" align="center" spacing={2}>
                <UserIcon color="text-primary" fill="none" boxSize={5} />
                <Text color="text-primary">انبـاردار :</Text>
                <Text>{store.fullName}</Text>
              </Stack>
              <Stack direction="row" align="center" spacing={2}>
                <PhoneIcon color="text-primary" boxSize={5} />
                <Text color="text-primary">شمـاره تلفـن :</Text>
                <Text>{store.mobileNumber}</Text>
              </Stack>
              <Stack direction="row" align="center" spacing={2}>
                <LocationIcon color="text-primary" fill="none" boxSize={5} />
                <Text color="text-primary">آدرس :</Text>
                <Text>{store.address}</Text>
              </Stack>
              <Popover placement="left-start">
                <PopoverTrigger>
                  <IconButton
                    position="absolute"
                    top={3}
                    right={2}
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
                    <Link to={`store-edit/${store.id}`}>
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
                      onClick={() => handleDelete(store.id)}
                    >
                      <DeleteIcon fill="none" color="red" boxSize={6} />
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

export default AllStores;
