import { Box } from "@chakra-ui/react";
import { memo } from "react";

const AppLayout = (props) => {
  return <Box>{props.children}</Box>;
};

export default memo(AppLayout);
