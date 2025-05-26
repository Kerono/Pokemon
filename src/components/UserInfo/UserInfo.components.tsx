import { styled } from "@/../styled-system/jsx";
import { cva } from "@/../styled-system/css";
import { motion } from "motion/react";

const wrapperStyles = cva({
  base: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: "reorderL",
    lg: {
      fontSize: "reorderM",
    },
  },
});

export const Wrapper = motion.create(styled(motion.div, wrapperStyles));
