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
        colors: {},
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
