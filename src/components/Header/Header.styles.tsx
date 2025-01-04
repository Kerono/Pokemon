import { styled } from '../../../styled-system/jsx'
import { cva } from '../../../styled-system/css'

const containerStyles = cva({
    base: {
        display: "flex",
        alignItems: "center",
        gap: "16px",
    }
})

const headerImg = cva({
    base: {
        width: "sm",
        height: "medium",
        lg:{
            width: "medium",
            height: "large",
        }
    }
})

const logoStyles = cva({
    base: {
        flex: 1,
        fontSize: "sm",
        fontWeight: "bold",
        lg: {
            fontSize: "medium",
        }
    }
})


const HeaderContainer = styled("div", containerStyles)
const HeaderImg = styled("img", headerImg)
const HeaderLogo = styled("div", logoStyles)

export { HeaderContainer, HeaderImg, HeaderLogo }