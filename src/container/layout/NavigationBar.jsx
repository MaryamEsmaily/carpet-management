import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const NavigationBar = ({ menu }) => {
  //
  const { t } = useTranslation();
  //
  const renderMainItem = (data) => {
    return (
      <Box
        key={data?.label}
        pos="relative"
        height="70px"
        as="li"
        display="flex"
        alignItems="center"
        borderRadius="16px"
        transition="ease-in-out 110ms"
        _hover={{
          "&:hover > ul": {
            opacity: "1",
            pointerEvents: "all",
          },
        }}
      >
        <NavLink key={data.label} to={data.children ? "#" : data?.path}>
          <Stack
            direction="row"
            align="center"
            spacing={2}
            overflow="hidden"
            textAlign="center"
          >
            {data.icon ? <data.icon color="text-primary" boxSize={5} /> : null}
            <Text fontSize="sm" fontWeight="bold" whiteSpace="nowrap">
              {t(data.label)}
            </Text>
          </Stack>
        </NavLink>

        {data.children ? (
          <Box
            p={5}
            rounded="16px"
            bg="layout-over"
            listStyleType="none"
            transition="ease-in-out 110ms"
            as="ul"
            pos="absolute"
            bottom="0"
            right="50%"
            zIndex="999"
            transform="translate(50%,110%)"
            display="flex"
            flexDirection="column"
            rowGap="20px"
            opacity="0"
            pointerEvents="none"
            boxShadow="xl"
          >
            <Box
              as="span"
              sx={{
                position: "absolute",
                right: "50%",
                transform: "translate(50%,-130%)",
                borderLeft: "22px solid transparent",
                borderRight: "22px solid transparent",
                borderTop: "22px solid transparent",
                borderBottom: "22px solid",
                borderBottomColor: "layout-over",
              }}
            ></Box>
            {data.children.map((item) => subMenu(item))}
          </Box>
        ) : null}
      </Box>
    );
  };
  //
  const subMenu = (data) => {
    return (
      <Box>
        <NavLink key={data.label} to={data.children ? "" : data?.path}>
          <Box
            as="li"
            key={data?.label}
            position="relative"
            borderRadius="16px"
            _hover={{
              "&:hover > ul": {
                opacity: "1",
                pointerEvents: "all",
              },
            }}
          >
            <Stack direction="row" align="center" spacing={3} w="full" h="full">
              {data.icon ? (
                <data.icon color="text-primary" boxSize={5} />
              ) : null}
              <Text fontSize="sm" as="span" whiteSpace="nowrap">
                {t(data.label)}
              </Text>
            </Stack>
          </Box>
        </NavLink>
        {data.children ? (
          <Box
            p={3}
            rounded="16px"
            bg="layout-over"
            listStyleType="none"
            transition="ease-in-out 110ms"
            as="ul"
            pos="absolute"
            bottom="0"
            right="50%"
            zIndex="999"
            transform="translate(50%,110%)"
            display="flex"
            flexDirection="column"
            rowGap="20px"
            opacity="0"
            pointerEvents="none"
          >
            <Box
              as="span"
              sx={{
                position: "absolute",
                right: "50%",
                transform: "translate(50%,-120%)",
                borderLeft: "22px solid transparent",
                borderRight: "22px solid transparent",
                borderTop: "22px solid transparent",
                borderBottom: "22px solid #20252F",
              }}
            ></Box>
            {data.children.map((item) => subMenu(item))}
          </Box>
        ) : null}
      </Box>
    );
  };
  //
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      align="center"
      spacing={6}
    >
      {menu.map((item) => {
        return renderMainItem(item);
      })}
    </Stack>
  );
};

export default React.memo(NavigationBar);
