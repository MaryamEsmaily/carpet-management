import React, { useEffect, useReducer } from "react";
import {
  globalThemeDispatchCtx,
  globalThemeStateCtx,
} from "context/globalTheme";
import globalThemeReducer, {
  initialStateGlobalTheme,
} from "reducer/globalThemeReducer";
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
  const [state, dispatch] = useReducer(
    globalThemeReducer,
    initialStateGlobalTheme
  );
  //
  return (
    <globalThemeDispatchCtx.Provider value={dispatch}>
      <globalThemeStateCtx.Provider value={state}>
        <ChakraProvider
          resetCSS
          theme={theme(locales.find((item) => item.locale === locale)?.dir)}
        >
          <RtlProvider>{children(state)}</RtlProvider>
        </ChakraProvider>
      </globalThemeStateCtx.Provider>
    </globalThemeDispatchCtx.Provider>
  );
}

export default GlobalThemeProvider;
