import {
  Assessment,
  Business,
  Dashboard,
  ExpandLess,
  ExpandMore,
  Inventory2,
  Logout,
  People,
  PointOfSale,
  ReceiptLong,
  Settings,
  ShoppingCart,
} from "@mui/icons-material";

import {
  Box,
  Collapse,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const drawerWidth = 260;

interface SidebarProps {
  mobileOpen: boolean;
  onMobileClose: () => void;
}

function Sidebar({ mobileOpen, onMobileClose }: SidebarProps) {
  const [openAdministration, setOpenAdministration] = useState(false);

  const menuItems = [
    {
      label: "Dashboard",
      icon: <Dashboard />,
      path: "/dashboard",
    },
    {
      label: "HR Management",
      icon: <People />,
      path: "/hr",
    },
    {
      label: "CRM",
      icon: <Business />,
      path: "/crm",
    },
    {
      label: "Inventory",
      icon: <Inventory2 />,
      path: "/inventory",
    },
    {
      label: "Purchase",
      icon: <ShoppingCart />,
      path: "/purchase",
    },
    {
      label: "Sales",
      icon: <PointOfSale />,
      path: "/sales",
    },
    {
      label: "Reports",
      icon: <Assessment />,
      path: "/reports",
    },
  ];

  const drawerContent = (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Toolbar>
        <Box>
          <Typography variant="h6" fontWeight={800}>
            ENTERPRISE ERP
          </Typography>

          <Typography variant="caption" color="text.secondary">
            Management System
          </Typography>
        </Box>
      </Toolbar>

      <Divider />

      <List sx={{ px: 1.5, py: 2 }}>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.label}
            component={NavLink}
            to={item.path}
            onClick={onMobileClose}
            sx={{
              borderRadius: 2,
              mb: 0.5,
              color: "text.primary",
              textDecoration: "none",

              "&.active": {
                backgroundColor: "primary.main",
                color: "white",

                "& .MuiListItemIcon-root": {
                  color: "white",
                },
              },

              "&:hover": {
                backgroundColor: "action.hover",
              },

              "&.active:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 42,
                color: "inherit",
              }}
            >
              {item.icon}
            </ListItemIcon>

            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}

        <ListItemButton
          onClick={() => setOpenAdministration((prev) => !prev)}
          sx={{
            borderRadius: 2,
            mb: 0.5,
          }}
        >
          <ListItemIcon sx={{ minWidth: 42 }}>
            <Settings />
          </ListItemIcon>

          <ListItemText primary="Administration" />

          {openAdministration ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openAdministration} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              component={NavLink}
              to="/admin/users"
              onClick={onMobileClose}
              sx={{
                pl: 7,
                borderRadius: 2,
                color: "text.primary",
                textDecoration: "none",

                "&.active": {
                  backgroundColor: "action.selected",
                  color: "primary.main",
                },
              }}
            >
              <ListItemText primary="Users" />
            </ListItemButton>

            <ListItemButton
              component={NavLink}
              to="/admin/roles"
              onClick={onMobileClose}
              sx={{
                pl: 7,
                borderRadius: 2,
                color: "text.primary",
                textDecoration: "none",

                "&.active": {
                  backgroundColor: "action.selected",
                  color: "primary.main",
                },
              }}
            >
              <ListItemText primary="Roles & Permissions" />
            </ListItemButton>

            <ListItemButton
              component={NavLink}
              to="/admin/audit-logs"
              onClick={onMobileClose}
              sx={{
                pl: 7,
                borderRadius: 2,
                color: "text.primary",
                textDecoration: "none",

                "&.active": {
                  backgroundColor: "action.selected",
                  color: "primary.main",
                },
              }}
            >
              <ListItemText primary="Audit Logs" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>

      <Box sx={{ mt: "auto" }}>
        <Divider />

        <List sx={{ px: 1.5, py: 1 }}>
          <ListItemButton
            sx={{
              borderRadius: 2,
            }}
          >
            <ListItemIcon sx={{ minWidth: 42 }}>
              <Logout />
            </ListItemIcon>

            <ListItemText primary="Logout" />
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onMobileClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        {drawerContent}
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: "1px solid",
            borderColor: "divider",
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </>
  );
}

export { drawerWidth };

export default Sidebar;
