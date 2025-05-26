import { cva } from "@/../styled-system/css";
import { styled } from "@/../styled-system/jsx";
import { motion } from "motion/react";

const buttonStyle = cva({
  base: {
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
    cursor: "pointer",
    border: "none",
    backgroundColor: "transparent",
    gap: "5px",
  },
});

const symbolsContainerStyles = cva({
  base: {
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    fontSize: "reorderM",
    lg: {
      fontSize: "reorderS",
    },
  },
});

const imgStyles = cva({
  base: { width: "imgW", height: "imgH" },
});

const Img = motion.create(styled("img", imgStyles));
const Button = styled("button", buttonStyle);
const SymbolsContainer = styled("div", symbolsContainerStyles);

export { Button, SymbolsContainer, Img };
