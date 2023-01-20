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
import sizeImage from "assets/images/size-image.jpg";
import Pagination from "components/custom/Pagination";
import DeleteIcon from "components/icon/DeleteIcon";
import React, { useState } from "react";

function AllSizes() {
  // for pagination
  const [pageSize, setPageSize] = useState(8);
  const [pageNumber, setPageNumber] = useState(1);
  //
  const sizes = [
    {
      id: 1,
      size: "۲۴  متــری",
    },
    {
      id: 2,
      size: "۲۴  متــری",
    },
    {
      id: 3,
      size: "۲۴  متــری",
    },
    {
      id: 4,
      size: "۲۴  متــری",
    },
    {
      id: 5,
      size: "۲۴  متــری",
    },
    {
      id: 6,
      size: "۲۴  متــری",
    },
  ];

  // const sizes = useGetAllSizes()

  return (
    <Box>
      <Grid mt={5} templateColumns="repeat(5,minmax(0,1fr))" gap={7}>
        {sizes.map((color) => (
          <GridItem key={color.id} colSpan={1}>
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
                  <Text>{color.size}</Text>
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

export default AllSizes;
