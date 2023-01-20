import { Box, Divider, Flex, IconButton, Stack, Text } from "@chakra-ui/react";
import AddNewOrderIcon from "components/icon/AddNewOrderIcon";
import CalenderIcon from "components/icon/CalenderIcon";
import ColorFilterIcon from "components/icon/ColorFilterIcon";
import EraserIcon from "components/icon/EraserIcon";
import MoreBorderedIcon from "components/icon/MoreBorderedIcon";
import ReportIcon from "components/icon/ReportIcon";
import UserIcon from "components/icon/UserIcon";
import React from "react";
import ImageSlider from "../ImageSlider";

function ProductDetails() {
  return (
    <Box mt={8}>
      <Stack direction="row" borderRadius={24} bg="layout" p={5} spacing={10}>
        <ImageSlider />
        <Box w="full">
          <Stack direction="row" justifyContent="space-between">
            <Text fontSize={24}>product.label</Text>
            <IconButton
              icon={<MoreBorderedIcon fill="none" boxSize={5} />}
              variant="unstyled"
            />
          </Stack>
          <Divider variant="dashed" my={5} />
          <Stack spacing={8} mt={8}>
            <Stack direction="row">
              <Stack direction="row" align="center" spacing={3} width={120}>
                <AddNewOrderIcon
                  color="text-primary"
                  fill="white"
                  boxSize={5}
                />
                <Text fontWeight="bold" color="text-primary">
                  کـد طـرح :
                </Text>
              </Stack>
              <Text>{"product.code"}</Text>
            </Stack>
            <Stack direction="row">
              <Stack direction="row" align="center" spacing={3} width={120}>
                <ColorFilterIcon color="text-primary" boxSize={5} />
                <Text fontWeight="bold" color="text-primary">
                  رنـگ :
                </Text>
              </Stack>
              <Text>{"product.color"}</Text>
            </Stack>
            <Stack direction="row">
              <Stack direction="row" align="center" spacing={3} width={120}>
                <EraserIcon color="text-primary" boxSize={5} />
                <Text fontWeight="bold" color="text-primary">
                  سایـز :
                </Text>
              </Stack>
              <Text>{"product.size"}</Text>
            </Stack>
            <Stack direction="row">
              <Stack direction="row" align="center" spacing={3} width={120}>
                <ReportIcon fill="none" color="text-primary" boxSize={5} />
                <Text fontWeight="bold" color="text-primary">
                  توضیحـات :
                </Text>
              </Stack>
              <Text>{"product.size"}</Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Divider variant="dashed" my={5} />
      {/* info */}
      <Flex justifyContent="space-between">
        <Stack direction="row" spacing={5}>
          <Stack direction="row" align="center" spacing={1}>
            <UserIcon color="text-primary" boxSize={5} />
            <Text color="text-primary">ساخته شده توسط :</Text>
            <Text>product.label</Text>
          </Stack>
          <Stack direction="row" align="center" spacing={1}>
            <CalenderIcon color="text-primary" boxSize={5} />
            <Text color="text-primary">در تـاریخ :</Text>
            <Text>product.label</Text>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={5}>
          <Stack direction="row" align="center" spacing={1}>
            <UserIcon color="text-primary" boxSize={5} />
            <Text color="text-primary">آخرین تغییـر توسط :</Text>
            <Text>product.label</Text>
          </Stack>
          <Stack direction="row" align="center" spacing={1}>
            <CalenderIcon color="text-primary" boxSize={5} />
            <Text color="text-primary">در تـاریخ :</Text>
            <Text>product.label</Text>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
}

export default ProductDetails;
