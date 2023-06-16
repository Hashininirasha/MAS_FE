import React from "react";
import styles from "./AppLayoutHeader.module.scss";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

const AppLayoutHeader = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ zIndex: 10 }} className={styles.headerRow}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Typography
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Udayanga
          </Typography>
          <Box
            // sx={{ display: { xs: 'none', md: 'flex' } }}
            className={styles.actionIcons}
          >
            <IconButton
              size="medium"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <PersonIcon />
            </IconButton>
          </Box>
          <Box
            // sx={{ display: { xs: 'none', md: 'flex' } }}
            className={styles.actionIcons}
          >
            <IconButton
              size="medium"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default AppLayoutHeader;
