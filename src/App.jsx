import "./App.css";
import { Box, Container, Typography } from "@mui/material";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Container sx={{ flex: 1, mt: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Hello — My Vite + MUI Site
        </Typography>

        <Typography>
          This is a starter site. Press the button to see a snackbar or add your
          components.
        </Typography>
      </Container>
    </Box>
  );
}
