import { Icon } from "@chakra-ui/react";
import React from "react";

function LogoIcon(props) {
  return (
    <Icon viewBox="0 0 46 45" {...props}>
      <g filter="url(#filter0_d_256_6386)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23 31.1845C16.925 31.1845 12.0002 26.2601 12.0002 20.1846C12.0002 14.1096 16.925 9.18433 23 9.18433V0.184423C11.9542 0.184423 3 9.13869 3 20.1846C3 31.2302 11.9542 40.1844 23 40.1844C34.0454 40.1844 43 31.2302 43 20.1846H33.9998C33.9998 26.2601 29.075 31.1845 23 31.1845Z"
          fill="#00AB55"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.9999 21.3117H33.9997V9.69203H22.9999V21.3117Z"
          fill="#00AB55"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_256_6386"
          x="0.714414"
          y="0.184423"
          width="44.5712"
          height="44.5712"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2.28559" />
          <feGaussianBlur stdDeviation="1.14279" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_256_6386"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_256_6386"
            result="shape"
          />
        </filter>
      </defs>
    </Icon>
  );
}

export default LogoIcon;
