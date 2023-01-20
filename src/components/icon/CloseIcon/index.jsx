import { Icon } from "@chakra-ui/react";
import React from "react";

function CloseIcon(props) {
  return (
    <Icon viewBox="0 0 28 28" {...props}>
      <path
        d="M10.6984 17.3018L17.3017 10.6985"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.3017 17.3018L10.6984 10.6985"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 25.6666H17.5C23.3334 25.6666 25.6667 23.3333 25.6667 17.4999V10.4999C25.6667 4.66659 23.3334 2.33325 17.5 2.33325H10.5C4.66671 2.33325 2.33337 4.66659 2.33337 10.4999V17.4999C2.33337 23.3333 4.66671 25.6666 10.5 25.6666Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export default CloseIcon;
