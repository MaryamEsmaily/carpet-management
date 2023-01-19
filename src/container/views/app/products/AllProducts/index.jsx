import {
  Box,
  Grid,
  GridItem,
  IconButton,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import firstProduct from "assets/images/product-1.avif";
import AddNewOrderIcon from "components/icon/AddNewOrderIcon";
import CardIcon from "components/icon/CardIcon";
import ColorFilterIcon from "components/icon/ColorFilterIcon";
import EraserIcon from "components/icon/EraserIcon";
import MoreIcon from "components/icon/MoreIcon";
import React from "react";

function AllProducts() {
  const products = [
    {
      id: 1,
      label: "فـرش دست بافـت کاشـان",
      code: "۴۵۹۲۴۱۰۷۸۴",
      color: "خاکستـری  -  طلایـی",
      size: "۲۴ متـری  -  ۱۲ متـری",
      image: firstProduct,
    },
    {
      id: 2,
      label: "فـرش دست بافـت کاشـان",
      code: "۴۵۹۲۴۱۰۷۸۴",
      color: "خاکستـری  -  طلایـی",
      size: "۲۴ متـری  -  ۱۲ متـری",
      image: firstProduct,
    },
    {
      id: 3,
      label: "فـرش دست بافـت کاشـان",
      code: "۴۵۹۲۴۱۰۷۸۴",
      color: "خاکستـری  -  طلایـی",
      size: "۲۴ متـری  -  ۱۲ متـری",
      image: firstProduct,
    },
    {
      id: 4,
      label: "فـرش دست بافـت کاشـان",
      code: "۴۵۹۲۴۱۰۷۸۴",
      color: "خاکستـری  -  طلایـی",
      size: "۲۴ متـری  -  ۱۲ متـری",
      image: firstProduct,
    },
  ];
  // const products = useGetAllProducts()
  return (
    <Grid mt={5} templateColumns="repeat(2,minmax(0,1fr))" gap={7}>
      {products.map((product) => (
        <GridItem colSpan={1}>
          <Stack
            direction="row"
            borderRadius={14}
            key={product.id}
            bg="layout"
            p={4}
            spacing={3}
          >
            <Image
              src={product.image}
              objectFit="cover"
              width={400}
              height={200}
              borderRadius={14}
            />
            <Stack w="full" justifyContent="space-between">
              <Box w="full" textAlign="end">
                <IconButton
                  icon={<MoreIcon boxSize={5} />}
                  variant="unstyled"
                />
              </Box>
              <Stack spacing={4}>
                <Stack direction="row" align="center" spacing={1}>
                  <CardIcon color="text-primary" boxSize={5} />
                  <Text color="text-primary">نـام محصول :</Text>
                  <Text>{product.label}</Text>
                </Stack>
                <Stack direction="row" align="center" spacing={1}>
                  <AddNewOrderIcon
                    color="text-primary"
                    fill="white"
                    boxSize={5}
                  />
                  <Text color="text-primary">کـد طـرح :</Text>
                  <Text>{product.code}</Text>
                </Stack>
                <Stack direction="row" align="center" spacing={1}>
                  <ColorFilterIcon color="text-primary" boxSize={5} />
                  <Text color="text-primary">رنـگ :</Text>
                  <Text>{product.color}</Text>
                </Stack>
                <Stack direction="row" align="center" spacing={1}>
                  <EraserIcon color="text-primary" boxSize={5} />
                  <Text color="text-primary">سایـز :</Text>
                  <Text>{product.size}</Text>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </GridItem>
      ))}
    </Grid>
  );
}

export default AllProducts;
