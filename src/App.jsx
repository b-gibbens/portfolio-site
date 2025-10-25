import "./App.css";
import { Box, Container, Typography } from "@mui/material";
import Navbar from "./components/Navbar";
import { Image } from "mui-image";
import { motion } from "framer-motion";
import DevTimeCounter from "./components/DevTimeCounter";

export default function App() {
  return (
    <Box sx={{ minHeight: "100vh", minWidth: "600px", display: "flex", flexDirection: "column" }}>
      <Container sx={{ flex: 1, mt: 4 }}>
        <Navbar />
        <Box sx={{ display: "flex", alignItems: "top", gap: 4, mt: 2 }}>
          <Box component={motion.div}
        initial={{ height: 0 }}
        animate={{ height: "calc(100vh - 150px)" }}
        transition={{ duration: 1, ease: "easeOut" }}
            sx={{
              width: 200,
              height: "calc(100vh - 150px)",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              flexShrink: 0,
              backgroundColor: "#242424",
              borderRadius: "0 0 100px 100px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
              <Image
                src="src/assets/DatabricksDataAnalyst.png"
                width="150px"
                height="150px"
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Image
                src="src/assets/Security+-png.png"
                width="150px"
                height="150px"
              />
            </Box>
          </Box>
          <Box>
            <Typography variant="h3" component="h1" mt={2} gutterBottom>
              Hello.
            </Typography>
            <Typography>
              I'm Bradley.  I've been working professionally as a full-stack developer for <DevTimeCounter />.  Thanks for checking out my site.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
