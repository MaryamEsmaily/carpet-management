import * as React from "react";
import Modal from "components/custom/Modal";
import { Button, Image, Input, Stack, Text } from "@chakra-ui/react";
import addImage from "assets/images/add.png";
import { usePostAddProductSize } from "hook/api/apiProduct/useProductManagementApi";
import useToast from "hook/useToast";

const ModalAddSize = ({ config }) => {
  //
  const toast = useToast();
  //
  const [size, setSize] = React.useState("");
  //
  const postAddProductSize = usePostAddProductSize();

  const handleAddSize = () => {
    postAddProductSize.mutate(
      { size },
      {
        onSuccess: (res) => {
          toast.success({ res });
          setSize("");
          config.toggle();
        },
        onError: (err) => {
          toast.error({ err });
        },
      }
    );
  };
  //
  return (
    <Modal config={config}>
      <Stack justify="center" align="center" spacing={6}>
        <Image src={addImage} width="100px" height="100px" objectFit="cover" />
        <Text fontWeight="bold">سایـز را وارد کنیـد</Text>
        <Input
          variant="filled"
          size="lg"
          placeholder="سایـز"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
        <Stack direction="row" spacing={2} w="full">
          <Button
            w="full"
            variant="outline"
            onClick={() => {
              config.toggle();
              setSize("");
            }}
          >
            انصراف
          </Button>
          <Button w="full" onClick={handleAddSize}>
            ثبت اطلاعات
          </Button>
        </Stack>
      </Stack>
    </Modal>
  );
};

export default ModalAddSize;
