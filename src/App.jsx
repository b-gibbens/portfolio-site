import "./App.css";
import { Box, Typography } from "@mui/material";
import DevTimeCounter from "./components/DevTimeCounter";
import Home from "./pages/Home.jsx";

export default function App() {
  return (
    // Page containment Box (stacks and horizontally centers all contents)
    <Box
      sx={{
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      {/* Page header Box (stacks and horizontally centers all contents) */}
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
      {/* Page contents Box */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        <Home />
      </Box>
    </Box>
  );
}
