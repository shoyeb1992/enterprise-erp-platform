import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useState } from "react";

import Sidebar, { drawerWidth } from "./Sidebar";
import Topbar from "./Topbar";

function DashboardLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMobileMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleMobileClose = () => {
    setMobileOpen(false);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "background.default",
      }}
    >
      <Sidebar mobileOpen={mobileOpen} onMobileClose={handleMobileClose} />

      <Topbar onMenuClick={handleMobileMenu} />

      <Box
        component="main"
        sx={{
          minHeight: "100vh",
          ml: {
            xs: 0,
            md: `${drawerWidth}px`,
          },
        }}
      >
        <Box
          sx={{
            p: {
              xs: 2,
              sm: 3,
              md: 4,
            },
            pt: {
              xs: 10,
              sm: 11,
              md: 12,
            },
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardLayout;
