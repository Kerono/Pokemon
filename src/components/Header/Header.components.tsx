import { styled } from "../../../styled-system/jsx";
import { cva } from "../../../styled-system/css";

const containerStyles = cva({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
});

const headerImgStyles = cva({
  base: {
    width: "imgMedium",
    height: "large",
    lg: {
      width: "imgS",
      height: "imgMedium",
    },
  },
});

const logoStyles = cva({
  base: {
    flex: 1,
    fontSize: "30px",

    fontWeight: "bold",
    lg: {
      fontSize: "24px",
    },
  },
});

const HeaderContainer = styled("div", containerStyles);
const HeaderImg = styled("img", headerImgStyles);
const HeaderLogo = styled("div", logoStyles);

export { HeaderContainer, HeaderImg, HeaderLogo };
