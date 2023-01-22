import { Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import RoundedCloseIcon from "components/icon/RoundedCloseIcon";
import SearchIcon from "components/icon/SearchIcon";
import Select from "react-select";

const DropdownIndicator = () => {
  return <SearchIcon fill="none" boxSize={5} />;
};

const style = ({ menuPortalBg }) => ({
  control: (base) => ({
    ...base,
    height: 50,
    minHeight: 50,
    borderRadius: "8px",
    backgroundColor: "#353f50",
    borderColor: "#353f50",
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
  input: (base) => ({
    ...base,
    color: "primary-text",
  }),
});

const OptionsOutsideSelect = (props) => {
  const { isMulti, value, name, placeholder, formik } = props;
  const menuPortalBg = useColorModeValue("#fff", "#202630");

  const handleRemoveValue = (label) => {
    const removedValue = formik.values?.[name].find(
      (val) => val.label === label
    );
    if (!removedValue) return;
    // onChange(
    formik.setFieldValue(
      name,
      formik.values?.[name]?.filter((val) => val.label !== label)
    );
  };

  return (
    <div>
      <Select
        components={{ DropdownIndicator }}
        placeholder={placeholder}
        noOptionsMessage={() => "موردی وجود ندارد"}
        menuPortalTarget={document.body}
        styles={style({ menuPortalBg })}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: "#000",
          },
        })}
        {...props}
        onChange={(option) => {
          formik.setFieldValue(
            // eslint-disable-next-line no-restricted-globals
            name,
            option !== null
              ? option.map((item) => {
                  return { value: item.value, label: item.label };
                })
              : []
          );
        }}
        controlShouldRenderValue={!isMulti}
      />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {isMulti
          ? value.map((val) => (
              <Stack
                direction="row"
                align="center"
                key={val.value}
                bg="green"
                fontSize="xs"
                borderRadius="full"
                px={2}
                py={1}
                ml={1}
                mt={2}
              >
                <Text>{val.label}</Text>
                <Box
                  onClick={() => handleRemoveValue(val.label)}
                  name={val.value}
                  sx={{ cursor: "pointer" }}
                >
                  <RoundedCloseIcon color="white" boxSize={4} />
                </Box>
              </Stack>
            ))
          : null}
      </Box>
    </div>
  );
};

export default OptionsOutsideSelect;
