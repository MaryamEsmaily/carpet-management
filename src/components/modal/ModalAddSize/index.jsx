// package import
import * as React from "react";
import Modal from "components/custom/Modal";
import { Button, Image, Input, Stack, Text } from "@chakra-ui/react";
import addImage from "assets/images/add.png";

const ModalAddSize = ({ config }) => {
  return (
    <Modal config={config}>
      <Stack justify="center" align="center" spacing={6}>
        <Image src={addImage} width="100px" height="100px" objectFit="cover" />
        <Text fontWeight="bold">سایـز را وارد کنیـد</Text>
        <Input variant="filled" size="lg" placeholder="سایـز" />
        <Stack direction="row" spacing={2} w="full">
          <Button w="full" variant="outline">
            انصراف
          </Button>
          <Button w="full">ثبت اطلاعات</Button>
        </Stack>
      </Stack>
    </Modal>
  );
};

export default ModalAddSize;
