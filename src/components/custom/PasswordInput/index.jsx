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
      <Input type={show ? "text" : "password"} {...props} />
      <InputLeftElement>
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
