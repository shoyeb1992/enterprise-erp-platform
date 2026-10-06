import { Box, Card, CardContent, Typography } from "@mui/material";

function Purchase() {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 700 }} gutterBottom>
        Purchase
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Manage suppliers, purchase orders and purchase invoices.
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6">Purchase Module</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Purchase;
