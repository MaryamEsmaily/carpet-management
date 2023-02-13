import { Box, useColorModeValue, useTheme } from "@chakra-ui/react";
import RoundedCloseIcon from "components/icon/RoundedCloseIcon";
import ReactSelect from "react-select";

const MultiValueRemove = (props) => {
  if (props.data.isFixed) {
    return null;
  }
  return (
    <Box
      onClick={props.innerProps.onClick}
      display="flex"
      sx={{ cursor: "pointer" }}
    >
      <RoundedCloseIcon
        sx={{ cursor: "pointer" }}
        color="#717a82"
        boxSize={5}
      />
    </Box>
  );
};

const style = ({ menuPortalBg, InputBg, selectedColor, direction }) => ({
  control: (base) => ({
    ...base,
    height: 50,
    minHeight: 50,
    borderRadius: "8px",
    backgroundColor: InputBg,
    borderColor: InputBg,
    width: "100%",
    overflowX: "auto",
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: "none",
  }),
  indicatorsContainer: (base) => ({
    ...base,
    display: "none",
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
  multiValue: (base) => ({
    ...base,
    padding: "0 4px",
    flexDirection: "row-reverse",
    backgroundColor: selectedColor,
    borderRadius: "1rem",
    color: "red !important",
    alignItems: "center",
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: "#fff",
    fontWeight: "bold",
  }),
});

const SelectCustom = (props) => {
  const { isMulti, placeholder = "", name, onChange } = props;
  const menuPortalBg = useColorModeValue("#fff", "#2a2e37");
  const InputBg = useColorModeValue("#edf2f7", "#2a2e37");
  const menuBg = useColorModeValue("#6a82dd6b", "#000");
  const selectedColor = useColorModeValue("#0006", "#454F5B");
  //
  const { direction } = useTheme();
  //
  return (
    <ReactSelect
      components={{ MultiValueRemove }}
      placeholder={placeholder}
      menuPortalTarget={document.body}
      noOptionsMessage={() => "موردی وجود ندارد"}
      styles={style({ menuPortalBg, InputBg, selectedColor, direction })}
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
      isMulti={isMulti}
    />
  );
};

export default SelectCustom;
