const styles = {
  global: {
    "html, body": {
      bg: "black",
    },
    "#root": {
      bg: "layout-deep",
      borderRadius: "38px",
      overflow: "hidden",
    },
    ".js-focus-visible :focus:not([data-focus-visible-added])": {
      outline: "none",
      boxShadow: "none",
    },
  },
};

export default styles;
