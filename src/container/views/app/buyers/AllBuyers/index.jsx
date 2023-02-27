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
import MessagesIcon from "components/icon/MessagesIcon";
import UserIcon from "components/icon/UserIcon";
import LocationIcon from "components/icon/LocationIcon";
import PhoneIcon from "components/icon/PhoneIcon";
import { postBuyers } from "data/postBuyers";
import {
  useDeleteBuyer,
  usePostAllBuyers,
  usePutBuyerStatus,
} from "hook/api/useBuyersApi";
import useModal from "hook/useModal";
import ModalConfirmDelete from "components/modal/ModalConfirmDelete";

function AllBuyers({ filterSearch, status }) {
  //
  const { t } = useTranslation();
  //
  const { toggle, config } = useModal();
  const [id, setId] = useState("");
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
  const deleteBuyer = useDeleteBuyer();
  const putBuyerStatus = usePutBuyerStatus();
  //
  // API
  // const { data: allBuyers, totalCount } = usePostAllBuyers({
  //   filterSearch: filterSearch || null,
  //   status,
  //   pageSize,
  //   pageNumber,
  // });

  // const data = React.useMemo(
  //   () => allBuyers?.content,
  //   [allBuyers?.content]
  // );
  //

  // MOCK DATA
  const data = React.useMemo(() => postBuyers?.Data?.content, []);

  const totalCount = postBuyers?.Data?.totalCount;
  //
  const handleStatus = ({ id, status }) => {
    putBuyerStatus.mutate(
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
      <ModalConfirmDelete config={config} id={id} cb={deleteBuyer} />
      <Box fontSize="sm">
        <Grid mt={5} templateColumns="repeat(1,minmax(0,1fr))" gap={7}>
          {data?.map((buyer, index) => (
            <GridItem key={buyer.id} colSpan={1}>
              <SimpleGrid
                borderRadius={14}
                bg={index % 2 === 0 ? "layout" : "layout-over"}
                p={6}
                columns={{ base: 1, lg: 2 }}
                spacing={6}
                position="relative"
              >
                <Stack direction="row" align="center" spacing={2}>
                  <UserIcon color="text-primary" boxSize={5} />
                  <Text color="text-primary">نـام و نـام خـانوادگی :</Text>
                  <Text noOfLines={1}>{buyer.fullName}</Text>
                </Stack>
                <Stack direction="row" align="center" spacing={2}>
                  <PhoneIcon color="text-primary" boxSize={5} />
                  <Text color="text-primary">شمـاره همـراه :</Text>
                  <Text>{buyer.mobileNumber}</Text>
                </Stack>
                <Stack direction="row" align="center" spacing={2}>
                  <MessagesIcon color="text-primary" boxSize={5} />
                  <Text color="text-primary">پست الکترونیک :</Text>
                  <Text>{buyer.email}</Text>
                </Stack>
                <Stack direction="row" align="center" spacing={2}>
                  <LocationIcon color="text-primary" fill="none" boxSize={5} />
                  <Text color="text-primary">آدرس :</Text>
                  <Text>{buyer.address}</Text>
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
                        isChecked={buyer.status === "0"}
                        onClick={() =>
                          handleStatus({
                            id: buyer?.id,
                            status: buyer?.status === "0" ? "1" : "0",
                          })
                        }
                      >
                        <Text fontSize="md" mx={1}>
                          {/* غیـرفعـال */}
                          {t("13")}
                        </Text>
                      </Radio>
                      <Link to={`buyer-edit/${buyer.id}`}>
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
                          setId(buyer.id);
                        }}
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
    </>
  );
}

export default AllBuyers;
