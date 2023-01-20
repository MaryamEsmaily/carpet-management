import {
  Avatar,
  Container,
  Grid,
  GridItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import CallIcon from "components/icon/CallIcon";
import LogoIcon from "components/icon/LogoIcon";
import SearchIcon from "components/icon/SearchIcon";
import { menuItems } from "constant/menuItems";
import { memo } from "react";
import { NavLink } from "react-router-dom";

const AppLayout = (props) => {
  return (
    <>
      <Stack
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
                      {menu.label}
                    </Text>
                  </Stack>
                </NavLink>
              );
            })}
          </Stack>
        </Stack>
        <Stack direction="row" align="center" spacing={10}>
          <SearchIcon fill="none" boxSize={5} />
          <CallIcon fill="none" boxSize={5} />
          <Avatar
            size="sm"
            name="Carper Management"
            src="https://bit.ly/dan-abramov"
          />
        </Stack>
      </Stack>
      <Container maxW="full" py={8}>
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
