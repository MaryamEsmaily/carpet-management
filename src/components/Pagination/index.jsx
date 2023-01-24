import {
  Box,
  Divider,
  Flex,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import ArrowDownIcon from "components/icon/ArrowDownIcon";
import LeftArrowIcon from "components/icon/LeftArrowIcon";
import RightArrowIcon from "components/icon/RightArrowIcon";
import { t } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import ReactSelect from "react-select";
//
const defaultPageNumbers = [
  { value: 8, label: "8" },
  { value: 16, label: "16" },
  { value: 32, label: "32" },
];

const DropdownIndicator = () => {
  return <ArrowDownIcon boxSize={3} />;
};

const style = ({ menuPortalBg, InputBg }) => ({
  control: (base) => ({
    ...base,
    height: 40,
    minHeight: 40,
    borderRadius: "8px",
    backgroundColor: "transparent",
    borderColor: InputBg,
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: "none",
  }),
  indicatorsContainer: (base) => ({
    ...base,
    margin: "0 12px",
  }),
  menuPortal: (base) => ({ ...base, zIndex: "9999" }),
  menu: (base) => ({
    ...base,
    backgroundColor: menuPortalBg,
  }),
});

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
  const { t } = useTranslation();
  //
  const menuPortalBg = useColorModeValue("#fff", "#202630");
  const InputBg = useColorModeValue("#718096", "#3A404B");
  const menuBg = useColorModeValue("#6a82dd6b", "#000");

  return (
    <Box mb={5}>
      <Divider mt={4} mb={2} />
      <Flex justifyContent="space-between">
        <Stack direction="row" align="center" spacing={4}>
          <Box dir="rtl">
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
          <Box dir="rtl">
            {pageNumber ? +pageNumber : 0} از {pageCount ? pageCount : 0}
          </Box>
        </Stack>
        <ReactSelect
          components={{ DropdownIndicator }}
          isSearchable={false}
          defaultValue={pageNumberOptions[0]}
          onChange={(e) => setPageSize(e?.value)}
          options={pageNumberOptions}
          styles={style({ menuPortalBg, InputBg })}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: menuBg,
            },
          })}
          getOptionLabel={({ label }) => (
            <Stack
              direction="row"
              align="center"
              justify="space-evenly"
              spacing={1}
              color="text-secondary"
            >
              {/* تعداد در هر صفحه : */}
              <Text>{t("26")}</Text>
              <Text>{label}</Text>
            </Stack>
          )}
        />
      </Flex>
    </Box>
  );
}

export default Pagination;
