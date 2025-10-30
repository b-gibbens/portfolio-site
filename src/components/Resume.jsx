import { Box, Button, Typography } from "@mui/material";
import Image from "mui-image";
import resumePDF from "../assets/GibbensResume2025.pdf";

export default function Resume() {
  return (
    <Box sx={{ overflowX: "hidden", overflowY: "auto", maxHeight: "100%", maxWidth: "100%" }}>
      <Typography>Here is some resume text.</Typography>
      <a
        href={resumePDF}
        download="GibbensResume2025.pdf"
        style={{ textDecoration: "none" }}
      >
        <Button variant="contained" sx={{ mt: 2 }}>
          Download
        </Button>
      </a>
      <Image
        src="src/assets/GibbensResume2025Image.png"
        width="60%"
        height="60%"
      />
    </Box>
  );
}
