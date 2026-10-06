import { Box, Typography } from "@mui/material";

function Users() {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 700 }}>
        Users
      </Typography>

      <Typography color="text.secondary">Manage ERP users.</Typography>
    </Box>
  );
}

export default Users;
