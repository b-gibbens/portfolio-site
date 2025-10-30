import { Box, Typography } from "@mui/material";
import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact";
import More from "./More";

const titles = ["ABOUT", "RESUMÉ", "CONTACT", "MORE..."];

export default function PageContents({ selectedIndex }) {
  const Content = [About, Resume, Contact, More][selectedIndex] ?? null;
  const title = titles[selectedIndex] ?? null;

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: selectedIndex !== null ? "flex-start" : "center",
        pt: selectedIndex !== null ? 6 : 0,
        transition: "all 0.5s ease",
      }}
    >
      {Content && (
        <Box
          sx={{
            width: "100%",
            minHeight: 300,
            display: "flex",
            flexDirection: "row",
            gap: 3,
          }}
        >
          <Box sx={{ flexBasis: "20%", flexShrink: 0, backgroundColor: "transparent" }} />
          <Box sx={{ flexBasis: "80%", display: "flex", flexDirection: "column", gap: 3 }}>
            <Typography
              variant="h4"
              fontWeight={700}
              sx={{ textAlign: "left", mb: 2 }}
            >
              {title}
            </Typography>
            <Box
              sx={{
                flex: 1,
                maxWidth: "100%",
                maxHeight: "calc(100vh - 300px)",
                px: 1,
              }}
            >
              <Content />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
