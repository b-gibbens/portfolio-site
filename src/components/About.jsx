import { Typography } from "@mui/material";

export default function About() {
  return (
    <Typography
      sx={{
        overflowX: "hidden",
        overflowY: "auto",
        maxHeight: "100%",
        maxWidth: "100%",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      Hey, I'm Bradley.  Thanks for checking out my site.  I've been doing full-stack development since 2020.  It's a job - when I'm off the clock, I do something else.  When I'm feeling productive, I spend my free time reading, writing, making music, and exercising.  When I'm not feeling productive, I like watching K-dramas and gaming. 
    </Typography>
  );
}
