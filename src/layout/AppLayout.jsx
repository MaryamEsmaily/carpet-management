import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Container,
  Grid,
  GridItem,
  IconButton,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import CallIcon from "components/icon/CallIcon";
import LogoIcon from "components/icon/LogoIcon";
import SearchIcon from "components/icon/SearchIcon";
import TranslateIcon from "components/icon/TranslateIcon";
import { menuItems } from "constant/menuItems";
import { memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const AppLayout = (props) => {
  // theme stuff
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const iconColor = useColorModeValue("#000", "#fff");

  // language stuff
  const { i18n, t } = useTranslation();

  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n, i18n.language]);

  const currentLang = i18n.language;
  //
  return (
    <>
      <Stack
        position="sticky"
        top={0}
        zIndex={10}
        direction="row"
        justifyContent="space-between"
        bgColor="layout-over"
        align="center"
        py={3}
        px={10}
        mb={4}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          align="center"
          spacing={10}
        >
          <LogoIcon boxSize={10} />
          <Stack
            direction="row"
            justifyContent="space-between"
            align="center"
            spacing={5}
          >
            {menuItems?.map((menu) => {
              const Icon = menu.icon;
              return (
                <NavLink key={menu.label} to={menu.path}>
                  <Stack direction="row" align="center" spacing={2}>
                    {Icon && <Icon fill="none" boxSize={5} />}
                    <Text fontWeight="bold" fontSize="sm">
                      {t(menu.label)}
                    </Text>
                  </Stack>
                </NavLink>
              );
            })}
          </Stack>
        </Stack>
        <Stack direction="row" align="center" spacing={10}>
          <IconButton
            onClick={toggleColorMode}
            size="sm"
            variant="unstyled"
            icon={
              !isDark ? (
                <MoonIcon fontSize="20px" />
              ) : (
                <SunIcon fontSize="20px" />
              )
            }
          />
          <IconButton
            onClick={() => {
              window.location.reload();
              if (currentLang === "fa") {
                localStorage.setItem("locale", "en");
                i18n.changeLanguage("en");
              } else {
                localStorage.setItem("locale", "fa");
                i18n.changeLanguage("fa");
              }
            }}
            size="sm"
            variant="unstyled"
            icon={<TranslateIcon color={iconColor} boxSize={5} />}
          />
          <SearchIcon onClick={toggleColorMode} fill="none" boxSize={5} />
          <CallIcon fill="none" boxSize={5} />
          <Avatar
            size="sm"
            name="Carper Management"
            src="https://bit.ly/dan-abramov"
          />
        </Stack>
      </Stack>
      <Container maxW="full" my={8}>
        <Grid templateColumns="repeat(24,minmax(0,1fr))">
          <GridItem colStart={4} colSpan={18}>
            {props.children}
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default memo(AppLayout);
