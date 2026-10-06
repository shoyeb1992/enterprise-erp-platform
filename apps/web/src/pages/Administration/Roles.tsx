import { Box, Typography } from "@mui/material";

function Roles() {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 700 }}>
        Roles & Permissions
      </Typography>

      <Typography color="text.secondary">
        Manage roles and user permissions.
      </Typography>
    </Box>
  );
}

export default Roles;
