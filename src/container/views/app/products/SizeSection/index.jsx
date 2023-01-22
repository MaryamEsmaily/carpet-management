import React, { useState } from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import SearchIcon from "components/icon/SearchIcon";
import AllSizes from "../AllSizes";

function SizeSection() {
  const [searchInput, setSearchInput] = useState("");
  const [status, setStatus] = useState("2");

  return (
    <>
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
          <Input
            placeholder="جستجو .."
            w="full"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
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
        <RadioGroup onChange={setStatus} value={status}>
          <Stack direction="row" spacing={8}>
            <Radio defaultChecked value="2">
              همـه
            </Radio>
            <Radio value="1">فعـال</Radio>
            <Radio value="0">غیـرفعـال</Radio>
          </Stack>
        </RadioGroup>
      </Stack>
      <AllSizes searchInput={searchInput} status={status} />
    </>
  );
}

export default SizeSection;
