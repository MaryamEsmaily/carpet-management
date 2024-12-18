import { mode } from "@chakra-ui/theme-tools";

function variantGhost(props) {
  const { colorScheme: c } = props;

  return {
    bg: "transparent",
    color: mode(`${c}.400`, `${c}.400`)(props),
    _hover: {
      bg: mode(`${c}.100`, `${c}.100`)(props),
    },
    _active: {
      bg: mode(`${c}.100`, `${c}.100`)(props),
    },
  };
}

function variantOutline(props) {
  const { colorScheme: c } = props;
  const borderColor = mode(`${c}.500`, `${c}.500`)(props);
  return {
    border: "1px solid",
    borderColor: c === "gray" ? borderColor : "currentColor",
    ...variantGhost(props),
    color: mode(`${c}.500`, "#fff")(props),
    _hover: {
      bg: mode(`${c}.100`, `${c}.500`)(props),
    },
  };
}

function variantSolid(props) {
  const { colorScheme: c } = props;

  return {
    background: mode(`${c}.500`, `${c}.500`)(props),
    color: "#fff",
    _hover: {
      bg: mode(`${c}.400`, `${c}.400`)(props),
    },
    _active: { bg: mode(`${c}.200`, `${c}.400`)(props) },
  };
}

function variantLink(props) {
  const { colorScheme: c } = props;
  return {
    borderColor: mode(`${c}.500`, `${c}.500`)(props),
    color: "#fff",
  };
}

const Button = {
  sizes: {
    lg: {
      fontSize: "lg",
      h: "60px",
    },
    md: {
      fontSize: "14px",
      h: "46px",
    },
    sm: {
      fontSize: "2xs",
      h: "30px",
    },
  },
  variants: {
    ghost: variantGhost,
    outline: variantOutline,
    solid: variantSolid,
    link: variantLink,
  },
  baseStyle: {
    rounded: "12px",
    fontWeight: "bold",
  },
};

export default Button;
