import {
  Box,
  Stack,
  Text,
  useColorModeValue,
  useTheme,
} from "@chakra-ui/react";
import RoundedCloseIcon from "components/icon/RoundedCloseIcon";
import SearchIcon from "components/icon/SearchIcon";
import Select from "react-select";

const DropdownIndicator = () => {
  return <SearchIcon fill="none" boxSize={5} />;
};

const style = ({ menuPortalBg, InputBg, direction }) => ({
  control: (base) => ({
    ...base,
    height: 50,
    minHeight: 50,
    borderRadius: "8px",
    backgroundColor: InputBg,
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
  menuPortal: (provided) => {
    return {
      ...provided,
      [direction === "ltr" ? "left" : "right"]: provided.left,
      [direction === "ltr" ? "right" : "left"]: "unset",
      zIndex: 9999,
    };
  },
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
  const { isMulti, value, name, placeholder, onChange } = props;
  const menuPortalBg = useColorModeValue("#fff", "#202630");
  const InputBg = useColorModeValue("#edf2f7", "#353f50");
  const menuBg = useColorModeValue("#6a82dd6b", "#000");
  //
  const { direction } = useTheme();
  //
  const handleRemoveValue = ({ label, targetValue }) => {
    if (onChange)
      onChange({
        target: {
          value: value.filter(
            (item) => !(item.label === label && item.value === targetValue)
          ),
          name,
        },
      });
  };

  return (
    <>
      <Select
        components={{ DropdownIndicator }}
        placeholder={placeholder}
        noOptionsMessage={() => "موردی وجود ندارد"}
        menuPortalTarget={document.body}
        styles={style({ menuPortalBg, InputBg, direction })}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: menuBg,
          },
        })}
        {...props}
        onChange={(option) => {
          if (onChange)
            onChange({
              target: { value: option, name },
            });
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
          ? value?.map((val) => (
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
                <Text color="#fff">{val.label}</Text>
                <Box
                  onClick={() =>
                    handleRemoveValue({
                      label: val.label,
                      targetValue: val.value,
                    })
                  }
                  name={val.value}
                  sx={{ cursor: "pointer" }}
                >
                  <RoundedCloseIcon color="white" boxSize={4} />
                </Box>
              </Stack>
            ))
          : null}
      </Box>
    </>
  );
};

export default OptionsOutsideSelect;
