import { cva } from "@/../styled-system/css";
import { styled } from "@/../styled-system/jsx";
import { motion } from "motion/react";
const containerStyle = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "8px",
    gap: "4px",
    marginTop: "auto",
  },
});

const pagesWrapper = cva({
  base: {
    display: "flex",
    gap: "5px",
  },
});

const pageButtonStyle = cva({
  base: {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    padding: "2px",
    position: "relative",
    fontSize: "reorderM",
    lg: {
      fontSize: "reorderS",
    },
  },
});

const undelineStyles = cva({
  base: {
    position: "absolute",
    bottom: 0,
    left: 0,
    borderBottom: "1px solid gray",
    width: "100%",
  },
});

const PagesWrapper = styled("div", pagesWrapper);
const Container = styled("div", containerStyle);
const Underline = motion.create(styled("div", undelineStyles));
const PageButton = motion.create(styled("button", pageButtonStyle));

export { PagesWrapper, Container, Underline, PageButton };
