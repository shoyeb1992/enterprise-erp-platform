import { Box, Card, CardContent, Typography } from "@mui/material";

function Reports() {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 700 }} gutterBottom>
        Reports
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Business, sales, purchase, inventory and financial reports.
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6">Reports Module</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Reports;
