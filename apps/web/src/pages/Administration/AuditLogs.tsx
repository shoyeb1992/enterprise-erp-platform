import { Box, Typography } from "@mui/material";

function AuditLogs() {
  return (
    <Box>
      <Typography variant="h4" fontWeight={700}>
        Audit Logs
      </Typography>

      <Typography color="text.secondary">
        View system activity and audit events.
      </Typography>
    </Box>
  );
}

export default AuditLogs;
