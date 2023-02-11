import { Icon } from "@chakra-ui/react";
import React from "react";

function SizeIcon(props) {
  return (
    <Icon viewBox="0 0 28 28" fill="none" {...props}>
      <path
        d="M18.19 4H14.75V10V10.75V15.75H24V10.75V10V9.81C24 6.17 21.83 4 18.19 4Z"
        fill="currentColor"
      />
      <path
        d="M4 12.25V17.25V17.75V18.19C4 21.83 6.17 24 9.81 24H13.25V17.75V17.25V12.25H4Z"
        fill="currentColor"
      />
      <path
        d="M13.25 4V10.75H4V9.81C4 6.17 6.17 4 9.81 4H13.25Z"
        fill="currentColor"
      />
      <path
        d="M24 17.25V18.19C24 21.83 21.83 24 18.19 24H14.75V17.25H24Z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default SizeIcon;
