import * as React from "react";
import Modal from "components/custom/Modal";
import {
  FormControl,
  IconButton,
  Image,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useClipboard,
} from "@chakra-ui/react";
import lockImage from "assets/images/lock.png";
import useToast from "hook/useToast";
import Input from "components/custom/Input";
import { usePostNewPassword } from "hook/api/useEmployeesApi";
import CopyIcon from "components/icon/CopyIcon";

const ModalChangeEmployeePassword = ({ config, id = "1" }) => {
  //
  const toast = useToast();
  const { data } = usePostNewPassword({ id });
  const newPass = data?.newPass;
  //
  const { onCopy } = useClipboard(newPass ?? "!!");
  //
  return (
    <Modal config={config}>
      <Stack justify="center" align="center" spacing={6} as="form">
        <Image src={lockImage} width="100px" height="100px" objectFit="cover" />
        <Text fontWeight="bold">رمـز عبـور جدیــد شمــا</Text>
        <FormControl>
          <InputGroup>
            <Input value={newPass} />
            <InputRightElement>
              <IconButton
                variant="unstyled"
                onClick={() => {
                  onCopy();
                  toast.success("با موفقیت کپی شد.");
                }}
                icon={<CopyIcon boxSize={5} />}
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </Stack>
    </Modal>
  );
};

export default ModalChangeEmployeePassword;
