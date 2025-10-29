import AppBar from "@mui/material/AppBar";
import { Box, Button, Toolbar, Typography } from "@mui/material";
import { motion } from "framer-motion";
import PhotoIcon from "./PhotoIcon";

const navItems = ["About", "Resume", "Contact"];

export default function Navbar() {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          top: -25,
          left: -25,
        }}
      >
        <PhotoIcon />
      </Box>
      {/* <SpeechBubble /> */}
      <AppBar
        position="static"
        component={motion.div}
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1, ease: "easeOut" }}
        sx={{
          overflow: "hidden",
          transformOrigin: "left center",
          borderRadius: "0 50px 50px 0",
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}></Typography>
          {navItems.map((item) => (
            <Button key={item} color="inherit">
              {item}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
