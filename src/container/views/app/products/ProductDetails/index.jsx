import React from "react";
import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Stack,
  Text,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Radio,
} from "@chakra-ui/react";
import AddNewOrderIcon from "components/icon/AddNewOrderIcon";
import CalenderIcon from "components/icon/CalenderIcon";
import ColorFilterIcon from "components/icon/ColorFilterIcon";
import EraserIcon from "components/icon/EraserIcon";
import MoreBorderedIcon from "components/icon/MoreBorderedIcon";
import ReportIcon from "components/icon/ReportIcon";
import UserIcon from "components/icon/UserIcon";
import { postProductDetailsData } from "data/postProductDetailsData";
import ImageSlider from "../ImageSlider";
import {
  useDeleteProduct,
  usePostProductDetails,
  usePutProductStatus,
} from "hook/api/useProductManagementApi";
import { Link, useParams } from "react-router-dom";
import EditIcon from "components/icon/EditIcon";
import DeleteIcon from "components/icon/DeleteIcon";
import useToast from "hook/useToast";

function ProductDetails() {
  //
  const toast = useToast();
  //
  const deleteProduct = useDeleteProduct();
  const putProductStatus = usePutProductStatus();
  //
  // API
  // const { id } = useParams();
  // const { data: productDetails } = usePostProductDetails({ id });
  // //
  // const data = React.useMemo(() => {
  //   return productDetails?.content;
  // }, [productDetails?.content]);
  //
  // MOCK DATA
  const data = React.useMemo(() => {
    return postProductDetailsData?.Data?.content;
  }, []);
  //
  const handleDelete = (id) => {
    deleteProduct.mutate(
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
    putProductStatus.mutate(
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
    <Box mt={8}>
      <Grid
        templateColumns="repeat(13,minmax(0,1fr))"
        borderRadius={24}
        bg="layout"
        gap={14}
        p={5}
      >
        <GridItem colSpan={6}>
          <ImageSlider images={data?.images} />
        </GridItem>
        <GridItem colSpan={7}>
          <Stack direction="row" justify="space-between" align="center">
            <Text fontSize={24}>{data?.title}</Text>
            <Popover placement="left-start">
              <PopoverTrigger>
                <PopoverTrigger>
                  <Stack direction="row" justifyContent="space-between">
                    <IconButton
                      icon={<MoreBorderedIcon fill="none" boxSize={5} />}
                      variant="unstyled"
                    />
                  </Stack>
                </PopoverTrigger>
              </PopoverTrigger>
              <PopoverContent
                sx={{ width: "140px", borderRadius: "8px", p: 4 }}
              >
                <PopoverArrow />
                <Stack spacing={4}>
                  <Radio
                    size="lg"
                    isChecked={data?.status === "0"}
                    onClick={() =>
                      handleStatus({
                        id: data?.id,
                        status: data?.status === "0" ? "1" : "0",
                      })
                    }
                  >
                    غیـرفعـال
                  </Radio>
                  <Stack
                    cursor="pointer"
                    direction="row"
                    align="center"
                    spacing={3}
                  >
                    <EditIcon boxSize={5} />
                    <Text>ویرایش</Text>
                  </Stack>
                  <Stack
                    cursor="pointer"
                    direction="row"
                    align="center"
                    spacing={3}
                    onClick={() => handleDelete(data?.id)}
                  >
                    <DeleteIcon fill="none" color="red" boxSize={6} />
                    <Text>حذف</Text>
                  </Stack>
                </Stack>
              </PopoverContent>
            </Popover>
          </Stack>

          <Divider variant="dashed" my={5} />
          <Stack spacing={8} mt={8}>
            <Stack direction="row">
              <Stack direction="row" align="center" spacing={3} width={120}>
                <AddNewOrderIcon color="text-primary" fill="none" boxSize={5} />
                <Text fontWeight="bold" color="text-primary">
                  کـد طـرح :
                </Text>
              </Stack>
              <Text>{data?.code}</Text>
            </Stack>
            <Stack direction="row">
              <Stack direction="row" align="center" spacing={3} width={120}>
                <ColorFilterIcon color="text-primary" boxSize={5} />
                <Text fontWeight="bold" color="text-primary">
                  رنـگ :
                </Text>
              </Stack>
              {data?.colors?.map((item, index) => (
                <Text key={item.value}>
                  {item.label}{" "}
                  <Text
                    as="span"
                    display={
                      index === data?.colors.length - 1 ? "none" : "unset"
                    }
                  >
                    -
                  </Text>
                </Text>
              ))}
            </Stack>
            <Stack direction="row">
              <Stack direction="row" align="center" spacing={3} width={120}>
                <EraserIcon color="text-primary" boxSize={5} />
                <Text fontWeight="bold" color="text-primary">
                  سایـز :
                </Text>
              </Stack>
              {data?.sizes?.map((item, index) => (
                <Text key={item.value}>
                  {item.label} متـری{" "}
                  <Text
                    as="span"
                    display={
                      index === data?.sizes.length - 1 ? "none" : "unset"
                    }
                  >
                    -
                  </Text>
                </Text>
              ))}
            </Stack>
            <Stack direction="row" align="start">
              <Stack
                direction="row"
                align="center"
                whiteSpace="nowrap"
                spacing={3}
                width={120}
              >
                <ReportIcon fill="none" color="text-primary" boxSize={5} />
                <Text fontWeight="bold" color="text-primary">
                  توضیحـات :
                </Text>
              </Stack>
              <Text
                flexGrow={1}
                textAlign="justify"
                maxW="380px"
                lineHeight={1.9}
              >
                {data?.description}
              </Text>
            </Stack>
          </Stack>
        </GridItem>
      </Grid>
      <Divider variant="dashed" my={5} />
      {/* info */}
      <Flex justifyContent="space-between">
        <Stack direction="row" spacing={5}>
          <Stack direction="row" align="center" spacing={1}>
            <UserIcon color="text-primary" boxSize={5} />
            <Text color="text-primary">ساخته شده توسط :</Text>
            <Text>{data?.author}</Text>
          </Stack>
          <Stack direction="row" align="center" spacing={1}>
            <CalenderIcon color="text-primary" boxSize={5} />
            <Text color="text-primary">در تـاریخ :</Text>
            <Text>{data?.createData}</Text>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={5}>
          <Stack direction="row" align="center" spacing={1}>
            <UserIcon color="text-primary" boxSize={5} />
            <Text color="text-primary">آخرین تغییـر توسط :</Text>
            <Text dir="ltr">{data?.changeByAuthor}</Text>
          </Stack>
          <Stack direction="row" align="center" spacing={1}>
            <CalenderIcon color="text-primary" boxSize={5} />
            <Text color="text-primary">در تـاریخ :</Text>
            <Text dir="ltr">{data?.lastChangeDate}</Text>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
}

export default ProductDetails;
