import { Box, Typography } from "@mui/material";
import DevTimeCounter from "../components/DevTimeCounter";

export default function PageHeader() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h2">Hello. I'm Bradley.</Typography>
      <Typography variant="body2">
        Professional full-stack developer for <DevTimeCounter />.
      </Typography>
    </Box>
  );
}
