import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { IconButton, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useState } from "react";
import Input from "../Input";

function PasswordInput(props) {
  //
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  //
  return (
    <InputGroup>
      <Input pr={12} type={show ? "text" : "password"} {...props} />
      <InputLeftElement
        sx={{
          right: 0,
          left: "unset",
        }}
      >
        <IconButton
          icon={
            !show ? (
              <ViewIcon color="gray" fontSize="large" />
            ) : (
              <ViewOffIcon color="gray" fontSize="large" />
            )
          }
          borderRadius="lg"
          variant="link"
          onClick={handleClick}
        />
      </InputLeftElement>
    </InputGroup>
  );
}

export default PasswordInput;
