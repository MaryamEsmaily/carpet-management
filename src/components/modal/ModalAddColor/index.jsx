import * as React from "react";
import Modal from "components/custom/Modal";
import { Button, Image, Input, Stack, Text } from "@chakra-ui/react";
import addImage from "assets/images/add.png";
import { usePostAddProductColor } from "hook/api/apiProduct/useProductManagementApi";
import useToast from "hook/useToast";

const ModalAddColor = ({ config }) => {
  //
  const toast = useToast();
  //
  const [colorName, setColorName] = React.useState("");
  //
  const postAddProductColor = usePostAddProductColor();

  const handleAddColor = () => {
    postAddProductColor.mutate(
      { colorName },
      {
        onSuccess: (res) => {
          toast.success({ res });
          setColorName("");
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
      <Stack justify="center" align="center" spacing={6} as="form">
        <Image src={addImage} width="100px" height="100px" objectFit="cover" />
        <Text fontWeight="bold">نـام رنـگ را وارد کنیـد</Text>
        <Input
          value={colorName}
          onChange={(e) => setColorName(e.target.value)}
          variant="filled"
          size="lg"
          placeholder="نـام رنـگ"
        />
        <Stack direction="row" spacing={2} w="full">
          <Button
            w="full"
            variant="outline"
            onClick={() => {
              config.toggle();
              setColorName("");
            }}
          >
            انصراف
          </Button>
          <Button w="full" onClick={handleAddColor}>
            ثبت اطلاعات
          </Button>
        </Stack>
      </Stack>
    </Modal>
  );
};

export default ModalAddColor;
