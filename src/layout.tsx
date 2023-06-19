import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  Stack,
  Typography,
} from "@mui/joy";
import { useId } from "react";
import { Link, Outlet } from "react-router-dom";

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
            <ListItemButton component={Link} to="/">
              <ListItemContent>ホーム</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={Link} to="/example-01">
              <ListItemContent>01. 重いページ</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={Link} to="/example-02">
              <ListItemContent>02. requestIdleCallback</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={Link} to="/example-03">
              <ListItemContent>03. IntersectionObserver</ListItemContent>
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
