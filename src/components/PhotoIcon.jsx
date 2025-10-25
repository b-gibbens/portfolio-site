import { Box } from "@mui/material";
import { Image } from "mui-image";

export default function PhotoIcon() {
  return (
    <Box
      sx={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box
        sx={{
          position: "relative",
          width: 250,
          height: 250,
          borderTopLeftRadius: 0,
          borderTopRightRadius: "50%",
          borderBottomRightRadius: "50%",
          borderBottomLeftRadius: "50%",
          zIndex: 98,
          backgroundColor: "#121212",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 200,
          height: 200,
          borderRadius: "50%",
          overflow: "hidden",
          zIndex: 100,
        }}
      >
        <Image
          src="src/assets/photo.jpeg"
          duration={0}
          width="100%"
          height="100%"
          sx={{ objectFit: "cover", filter: "grayscale(50%)" }}
        />
      </Box>
    </Box>
  );
}
