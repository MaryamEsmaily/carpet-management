import React from "react";
import {
  Checkbox,
  Divider,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Switch,
  Text,
} from "@chakra-ui/react";
import FilterIcon from "components/icon/FilterIcon";
import SearchIcon from "components/icon/SearchIcon";

function FilterProduct() {
  return (
    <Stack
      borderRadius={14}
      direction="row"
      spacing={6}
      py={3}
      px={8}
      mt={4}
      bg="layout-over"
    >
      <InputGroup>
        <Input placeholder="جستجو .." w={670} />
        <InputRightElement
          sx={{
            left: 3,
            right: "unset",
          }}
          pointerEvents="none"
        >
          <SearchIcon fill="white" boxSize={5} />
        </InputRightElement>
      </InputGroup>

      <IconButton
        width={88}
        icon={<FilterIcon />}
        variant="outline"
        colorScheme="gray"
      />
      <Checkbox>همه</Checkbox>
      <Divider orientation="vertical" height="40px" variant="dashed" />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
      >
        <Text whiteSpace="nowrap">غیر فعال</Text>
        <Switch />
        <Text>فعال</Text>
      </Stack>
    </Stack>
  );
}

export default FilterProduct;
