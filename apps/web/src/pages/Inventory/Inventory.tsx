import { Box, Card, CardContent, Typography } from "@mui/material";

function Inventory() {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 700 }} gutterBottom>
        Inventory
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Manage products, warehouses, stock and stock movements.
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6">Inventory Module</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Inventory;
