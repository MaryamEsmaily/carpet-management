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
} from "hook/api/useProductManagementApi";
import useToast from "hook/useToast";
import React, { useState } from "react";
import useModal from "hook/useModal";
import ModalConfirmDelete from "components/modal/ModalConfirmDelete";

function AllSizes({ filterSearch, status }) {
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
  //
  const deleteProductSize = useDeleteProductSize();
  const putProductSizeStatus = usePutProductSizeStatus();
  //

  //
  // API
  // const { data: productSizes, totalCount } = usePostProductSizes({
  //   filterSearch: filterSearch || null,
  //   status,
  //   pageSize,
  //   pageNumber,
  // });

  // const data = React.useMemo(
  //   () => productSizes?.content,
  //   [productSizes?.content]
  // );
  //

  // MOCK DATA
  const data = React.useMemo(() => postProductSizesData?.Data?.content, []);

  const totalCount = postProductSizesData?.Data?.totalCount;
  //
  const handleStatus = ({ id, status }) => {
    putProductSizeStatus.mutate(
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
      <ModalConfirmDelete config={config} id={id} cb={deleteProductSize} />
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
                  spacing={5}
                >
                  <Button
                    variant="unstyled"
                    fontWeight="medium"
                    onClick={() => {
                      toggle();
                      setId(item.id);
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
                    isChecked={item.status === "0"}
                    onClick={() =>
                      handleStatus({
                        id: item?.id,
                        status: item?.status === "0" ? "1" : "0",
                      })
                    }
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
    </>
  );
}

export default AllSizes;
