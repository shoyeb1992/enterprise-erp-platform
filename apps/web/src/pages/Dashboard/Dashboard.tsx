import {
  AttachMoney,
  Inventory2,
  People,
  ShoppingCart,
} from "@mui/icons-material";

import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

const stats = [
  {
    title: "Total Sales",
    value: "₹12.4M",
    icon: <AttachMoney />,
  },
  {
    title: "Orders",
    value: "1,245",
    icon: <ShoppingCart />,
  },
  {
    title: "Customers",
    value: "3,842",
    icon: <People />,
  },
  {
    title: "Products",
    value: "8,421",
    icon: <Inventory2 />,
  },
];

function Dashboard() {
  return (
    <Box>
      <Typography variant="h4" fontWeight={700}>
        Enterprise ERP
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Enterprise Resource Planning Dashboard
      </Typography>

      <Grid container spacing={3}>
        {stats.map((stat) => (
          <Grid
            key={stat.title}
            size={{
              xs: 12,
              sm: 6,
              md: 3,
            }}
          >
            <Card>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography color="text.secondary" variant="body2">
                      {stat.title}
                    </Typography>

                    <Typography variant="h4" fontWeight={700} sx={{ mt: 1 }}>
                      {stat.value}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      backgroundColor: "primary.main",
                      color: "white",
                    }}
                  >
                    {stat.icon}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Dashboard;
