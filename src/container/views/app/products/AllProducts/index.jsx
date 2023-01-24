import {
  Box,
  Grid,
  GridItem,
  IconButton,
  Image,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Radio,
  Stack,
  Text,
} from "@chakra-ui/react";
import Pagination from "components/Pagination";
import AddNewOrderIcon from "components/icon/AddNewOrderIcon";
import CardIcon from "components/icon/CardIcon";
import ColorFilterIcon from "components/icon/ColorFilterIcon";
import DeleteIcon from "components/icon/DeleteIcon";
import EditIcon from "components/icon/EditIcon";
import EraserIcon from "components/icon/EraserIcon";
import MoreIcon from "components/icon/MoreIcon";
import { postAllProductsData } from "data/postAllProductsData";
import {
  useDeleteProduct,
  usePostAllProducts,
  usePutProductStatus,
} from "hook/api/useProductManagementApi";
import useToast from "hook/useToast";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function AllProducts({ filterValues, filterSearch, status }) {
  //
  const { t } = useTranslation();
  //
  const toast = useToast();
  // for pagination
  const pageNumberOptions = [
    { value: 8, label: "8" },
    { value: 16, label: "16" },
    { value: 32, label: "32" },
  ];

  const [pageSize, setPageSize] = useState(pageNumberOptions?.[0].value);
  const [pageNumber, setPageNumber] = useState(1);
  //
  const deleteProduct = useDeleteProduct();
  const putProductStatus = usePutProductStatus();
  //
  // API
  // const { data: allProducts, totalCount } = usePostAllProducts({
  //   code: filterValues?.code || null,
  //   colors: filterValues?.colors || null,
  //   sizes: filterValues?.sizes || null,
  //   filterSearch: filterSearch || null,
  //   status,
  //   pageSize,
  //   pageNumber,
  // });

  // const data = React.useMemo(
  //   () => allProducts?.content,
  //   [allProducts?.content]
  // );
  //

  // MOCK DATA
  const data = React.useMemo(() => postAllProductsData?.Data?.content, []);

  const totalCount = postAllProductsData?.Data?.totalCount;
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
  const handleStatus = (id) => {
    putProductStatus.mutate(
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

  return (
    <Box fontSize="sm">
      <Grid mt={5} templateColumns="repeat(2,minmax(0,1fr))" gap={7}>
        {data?.map((product) => (
          <GridItem key={product.id} colSpan={{ base: 2, lg: 1 }}>
            <Grid
              templateColumns="repeat(7,minmax(0,1fr))"
              direction="row"
              borderRadius={14}
              bg="layout"
              p={4}
              gap={4}
            >
              <GridItem colSpan={{ base: 7, xl: 3 }}>
                <Image
                  src={product.image}
                  objectFit="cover"
                  width="100%"
                  h={200}
                  borderRadius={14}
                />
              </GridItem>
              <GridItem colSpan={{ base: 7, xl: 4 }}>
                <Stack justifyContent="space-between">
                  <Box textAlign="end">
                    <Popover placement="left-start">
                      <PopoverTrigger>
                        <IconButton
                          icon={<MoreIcon boxSize={5} />}
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
                            isChecked={product.status === "0"}
                            onClick={() => handleStatus(product.id)}
                          >
                            <Text fontSize="md" mx={1}>
                              {/* غیـرفعـال */}
                              {t("13")}
                            </Text>
                          </Radio>
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
                          <Stack
                            cursor="pointer"
                            direction="row"
                            align="center"
                            spacing={3}
                            onClick={() => handleDelete(product.id)}
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
                  </Box>
                  <Stack spacing={4}>
                    <Stack direction="row" align="center" spacing={2}>
                      <CardIcon color="text-primary" boxSize={5} />
                      <Text color="text-primary">
                        {/* نـام محصول : */}
                        {t("22")}
                      </Text>
                      <Link to={`product-details/${product.id}`}>
                        <Text
                          _hover={{ textDecoration: "underline" }}
                          noOfLines={1}
                        >
                          {product.label}
                        </Text>
                      </Link>
                    </Stack>
                    <Stack direction="row" align="center" spacing={2}>
                      <AddNewOrderIcon
                        color="text-primary"
                        fill="none"
                        boxSize={5}
                      />
                      <Text color="text-primary">
                        {/* کـد طـرح : */}
                        {t("23")}
                      </Text>
                      <Text>{product.code}</Text>
                    </Stack>
                    <Stack direction="row" align="center" spacing={2}>
                      <ColorFilterIcon color="text-primary" boxSize={5} />
                      <Text color="text-primary">
                        {/* رنـگ : */}
                        {t("24")}
                      </Text>
                      {product?.colors?.map((item, index) => (
                        <Text key={index}>
                          {item}{" "}
                          <Text
                            as="span"
                            display={
                              index === product?.colors?.length - 1
                                ? "none"
                                : "unset"
                            }
                          >
                            -
                          </Text>
                        </Text>
                      ))}
                      <Text>{product.color}</Text>
                    </Stack>
                    <Stack direction="row" align="center" spacing={2}>
                      <EraserIcon color="text-primary" boxSize={5} />
                      <Text color="text-primary">سایـز :</Text>
                      {product?.sizes?.map((item, index) => (
                        <Text key={index}>
                          {item}
                          {/* متـری */}
                          {t("25")}
                          <Text
                            as="span"
                            display={
                              index === product?.sizes?.length - 1
                                ? "none"
                                : "unset"
                            }
                          >
                            -
                          </Text>
                        </Text>
                      ))}
                    </Stack>
                  </Stack>
                </Stack>
              </GridItem>
            </Grid>
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

export default AllProducts;
