import React, { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { RtlProvider } from "provider/RtlProvider";
import theme from "theme/theme";

function GlobalThemeProvider({ children }) {
  const locales = [
    { locale: "fa", dir: "rtl" },
    { locale: "en", dir: "ltr" },
  ];
  //
  const locale = localStorage.getItem("locale") ?? "fa";

  useEffect(() => {
    if (!localStorage.getItem("locale")) {
      localStorage.setItem("locale", "fa");
      window.location.reload();
    }
  }, []);
  //
  return (
    <ChakraProvider
      resetCSS
      theme={theme(locales.find((item) => item.locale === locale)?.dir)}
    >
      <RtlProvider>{children}</RtlProvider>
    </ChakraProvider>
  );
}

export default GlobalThemeProvider;
