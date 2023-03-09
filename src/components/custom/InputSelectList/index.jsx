import { Box, Flex, Input, Text, useColorModeValue } from "@chakra-ui/react";
import RoundedCloseIcon from "components/icon/RoundedCloseIcon";
import React, { useState } from "react";

function InputSelectList({ name, onChange, value, ...props }) {
  //
  const InputBg = useColorModeValue("#edf2f7", "#2a2e37");
  //
  const [inputValue, setInputValue] = useState("");
  //
  return (
    <Flex
      gap={1}
      dir="ltr"
      align="center"
      px={4}
      height={50}
      rounded="lg"
      bg={InputBg}
      width="100%"
      overflowX="auto"
      border={props.isInvalid ? "2px solid red" : ""}
      {...props}
    >
      {value?.map((item) => (
        <Box
          key={item}
          display="flex"
          border="1px solid"
          rounded="full"
          alignItems="center"
          fontSize="sm"
          p={1}
        >
          <Text pl={1}>{item}</Text>
          <RoundedCloseIcon
            onClick={() => {
              if (onChange)
                onChange({
                  target: {
                    value: value.filter((prevItem) => prevItem !== item),
                    name,
                  },
                });
            }}
            sx={{ cursor: "pointer" }}
            color="#717a82"
            boxSize={5}
          />
        </Box>
      ))}

      <Input
        name={name}
        isRequired={false}
        type="number"
        sx={{
          all: "unset",
          flexGrow: "1!important",
        }}
        _focusVisible={{ border: "none" }}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.code === "Space" && onChange && !!inputValue) {
            onChange({
              target: { value: [...value, inputValue], name },
            });
            setInputValue("");
          }
        }}
      />
    </Flex>
  );
}

export default InputSelectList;
