import { Icon } from "@chakra-ui/react";
import React from "react";

function FilterIcon(props) {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <path
        d="M3 7H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6 12H18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10 17H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Icon>
  );
}

export default FilterIcon;
