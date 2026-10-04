import { Box, Card, CardContent, Typography } from "@mui/material";

function Sales() {
  return (
    <Box>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Sales
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Manage quotations, orders, invoices and payments.
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6">Sales Module</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Sales;
