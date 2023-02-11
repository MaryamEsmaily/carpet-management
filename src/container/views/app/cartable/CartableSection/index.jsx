import React, { useState } from "react";
import {
  IconButton,
  InputGroup,
  Stack,
  InputRightElement,
} from "@chakra-ui/react";
import SearchIcon from "components/icon/SearchIcon";
import { useTranslation } from "react-i18next";
import Input from "components/custom/Input";
import AllCartable from "../AllCartable";
import FilterIcon from "components/icon/FilterIcon";

function CartableSection() {
  //
  const { t } = useTranslation();
  //
  const [searchInput, setSearchInput] = useState("");
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
        spacing={4}
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
        <IconButton
          width="60px"
          icon={<FilterIcon boxSize={5} />}
          variant="outline"
          colorScheme="gray"
        />
      </Stack>
      {/*  */}
      <AllCartable filterSearch={filterSearch} />
    </>
  );
}

export default CartableSection;
