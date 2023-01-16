import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtl from "stylis-plugin-rtl";

const options = {
  rtl: { key: "css-ar", stylisPlugins: [rtl] },
  ltr: { key: "css-en" },
};

export function RtlProvider({ children }) {
  const locale = localStorage.getItem("locale");
  const dir = locale === "fa" ? "rtl" : "ltr";
  const cache = createCache(options[dir]);
  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
