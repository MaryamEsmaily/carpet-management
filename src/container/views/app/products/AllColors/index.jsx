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
import colorImage from "assets/images/color-image.jpg";
import Pagination from "components/custom/Pagination";
import DeleteIcon from "components/icon/DeleteIcon";
import React, { useState } from "react";

function AllColors() {
  // for pagination
  const [pageSize, setPageSize] = useState(8);
  const [pageNumber, setPageNumber] = useState(1);
  //
  const colors = [
    {
      id: 1,
      colorName: "خــاکستـــری",
    },
    {
      id: 2,
      colorName: "خــاکستـــری",
    },
    {
      id: 3,
      colorName: "خــاکستـــری",
    },
    {
      id: 4,
      colorName: "خــاکستـــری",
    },
    {
      id: 5,
      colorName: "خــاکستـــری",
    },
    {
      id: 6,
      colorName: "خــاکستـــری",
    },
  ];

  // const colors = useGetAllColors()

  return (
    <Box>
      <Grid mt={5} templateColumns="repeat(5,minmax(0,1fr))" gap={7}>
        {colors.map((color) => (
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
              >
                <Button variant="unstyled" size="sm" fontWeight="medium">
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
                <Radio>غیـرفعـال</Radio>
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
        totalCount={18}
      />
    </Box>
  );
}

export default AllColors;
