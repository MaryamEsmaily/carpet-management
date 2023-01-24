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
import sizeImage from "assets/images/size-image.png";
import Pagination from "components/Pagination";
import DeleteIcon from "components/icon/DeleteIcon";
import { postProductSizesData } from "data/postProductSizesData";
import {
  useDeleteProductSize,
  usePostProductSizes,
  usePutProductSizeStatus,
} from "hook/api/apiProduct/useProductManagementApi";
import useToast from "hook/useToast";
import React, { useState } from "react";
import matchSorter from "utils/matchSorter";

function AllSizes({ searchInput, status }) {
  //
  const toast = useToast();
  // for pagination
  const pageNumberOptions = [
    { value: 15, label: "15" },
    { value: 30, label: "30" },
    { value: 45, label: "45" },
  ];

  const [pageSize, setPageSize] = useState(8);
  const [pageNumber, setPageNumber] = useState(1);
  //
  //
  const deleteProductSize = useDeleteProductSize();
  const putProductSizeStatus = usePutProductSizeStatus();
  //

  //
  // API
  // const { data: productSizes, totalCount } = usePostProductSizes({
  //   pageSize,
  //   pageNumber,
  // });

  // const data = React.useMemo(() => {
  //   const list = productSizes?.content;
  //   if (!searchInput && status === "2") return list;
  //   else if (searchInput) return matchSorter(list, searchInput, ["size"]);
  //   else return list.filter((item) => item.status === status);
  // }, [searchInput, status]);
  //

  // MOCK DATA
  const data = React.useMemo(() => {
    const list = postProductSizesData?.Data?.content;
    if (!searchInput && status === "2") return list;
    else if (searchInput) return matchSorter(list, searchInput, ["size"]);
    else return list.filter((item) => item.status === status);
  }, [searchInput, status]);

  const totalCount = postProductSizesData?.Data?.totalCount;
  //
  const handleDelete = (id) => {
    deleteProductSize.mutate(
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
    putProductSizeStatus.mutate(
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
        {data?.map((item) => (
          <GridItem key={item.id} colSpan={1}>
            <Stack
              bg="layout"
              p={5}
              borderRadius={14}
              textAlign="center"
              spacing={4}
            >
              <Stack justify="center" align="center" spacing={5}>
                <Image src={sizeImage} w="80px" h="80px" objectFit="cover" />
                <Stack direction="row" align="center" fontWeight="bold">
                  <Text color="text-primary">سـایــز :</Text>
                  <Text>{item.size}</Text>
                </Stack>
              </Stack>
              <Divider />
              <Stack
                direction="row"
                align="center"
                justifyContent="space-between"
                fontSize={14}
              >
                <Button
                  variant="unstyled"
                  size="sm"
                  fontWeight="medium"
                  onClick={() => handleDelete(item.id)}
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
                  isChecked={item.status === "0"}
                  onClick={() => handleStatus(item.id)}
                >
                  غیـرفعـال
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
}

export default AllSizes;
