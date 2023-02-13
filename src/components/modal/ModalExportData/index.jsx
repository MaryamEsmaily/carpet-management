import * as React from "react";
import Modal from "components/custom/Modal";
import {
  Button,
  Divider,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import ExportIcon from "components/icon/ExportIcon";
import WarningIcon from "components/icon/WarningIcon";

const ModalExportData = ({ config }) => {
  //
  const handleExport = () => {};
  //
  return (
    <Modal config={config}>
      <Stack justify="center" spacing={6} as="form">
        <Stack direction="row" align="center">
          <ExportIcon boxSize={5} />
          <Text fontWeight="bold">خروجـی</Text>
        </Stack>
        <Divider />
        <RadioGroup>
          <Stack direction="row" justifyContent="space-around">
            <Radio defaultChecked value="2">
              EXCEL
            </Radio>
            <Radio value="1">PDF</Radio>
          </Stack>
        </RadioGroup>
        <Stack direction="row">
          <WarningIcon color="orange" boxSize={5} />
          <Text fontSize="xs">
            در صورتی که لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
            چاپ می باشد ...
          </Text>
        </Stack>
        <Stack direction="row" spacing={2} w="full">
          <Button
            w="full"
            variant="outline"
            onClick={() => {
              config.toggle();
            }}
          >
            انصراف
          </Button>
          <Button w="full" onClick={handleExport}>
            خروجی
          </Button>
        </Stack>
      </Stack>
    </Modal>
  );
};

export default ModalExportData;
