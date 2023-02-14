const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)",
  _after: {
    opacity: 1,
  },
};

const Form = {
  variants: {
    floating: {
      container: {
        _focusWithin: {
          label: {
            ...activeLabelStyles,
          },
        },
        "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label, .is-selected-react-selected + label":
          {
            ...activeLabelStyles,
          },
        label: {
          _after: {
            content: '""',
            height: "4px",
            background: "layout-deep",
            width: "100%",
            display: "block",
            position: "absolute",
            left: "0",
            top: "50%",
            zIndex: "-1",
            opacity: 0,
          },
          top: 0,
          left: 0,
          zIndex: 1,
          position: "absolute",
          backgroundColor: "layout-deep",
          pointerEvents: "none",
          mx: 2,
          px: 2,
          my: 3,
          transformOrigin: "left top",
        },
        input: {
          borderColor: "gray.300",
          "&:focus": {
            borderColor: "green",
            shadow: "none",
          },
        },
      },
    },
  },
};

export default Form;
