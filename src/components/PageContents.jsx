import { Box } from "@mui/material";
import Home from "../pages/Home";

export default function PageContents() {
    return (
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
    );
}