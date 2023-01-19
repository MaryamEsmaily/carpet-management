import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import styles from "theme/styles";
// foundations
import colors from "theme/foundations/colors";
import fonts from "theme/foundations/fonts";
import fontSizes from "theme/foundations/fontSizes";

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
        },
      },
      colors,
      fonts,
      fontSizes,
    },
    withDefaultColorScheme({
      colorScheme: "brand",
    })
  );

export default theme;
