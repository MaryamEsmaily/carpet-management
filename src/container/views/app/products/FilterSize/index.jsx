import React from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import SearchIcon from "components/icon/SearchIcon";

function FilterSize() {
  //
  return (
    <Stack
      borderRadius={14}
      direction="row"
      align="center"
      spacing={10}
      py={4}
      px={5}
      mt={8}
      bg="layout-over"
    >
      <InputGroup>
        <Input placeholder="جستجو .." w="full" />
        <InputRightElement
          sx={{
            left: 0,
            right: "unset",
          }}
          pointerEvents="none"
        >
          <SearchIcon fill="none" boxSize={5} />
        </InputRightElement>
      </InputGroup>
      <RadioGroup>
        <Stack direction="row" spacing={8}>
          <Radio value="1">همـه</Radio>
          <Radio value="2">فعـال</Radio>
          <Radio value="3">غیـرفعـال</Radio>
        </Stack>
      </RadioGroup>
    </Stack>
  );
}

export default FilterSize;
