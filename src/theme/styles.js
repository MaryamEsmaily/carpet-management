const styles = {
  global: {
    body: {
      bg: "black",
    },
    "#root": {
      bg: "layout-deep",
      borderRadius: "38px",
      overflowX: "hidden",
      height: "100vh",
    },
    ".js-focus-visible :focus:not([data-focus-visible-added])": {
      outline: "none",
      boxShadow: "none",
    },
  },
};

export default styles;
