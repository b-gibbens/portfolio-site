import { Box } from "@mui/material";
import { Image } from "mui-image";
import WarpText from "../components/WarpText";

export default function Home() {
  return (
    <Box
      sx={{
        position: "relative",
        width: 250,
        height: 250,
        borderRadius: "50%",
        zIndex: 98,
        backgroundColor: "#121212",
      }}
    >
      {/* Locus image Box */}
      <Box
        sx={{
          position: "absolute",
          top: "25px",
          left: "25px",
          width: 200,
          height: 200,
          borderRadius: "50%",
          overflow: "hidden",
          zIndex: 100,
        }}
      >
        <Image
          src="src/assets/workdayphotobw_w_trans.png"
          width="100%"
          height="100%"
        />
      </Box>
      <WarpText
        textContent="ABOUT"
        top="0px"
        left="160px"
        perspective="180px"
        rotateX="0deg"
        rotateY="-60deg"
        skewX="35deg"
        skewY="-15deg"
      />
      <WarpText
        textContent="RESUMÉ"
        top="80px"
        left="165px"
        perspective="180px"
        rotateX="0deg"
        rotateY="-60deg"
        skewX="15deg"
        skewY="0deg"
      />
      <WarpText
        textContent="CONTACT"
        top="170px"
        left="130px"
        perspective="180px"
        rotateX="0deg"
        rotateY="-60deg"
        skewX="-25deg"
        skewY="20deg"
      />
      <WarpText
        textContent="MORE..."
        top="160px"
        left="-145px"
        perspective="180px"
        rotateX="0deg"
        rotateY="60deg"
        skewX="35deg"
        skewY="-15deg"
      />
    </Box>
  );
}
