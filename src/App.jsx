import "./App.css";
import { Box } from "@mui/material";
import PageHeader from "./components/PageHeader.jsx";
import PageContents from "./components/PageContents.jsx";

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
      <PageHeader />
      <PageContents />
    </Box>
  );
}
