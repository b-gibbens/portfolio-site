import "./App.css";
import { Box } from "@mui/material";
import PageHeader from "./components/PageHeader.jsx";
import PageContents from "./components/PageContents.jsx";
import { useState } from "react";
import RadialMenu from "./components/RadialMenu.jsx";

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <>
      <Box
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <PageHeader />
        <PageContents selectedIndex={selectedIndex} />
        <RadialMenu
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </Box>
    </>
  );
}
