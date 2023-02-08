import React, { useState } from "react";
import {
  IconButton,
  InputGroup,
  Stack,
  RadioGroup,
  Radio,
  InputRightElement,
} from "@chakra-ui/react";
import SearchIcon from "components/icon/SearchIcon";
import { useTranslation } from "react-i18next";
import Input from "components/custom/Input";
import AllStores from "../AllStores";

function StoresSection() {
  //
  const { t } = useTranslation();
  //
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
        spacing={6}
        py={4}
        px={5}
        mt={8}
        bg="layout-over"
        align="center"
      >
        <InputGroup>
          <Input
            // "جستجو .."
            placeholder={t("10")}
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
              icon={<SearchIcon boxSize={5} />}
            />
          </InputRightElement>
        </InputGroup>
        <RadioGroup onChange={setStatus} value={status}>
          <Stack direction="row" spacing={8}>
            <Radio defaultChecked value="2">
              {/* همـه */}
              {t("11")}
            </Radio>
            <Radio value="1">
              {/* فعـال */}
              {t("12")}
            </Radio>
            <Radio value="0">
              {/*غ یـرفعـال*/}
              {t("13")}
            </Radio>
          </Stack>
        </RadioGroup>
      </Stack>
      {/*  */}
      <AllStores status={status} filterSearch={filterSearch} />
    </>
  );
}

export default StoresSection;
