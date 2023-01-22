import { Box, Divider, Flex, IconButton, Stack } from "@chakra-ui/react";
import LeftArrowIcon from "components/icon/LeftArrowIcon";
import RightArrowIcon from "components/icon/RightArrowIcon";
import React from "react";
import ReactSelect from "react-select";
//
const defaultPageNumbers = [
  { value: 8, label: "8" },
  { value: 16, label: "16" },
  { value: 32, label: "32" },
];

function Pagination({
  pageNumber,
  setPageNumber,
  pageSize,
  setPageSize,
  totalCount,
  pageNumberOptions = defaultPageNumbers,
}) {
  //
  const pageCount = Math.ceil(totalCount / pageSize);
  //
  return (
    <Box>
      <Divider mt={4} mb={2} />
      <Flex justifyContent="space-between">
        <Stack direction="row" align="center" spacing={4}>
          <Box>
            <IconButton
              icon={<RightArrowIcon />}
              variant="unstyled"
              size="sm"
              onClick={() => setPageNumber(+pageNumber - 1)}
              disabled={+pageNumber === 1}
            />
            <IconButton
              icon={<LeftArrowIcon />}
              variant="unstyled"
              size="sm"
              onClick={() => setPageNumber(+pageNumber + 1)}
              disabled={+pageNumber === pageCount}
            />
          </Box>
          <Box>
            {pageNumber ? +pageNumber : 0} از {pageCount ? pageCount : 0}
          </Box>
        </Stack>
        <ReactSelect
          defaultValue={pageNumberOptions[0]}
          onChange={(e) => setPageSize(e?.value)}
          options={pageNumberOptions}
        />
      </Flex>
    </Box>
  );
}

export default Pagination;
