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
import matchSorter from "utils/matchSorter";

const AllColors = ({ searchInput, status }) => {
  //
  const toast = useToast();
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
  //   pageSize,
  //   pageNumber,
  // });

  // const data = React.useMemo(() => {
  //   const list = productColors?.content;
  //   if (!searchInput && status === "2") return list;
  //   else if (searchInput) return matchSorter(list, searchInput, ["colorName"]);
  //   else return list.filter((item) => item.status === status);
  // }, [searchInput, status]);
  //

  // MOCK DATA
  const data = React.useMemo(() => {
    const list = postProductColorsData?.Data?.content;
    if (!searchInput && status === "2") return list;
    else if (searchInput) return matchSorter(list, searchInput, ["colorName"]);
    else return list.filter((item) => item.status === status);
  }, [searchInput, status]);

  const totalCount = postProductColorsData?.Data?.totalCount;
  //
  const handleDelete = (id) => {
    deleteProductColor.mutate(
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
  const handleStatus = (id) => {
    putProductColorStatus.mutate(
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
  //
  return (
    <Box>
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
                  onClick={() => handleDelete(color.id)}
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
                  isChecked={color.status === "0"}
                  onClick={() => handleStatus(color.id)}
                >
                  <Text fontSize="sm">غیـرفعـال</Text>
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
