import { cva } from "@/../styled-system/css";
import { styled } from "@/../styled-system/jsx";
import { motion } from "motion/react";

const style = {
  borderRadius: 16,
  padding: 8,
  margin: 8,
  gap: 4,
  fontSize: 14,
};

const wrapperStyles = cva({
  base: {
    width: "100%",
    maxWidth: "450px",
    border: "1px solid grey",
    borderRadius: `${style.borderRadius}px`,
    display: "flex",
    position: "relative",
    flexDirection: "column",
    padding: `${style.padding}px`,
    backgroundColor: "darkgrey",
  },
});

const contentWrapperStyles = cva({
  base: {
    backgroundColor: "white",
    borderRadius: `${style.borderRadius - style.padding}px`,
    padding: `0 ${style.padding}px`,
  },
});
const imageContainerStyles = cva({
  base: {
    display: "flex",
    justifyContent: "center",
    marginTop: `${style.margin}px`,
  },
});

const imgStyles = cva({
  base: {
    width: "200px",
    aspectRatio: "1/1",
  },
});

const titleStyles = cva({
  base: {
    textTransform: "uppercase",
    padding: `${style.padding}px 0`,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "reorderL",
    lg: {
      fontSize: "reorderM",
    },
  },
});
const mainContentWrapperStyles = cva({
  base: {
    margin: `0 -${style.margin}px`,
    padding: `0 ${style.padding}px`,
    paddingBottom: `${style.padding}px`,
    backgroundColor: "lightgrey",
    borderRadius: ` 0 0 ${style.borderRadius - style.padding}px ${style.borderRadius - style.padding}px`,
  },
});

const statsWrapperStyles = cva({
  base: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: `${style.gap}px`,
  },
});

const infoWrapperStyles = cva({
  base: {
    display: "flex",
    gap: `${style.gap}px`,
    padding: `${style.padding - 2}px `,
    backgroundColor: "white",
    borderRadius: `${style.borderRadius - 6}px`,
    textTransform: "uppercase",
    fontSize: "reorderM",
    lg: {
      fontSize: "reorderS",
    },
  },
});

const typesWrapperStyles = cva({
  base: {
    display: "flex",
    justifyContent: "space-evenly",
  },
});

const exitImgStyles = cva({
  base: {
    width: "imgMedium",
    height: "imgMedium",
    lg: {
      width: "imgS",
      height: "imgS",
    },
  },
});

const exitWrapperStyles = cva({
  base: {
    padding: "8px",
    border: "none",
    backgroundColor: "transparent",
    position: "absolute",
    top: 0,
    right: 0,
    transform: "translateY(-100%)",
    cursor: "pointer",
  },
});

const ContentWrapper = styled("div", contentWrapperStyles);
const Wrapper = motion.create(styled("div", wrapperStyles));
const Title = styled("div", titleStyles);
const MainContentWrapper = styled("div", mainContentWrapperStyles);
const ImageWrapper = styled("div", imageContainerStyles);
const Img = styled("img", imgStyles);
const StatsWrapper = styled("div", statsWrapperStyles);
const InfoWrapper = styled("div", infoWrapperStyles);
const TypesWrapper = styled("div", typesWrapperStyles);
const ExitImg = styled("img", exitImgStyles);
const ExitWrapper = motion.create(styled("button", exitWrapperStyles));

export {
  ContentWrapper,
  Wrapper,
  Title,
  MainContentWrapper,
  ImageWrapper,
  Img,
  StatsWrapper,
  InfoWrapper,
  TypesWrapper,
  ExitImg,
  ExitWrapper,
};
