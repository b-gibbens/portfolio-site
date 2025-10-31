import { Box, Button, Typography } from "@mui/material";
import Image from "mui-image";
import resumePDF from "../assets/GibbensResume2025.pdf";

export default function Resume() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "flex-start",
        justifyContent: "center",
        gap: 3,
        px: { xs: 2, md: 4 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: { xs: "100%", md: "30%" },
        }}
      >
        <Typography>
          Here is some resume text. I'm going to write even more to see how it
          handles text wrapping.
        </Typography>
        <Button
          href={resumePDF}
          download="GibbensResume2025.pdf"
          variant="contained"
          sx={{
            backgroundColor: "#a18d0dff",
            width: "200px",
            alignSelf: "center",
            "&:hover": { backgroundColor: "#c2a60fff" },
          }}
        >
          Download
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          borderRadius: 2,
          pr: 1,
          maxHeight: { xs: "30vh", md: "70vh" },
          maxWidth: "700px",
          overflowY: "auto",
          width: { xs: "100%", md: "70%" },
        }}
      >
        <Image
          src="src/assets/GibbensResume2025Image.png"
          style={{ width: "100%", height: "auto" }}
          duration={300}
          showLoading
        />
      </Box>
    </Box>
  );
}
