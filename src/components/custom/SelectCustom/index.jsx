import { Box, useColorModeValue } from "@chakra-ui/react";
import RoundedCloseIcon from "components/icon/RoundedCloseIcon";
import ReactSelect from "react-select";

const MultiValueRemove = (props) => {
  if (props.data.isFixed) {
    return null;
  }
  return (
    <Box onClick={props.innerProps.onClick} sx={{ cursor: "pointer" }}>
      <RoundedCloseIcon
        sx={{ cursor: "pointer" }}
        color="#717a82"
        boxSize={5}
      />
    </Box>
  );
};

const style = ({ menuPortalBg, InputBg, selectedColor }) => ({
  control: (base) => ({
    ...base,
    height: 50,
    minHeight: 50,
    borderRadius: "8px",
    backgroundColor: InputBg,
    borderColor: InputBg,
    color: "Red",
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: "none",
  }),
  indicatorsContainer: (base) => ({
    ...base,
    display: "none",
  }),
  menuPortal: (base) => ({ ...base, zIndex: "9999" }),
  menu: (base) => ({
    ...base,
    backgroundColor: menuPortalBg,
  }),
  input: (base) => ({
    ...base,
    color: "#fff",
  }),
  multiValue: (base) => ({
    ...base,
    padding: "0 4px",
    flexDirection: "row-reverse",
    backgroundColor: selectedColor,
    borderRadius: "1rem",
    color: "red !important",
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: "#fff",
    fontWeight: "bold",
  }),
});

const SelectCustom = (props) => {
  const { isMulti, placeholder = "", onChange, value, options } = props;
  const menuPortalBg = useColorModeValue("#fff", "#202630");
  const InputBg = useColorModeValue("#F4F6F8", "#2a2e37");
  const menuBg = useColorModeValue("#6a82dd6b", "#000");
  const selectedColor = useColorModeValue("#0006", "#454F5B");

  return (
    <ReactSelect
      components={{ MultiValueRemove }}
      noOptionsMessage={() => "موردی وجود ندارد"}
      placeholder={placeholder}
      onChange={onChange}
      styles={style({ menuPortalBg, InputBg, selectedColor })}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary25: menuBg,
        },
      })}
      isMulti={!!isMulti}
      options={options}
      value={value}
    />
  );
};

export default SelectCustom;
