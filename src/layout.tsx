import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  Stack,
  Typography,
} from "@mui/joy";
import { ComponentProps, useId } from "react";
import { NavLink, Outlet } from "react-router-dom";

const style: ComponentProps<typeof NavLink>["style"] = ({ isActive }) => ({
  fontWeight: isActive ? "bold" : "",
});

export function Layout() {
  const menuId = useId();

  return (
    <Stack direction="row">
      <Box
        sx={{
          flex: "0 0 auto",
          width: "16em",
          minHeight: "100dvh",
          borderRight: "1px solid var(--joy-palette-neutral-outlinedBorder)",
          p: 2,
        }}
      >
        <Typography
          id={menuId}
          level="body3"
          textTransform="uppercase"
          fontWeight="lg"
        >
          Menu
        </Typography>
        <List aria-labelledby={menuId}>
          <ListItem>
            <ListItemButton component={NavLink} to="/" style={style}>
              <ListItemContent>ホーム</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={NavLink} to="/example-01" style={style}>
              <ListItemContent>01. 重いページ</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={NavLink} to="/example-02" style={style}>
              <ListItemContent>02. requestIdleCallback</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={NavLink} to="/example-03" style={style}>
              <ListItemContent>03. IntersectionObserver</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={NavLink} to="/example-04" style={style}>
              <ListItemContent>04. 03 + pager</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={NavLink} to="/example-05" style={style}>
              <ListItemContent>05. useTransition</ListItemContent>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>

      <Box sx={{ flex: 1, p: 2 }}>
        <Outlet />
      </Box>
    </Stack>
  );
}
