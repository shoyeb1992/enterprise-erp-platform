import {
  AccountCircle,
  Logout,
  Menu,
  NotificationsNone,
} from "@mui/icons-material";

import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  Menu as MuiMenu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { drawerWidth } from "./Sidebar";

interface TopbarProps {
  onMenuClick: () => void;
}

interface LoggedInUser {
  id: string;
  name: string;
  username: string;
  email: string;
  role: string;
}

function Topbar({ onMenuClick }: TopbarProps) {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const userData = localStorage.getItem("user");

  const user: LoggedInUser | null = userData ? JSON.parse(userData) : null;

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");

    handleMenuClose();

    navigate("/login", { replace: true });
  };

  return (
    <AppBar
      position="fixed"
      color="inherit"
      elevation={0}
      sx={{
        width: {
          xs: "100%",
          md: `calc(100% - ${drawerWidth}px)`,
        },

        ml: {
          xs: 0,
          md: `${drawerWidth}px`,
        },

        borderBottom: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper",
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          onClick={onMenuClick}
          sx={{
            display: {
              xs: "flex",
              md: "none",
            },
            mr: 2,
          }}
        >
          <Menu />
        </IconButton>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            display: { xs: "none", sm: "block" },
          }}
        >
          Dashboard
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <IconButton sx={{ mr: 1 }}>
          <Badge badgeContent={4} color="error">
            <NotificationsNone />
          </Badge>
        </IconButton>

        <IconButton onClick={handleMenuOpen}>
          <Avatar sx={{ width: 36, height: 36 }}>
            <AccountCircle />
          </Avatar>
        </IconButton>

        <Box
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
            ml: 1,
            mr: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            {user?.name || "User"}
          </Typography>

          <Typography variant="caption" color="text.secondary">
            {user?.username || ""}
          </Typography>
        </Box>

        <MuiMenu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleLogout}>
            <Logout fontSize="small" sx={{ mr: 1 }} />
            Logout
          </MenuItem>
        </MuiMenu>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;
