import * as React from "react";
import Modal from "components/custom/Modal";
import { Button, Image, Stack, Text } from "@chakra-ui/react";
import deleteImage from "assets/images/close.png";
import useToast from "hook/useToast";
import { useDeleteEmployee } from "hook/api/useEmployeesApi";

const ModalDeleteEmployee = ({ config, id }) => {
  //
  const toast = useToast();
  //
  const deleteEmployee = useDeleteEmployee();

  const handleDelete = () => {
    deleteEmployee.mutate(
      { id },
      {
        onSuccess: (res) => {
          toast.success({ res });
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
        <Image
          src={deleteImage}
          width="100px"
          height="100px"
          objectFit="cover"
        />
        <Text fontWeight="bold">آیـا از حـذف اطمینـان داریـد ؟</Text>
        <Stack direction="row" spacing={2} w="full">
          <Button
            w="full"
            variant="outline"
            colorScheme="gray"
            onClick={() => {
              config.toggle();
            }}
          >
            انصراف
          </Button>
          <Button colorScheme="red" w="full" onClick={handleDelete}>
            حـذف شـود
          </Button>
        </Stack>
      </Stack>
    </Modal>
  );
};

export default ModalDeleteEmployee;
