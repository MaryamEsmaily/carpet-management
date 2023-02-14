import { Box, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import bannerImage from "assets/images/banner-image.png";

function BannerSection({ data }) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      borderRadius="14px"
      bg="linear-gradient(90deg, #0069475e 100%, rgba(56,142,60,1) 100%)"
      p={6}
    >
      <SimpleGrid columns={{ base: 1, lg: 2 }}>
        <Stack direction="row" align="center">
          <Box width={1} height={1} mr={1} bg="text-secondary" />
          <Text whiteSpace="nowrap">تاریخ ایجـاد سفـارش :</Text>
          <Text whiteSpace="nowrap">{data?.orderCreateDate}</Text>
        </Stack>
        <Stack direction="row" align="center">
          <Box width={1} height={1} mr={1} bg="text-secondary" />
          <Text whiteSpace="nowrap">تاریخ آخرین بروز رسانـی سفـارش</Text>
          <Text whiteSpace="nowrap">{data?.lastChangeDate}</Text>
        </Stack>
        <Stack direction="row" align="center">
          <Box width={1} height={1} mr={1} bg="text-secondary" />
          <Text whiteSpace="nowrap">کارمنـدی که سفـارش را ایجـاد کرده :</Text>
          <Text whiteSpace="nowrap">{data?.creatorName}</Text>
        </Stack>
        <Stack direction="row" align="center">
          <Box width={1} height={1} mr={1} bg="text-secondary" />
          <Text whiteSpace="nowrap">
            کارمنـدی که سفـارش را تغییر وضعیـت داده :{" "}
          </Text>
          <Text whiteSpace="nowrap">{data?.editorName}</Text>
        </Stack>
      </SimpleGrid>
      <Image src={bannerImage} height="120px" objectFit="cover" />
    </Stack>
  );
}

export default BannerSection;
