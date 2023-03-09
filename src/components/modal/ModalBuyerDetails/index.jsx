import * as React from "react";
import Modal from "components/custom/Modal";
import { SimpleGrid, Stack, Text } from "@chakra-ui/react";
import MessagesIcon from "components/icon/MessagesIcon";
import PhoneIcon from "components/icon/PhoneIcon";
import LocationFillIcon from "components/icon/LocationFillIcon";
import InfoIcon from "components/icon/InfoIcon";

const ModalBuyerDetails = ({ config, data }) => {
  //
  return (
    <Modal config={config} borderRadius="14px" size="md">
      <Stack borderRadius={14} spacing={6} position="relative">
        <Text fontWeight="bolder" fontSize={16} ps={5}>
          {data?.fullName}
        </Text>
        <Stack direction="row" align="center" spacing={2}>
          <MessagesIcon color="text-primary" StackSize={5} />
          <Text color="text-primary" width={120}>
            پست الکترونیک :
          </Text>
          <Text>{data?.email}</Text>
        </Stack>
        <Stack direction="row" spacing={2}>
          <PhoneIcon color="text-primary" boxSize={5} />
          <Text color="text-primary" noOfLines={1} width={120}>
            شمـاره همـراه :
          </Text>
          <SimpleGrid
            columns={2}
            direction="row"
            spacing={1}
            wordBreak="break-word"
          >
            {data?.mobileNumbers.map((item, index) => (
              <Text>
                {item}
                {data?.mobileNumbers.length >= 1 &&
                index + 1 < data?.mobileNumbers.length
                  ? "،"
                  : null}
              </Text>
            ))}
          </SimpleGrid>
        </Stack>
        <Stack direction="row" spacing={2}>
          <LocationFillIcon color="text-primary" fill="none" boxSize={5} />
          <Text color="text-primary" width={120}>
            آدرس :
          </Text>
          <Text>{data?.address}</Text>
        </Stack>
        <Stack direction="row" align="center" spacing={2}>
          <InfoIcon color="text-primary" fill="none" boxSize={4} />
          <Text color="text-primary" width={120}>
            توضیحات :
          </Text>
          <Text>{data?.description ?? "-"}</Text>
        </Stack>
      </Stack>
    </Modal>
  );
};

export default ModalBuyerDetails;
