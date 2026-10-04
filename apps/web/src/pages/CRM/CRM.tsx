import { Box, Card, CardContent, Typography } from "@mui/material";

function CRM() {
  return (
    <Box>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        CRM
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Manage customers, contacts and leads.
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6">CRM Module</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default CRM;
