import { Box, Card, CardContent, Typography } from "@mui/material";

function HR() {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 700 }} gutterBottom>
        HR Management
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Manage employees, departments, designations and attendance.
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6">HR Management Module</Typography>

          <Typography color="text.secondary">
            Employee management will be implemented here.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default HR;
