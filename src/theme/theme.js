import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import styles from "theme/styles";
// foundations
import colors from "theme/foundations/colors";
import fonts from "theme/foundations/fonts";
import fontSizes from "theme/foundations/fontSizes";
// components
import Button from "theme/components/Button";
import Input from "theme/components/Input";

const theme = (direction) =>
  extendTheme(
    {
      direction: direction,
      styles,
      semanticTokens: {
        colors: {
          "layout-deep": { default: "#F4F6F8", _dark: "#171A1F" },
          "layout-over": { default: "white", _dark: "#20252F" },
          layout: { default: "white", _dark: "#2F3440" },
          "layout-main": { default: "#edf2f7", _dark: "#ffffff0a" },
          "text-primary": { default: "#8992A1", _dark: "" },
          "text-secondary": { default: "#000", _dark: "#fff" },
        },
      },
      colors,
      fonts,
      fontSizes,
      components: {
        Button,
        Input,
      },
    },
    withDefaultColorScheme({
      colorScheme: "green",
    })
  );

export default theme;
