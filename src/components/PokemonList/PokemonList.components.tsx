import { styled } from "@/../styled-system/jsx";
import { cva } from "@/../styled-system/css";
import { motion } from "motion/react";

const wrapperStyles = cva({
  base: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "8px",
    paddingTop: "8px",
  },
});

export const Wrapper = motion.create(styled(motion.div, wrapperStyles));
