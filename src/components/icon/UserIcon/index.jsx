import { Icon } from "@chakra-ui/react";
import React from "react";

function UserIcon(props) {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <path
        d="M19.51 5.85L13.57 2.42C12.6 1.86 11.4 1.86 10.42 2.42L4.48998 5.85C3.51998 6.41 2.91998 7.45 2.91998 8.58V15.42C2.91998 16.54 3.51998 17.58 4.48998 18.15L10.43 21.58C11.4 22.14 12.6 22.14 13.58 21.58L19.52 18.15C20.49 17.59 21.09 16.55 21.09 15.42V8.58C21.08 7.45 20.48 6.42 19.51 5.85ZM12 7.34C13.29 7.34 14.33 8.38 14.33 9.67C14.33 10.96 13.29 12 12 12C10.71 12 9.66998 10.96 9.66998 9.67C9.66998 8.39 10.71 7.34 12 7.34ZM14.68 16.66H9.31998C8.50998 16.66 8.03998 15.76 8.48998 15.09C9.16998 14.08 10.49 13.4 12 13.4C13.51 13.4 14.83 14.08 15.51 15.09C15.96 15.75 15.48 16.66 14.68 16.66Z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default UserIcon;