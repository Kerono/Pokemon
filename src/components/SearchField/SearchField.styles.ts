import { styled } from "@/../styled-system/jsx"
import { cva } from "@/../styled-system/css"

const searchFieldWrapperStyles = cva({
    base: {
        marginTop: "8px",
        marginBottom: "8px",
        padding: "8px",
        border: "1px solid lightgray",
        borderRadius: "8px",
        position: "relative",
        display: "flex", 
        gap: "16px"
    }
})

const searchFieldLabelStyles = cva({
    base: {
        display:"flex",
    }
})

const searchFieldImgStyles = cva ({
    base: {
        width:"20px",
        cursor: "pointer",
    }
})

const searchFieldInputStyles = cva ({
    base: {
        border: 0,
        outline:'none',
        width: "100%",
        fontSize: "14px",
        lineHeight:"20px",
    }
})

const SearchFieldWrapper = styled("div", searchFieldWrapperStyles)
const SearchFieldImgLabel = styled("label", searchFieldLabelStyles)
const SearchImg = styled("img", searchFieldImgStyles)
const SearchFieldInput = styled("input", searchFieldInputStyles)

export { SearchFieldWrapper, SearchFieldImgLabel, SearchImg, SearchFieldInput }
