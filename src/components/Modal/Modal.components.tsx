import { cva } from "@/../styled-system/css";
import { styled } from "@/../styled-system/jsx";
import { motion } from "motion/react";
const OverlayStyles = cva({
  base: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(244, 244, 244, 0.6)",
    backdropFilter: "blur(10px)",
    borderRadius: "10px",
  },
});

export const Overlay = motion.create(styled("div", OverlayStyles));
