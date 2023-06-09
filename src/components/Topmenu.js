import * as React from "react";
import { AppBar, Box, Toolbar, IconButton, Badge } from "@mui/material/";

import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function Topmenu() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="absolute"
        color="transparent"
        elevation={0}
        sx={{ height: 100, justifyContent: "center" }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="#A3AED0"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="#A3AED0"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}></Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
