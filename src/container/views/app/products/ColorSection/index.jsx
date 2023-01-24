import React, { useState } from "react";
import {
  IconButton,
  InputGroup,
  InputRightElement,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import SearchIcon from "components/icon/SearchIcon";
import AllColors from "../AllColors";
import Input from "components/custom/Input";

function ColorSection() {
  const [searchInput, setSearchInput] = useState("");
  const [status, setStatus] = useState("2");
  const [filterSearch, setFilterSearch] = useState("");
  //
  const handleSubmitSearch = () => {
    setFilterSearch(searchInput);
  };
  //
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
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                handleSubmitSearch();
              }
            }}
          />
          <InputRightElement
            sx={{
              right: 0,
              left: "unset",
            }}
          >
            <IconButton
              onClick={handleSubmitSearch}
              variant="unstyled"
              icon={<SearchIcon fill="none" boxSize={5} />}
            />
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
      <AllColors status={status} filterSearch={filterSearch} />
    </>
  );
}

export default ColorSection;
