import { useCallback, useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@mui/system";

const bounce = keyframes`
    0% { transform: translateY(0); }
    30% { transform: translateY(-18px) scale(1.05); }
    60% { transform: translateY(6px); }
    100% { transform: translateY(0); }`;

const letterDelay = 0.08;
const letterDuration = 0.6;

export default function WarpText(props) {
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef(null);

  const startAnimation = useCallback(() => {
    if (timerRef.current != null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    setIsAnimating(true);

    const total =
      (letterDuration + letterDelay * (props.textContent.length - 1)) * 1000;

    timerRef.current = window.setTimeout(() => {
      setIsAnimating(false);
      timerRef.current = null;
    }, total);
  }, [props.textContent.length]);

  useEffect(() => {
    return () => {
      if (timerRef.current != null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <Box
      onMouseEnter={startAnimation}
      onClick={props.onClick}
      sx={{
        cursor: "pointer",
        position: "absolute",
        top: props.top,
        left: props.left,
        perspective: props.perspective,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        component="div"
        sx={{
          fontSize: "4rem",
          fontWeight: 700,
          color: "#ffffff",
          transform: `rotateX(${props.rotateX}) rotateY(${props.rotateY}) skewX(${props.skewX}) skewY(${props.skewY})`,
          transformOrigin: "center",
          transition: "transform 0.5s ease",
          display: "inline-flex",
          gap: "0.05em",
          "&:hover": { textShadow: "0 8px 20px rgba(255,255,255,0.4)" },
        }}
      >
        {props.textContent.split("").map((ch, i) => {
          const delay = `${i * letterDelay}s`;
          return (
            <Box
              key={isAnimating ? `bounce-${i}` : `static-${i}`}
              component="span"
              sx={{
                display: "inline-block",
                transformOrigin: "bottom center",
                animation: isAnimating
                  ? `${bounce} ${letterDuration}s cubic-bezier(.2, .8, .2, 1) both`
                  : "none",
                // stagger each letter
                animationDelay: delay,
              }}
            >
              {ch}
            </Box>
          );
        })}
      </Typography>
    </Box>
  );
}
