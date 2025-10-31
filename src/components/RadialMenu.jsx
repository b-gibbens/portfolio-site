import { Box } from "@mui/material";
import { Image } from "mui-image";
import WarpText from "./WarpText";
import { motion } from "framer-motion";

const menuOptions = [
  {
    label: "ABOUT",
    top: "0px",
    left: "160px",
    rotateX: "0deg",
    rotateY: "-60deg",
    skewX: "35deg",
    skewY: "-15deg",
  },
  {
    label: "RÉSUMÉ",
    top: "80px",
    left: "165px",
    rotateX: "0deg",
    rotateY: "-60deg",
    skewX: "15deg",
    skewY: "0deg",
  },
  {
    label: "CONTACT",
    top: "170px",
    left: "130px",
    rotateX: "0deg",
    rotateY: "-60deg",
    skewX: "-25deg",
    skewY: "20deg",
  },
  {
    label: "MORE...",
    top: "160px",
    left: "-145px",
    rotateX: "0deg",
    rotateY: "60deg",
    skewX: "35deg",
    skewY: "-15deg",
  },
];

export default function RadialMenu(props) {
  const isOpen = props.selectedIndex !== null;

  const select = (index) => props.setSelectedIndex(index);
  const back = () => props.setSelectedIndex(null);

  return (
    <motion.div
      initial={false}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 250,
        height: 250,
        pointerEvents: "none",
        zIndex: 2000,
      }}
      animate={{
        x: isOpen ? "-20px" : "50vw",
        y: isOpen ? "calc(90vh - 140px)" : "50vh",
        translateX: isOpen ? "0%" : "-50%",
        translateY: isOpen ? "0%" : "-50%",
        scale: isOpen ? 0.7 : 1,
      }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        style={{
          pointerEvents: "auto",
          position: "relative",
          width: "100%",
          height: "100%",
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
        {menuOptions.map((item, i) => (
          <motion.div
            key={item.label}
            style={{ position: "absolute" }}
            animate={
              isOpen
                ? { opacity: 0, scale: 0.2, rotate: 360, x: 0, y: 0 }
                : { opacity: 1, scale: 1, rotate: 0 }
            }
            transition={{ duration: 0.5, ease: "easeInOut", delay: i * 0.04 }}
          >
            <WarpText
              textContent={item.label}
              top={item.top}
              left={item.left}
              perspective="180px"
              rotateX={item.rotateX}
              rotateY={item.rotateY}
              skewX={item.skewX}
              skewY={item.skewY}
              onClick={() => select(i)}
            />
          </motion.div>
        ))}
        {isOpen && (
          <motion.div
            style={{ position: "absolute" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, rotate: 360 }}
            transition={{ delay: 0.4 }}
          >
            <WarpText
              textContent="BACK"
              onClick={back}
              top="80px"
              left="185px"
              perspective="180px"
              rotateX="0deg"
              rotateY="-60deg"
              skewX="15deg"
              skewY="0deg"
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
