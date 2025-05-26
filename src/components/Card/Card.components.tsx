import { styled } from "../../../styled-system/jsx";
import { cva } from "../../../styled-system/css";
import { motion } from "motion/react";

const cardContainerStyles = cva({
  base: {
    width: "180px",
    minHeight: "180px",
    border: `1px solid black`,
    borderRadius: "7px",
    padding: "5px",
    overflow: "hidden",
    cursor: "pointer",
  },
});

const textStyle = cva({
  base: {
    fontSize: "reorderM",
    lineHeight: "s",
    textAlign: "center",
    lg: {
      fontSize: "reorderS",
    },
  },
});

const cardDataStyle = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    gap: "12px",
    height: "100%",
    backgroundColor: "white",
    border: `1px solid #1F2937`,
    borderRadius: "inherit",
    padding: "16px",
  },
});
const imgStyles = cva({
  base: {
    width: "100%",
    aspectRatio: "1/1",
    sm: { maxWidth: "110px" },
  },
});

const Img = styled("img", imgStyles);
const Text = styled("div", textStyle);
const CardContainer = motion.create(styled(motion.div, cardContainerStyles));
const CardData = motion.create(styled(motion.div, cardDataStyle));

export { Text, CardContainer, CardData, Img };
