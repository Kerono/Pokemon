import { styled } from "@/../styled-system/jsx";
import { cva } from "@/../styled-system/css";

const searchFieldWrapperStyles = cva({
  base: {
    marginTop: "8px",
    marginBottom: "8px",
    padding: "8px",
    border: "1px solid lightgray",
    borderRadius: "8px",
    position: "relative",
    display: "flex",
    gap: "16px",
  },
});

const searchFieldLabelStyles = cva({
  base: {
    display: "flex",
  },
});

const searchFieldImgStyles = cva({
  base: {
    cursor: "pointer",
    width: "imgS",
  },
});

const searchFieldInputStyles = cva({
  base: {
    border: 0,
    outline: "none",
    flex: 1,
    fontSize: "reorderM",
    lineHeight: "20px",
    lg: {
      fontSize: "reorderS",
    },
  },
});

const SearchFieldWrapper = styled("div", searchFieldWrapperStyles);
const SearchFieldImgLabel = styled("label", searchFieldLabelStyles);
const SearchImg = styled("img", searchFieldImgStyles);
const SearchFieldInput = styled("input", searchFieldInputStyles);

export { SearchFieldWrapper, SearchFieldImgLabel, SearchImg, SearchFieldInput };
