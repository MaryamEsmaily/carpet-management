import {
  Box,
  IconButton,
  Modal as ModalChakra,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import CloseIcon from "components/icon/CloseIcon";
import React from "react";

function Modal({ children, config, header }) {
  //
  const { isShowing, toggle } = config;
  //
  return (
    <ModalChakra
      isOpen={isShowing}
      onClose={toggle}
      autoFocus={false}
      isCentered
      scrollBehavior="inside"
      size="sm"
    >
      <ModalOverlay />
      <ModalContent mx={4} bg="layout" borderRadius={38}>
        {header ? <ModalHeader>{header}</ModalHeader> : null}
        <Box w="full" textAlign="end">
          <IconButton
            onClick={toggle}
            mx={4}
            mt={2}
            icon={<CloseIcon fill="none" boxSize={6} />}
            variant="unstyled"
          />
        </Box>
        <ModalBody px={8} pb={8}>
          {children}
        </ModalBody>
      </ModalContent>
    </ModalChakra>
  );
}

export default Modal;
