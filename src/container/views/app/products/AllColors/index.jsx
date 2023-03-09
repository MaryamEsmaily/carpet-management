import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  Image,
  Radio,
  Stack,
  Text,
} from "@chakra-ui/react";
import colorImage from "assets/images/color-image.png";
import Pagination from "components/Pagination";
import DeleteIcon from "components/icon/DeleteIcon";
import { postProductColorsData } from "data/postProductColorsData";
import {
  useDeleteProductColor,
  usePostProductColors,
  usePutProductColorStatus,
} from "hook/api/useProductManagementApi";
import useToast from "hook/useToast";
import React, { useState } from "react";
import useModal from "hook/useModal";
import ModalConfirmDelete from "components/modal/ModalConfirmDelete";

const AllColors = ({ filterSearch, status }) => {
  //
  const toast = useToast();
  //
  const { toggle, config } = useModal();
  const [id, setId] = useState("");
  // for pagination
  const pageNumberOptions = [
    { value: 15, label: "15" },
    { value: 30, label: "30" },
    { value: 45, label: "45" },
  ];

  const [pageSize, setPageSize] = useState(pageNumberOptions?.[0].value);
  const [pageNumber, setPageNumber] = useState(1);
  //
  const deleteProductColor = useDeleteProductColor();
  const putProductColorStatus = usePutProductColorStatus();
  //
  // API
  // const { data: productColors, totalCount } = usePostProductColors({
  //   filterSearch: filterSearch || null,
  //   status,
  //   pageSize,
  //   pageNumber,
  // });

  // const data = React.useMemo(
  //   () => productColors?.content,
  //   [productColors?.content]
  // );
  //

  // MOCK DATA
  const data = React.useMemo(() => postProductColorsData?.Data?.content, []);

  const totalCount = postProductColorsData?.Data?.totalCount;
  //
  const handleStatus = ({ id, status }) => {
    putProductColorStatus.mutate(
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
    <Box>
      <ModalConfirmDelete config={config} id={id} cb={deleteProductColor} />
      <Grid mt={5} templateColumns="repeat(5,minmax(0,1fr))" gap={7}>
        {data?.map((color) => (
          <GridItem key={color.id} colSpan={1}>
            <Stack
              bg="layout"
              p={5}
              borderRadius={14}
              textAlign="center"
              spacing={4}
            >
              <Stack justify="center" align="center" spacing={5}>
                <Image src={colorImage} w="80px" h="80px" objectFit="cover" />
                <Stack direction="row" align="center" fontWeight="bold">
                  <Text color="text-primary">نـــام :</Text>
                  <Text>{color.colorName}</Text>
                </Stack>
              </Stack>
              <Divider />
              <Stack
                direction="row"
                align="center"
                justifyContent="space-between"
                fontSize={14}
                spacing={5}
              >
                <Button
                  variant="unstyled"
                  fontWeight="medium"
                  onClick={() => {
                    toggle();
                    setId(color.id);
                  }}
                >
                  <Stack
                    direction="row"
                    align="center"
                    justifyContent="space-between"
                    spacing={2}
                  >
                    <DeleteIcon fill="none" color="red" boxSize={5} />
                    <Text>حذف</Text>
                  </Stack>
                </Button>
                <Radio
                  isChecked={color.status === "1"}
                  onClick={() =>
                    handleStatus({
                      id: color.id,
                      status: color.status === "0" ? "1" : "0",
                    })
                  }
                >
                  <Text fontSize="sm">فعـال</Text>
                </Radio>
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
};

export default AllColors;
