import React, { useRef } from "react";
import { Input as ChakraInput } from "@chakra-ui/react";

const Input = (props) => {
  const inputRef = useRef();

  return (
    <ChakraInput
      ref={inputRef}
      placeholder=" "
      {...props}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          inputRef.current.blur();
        }
      }}
    />
  );
};

export default Input;
