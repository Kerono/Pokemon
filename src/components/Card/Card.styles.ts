import { styled } from '../../../styled-system/jsx'
import { cva } from '../../../styled-system/css'


const cardContainerStyles = cva({
  base: {
    width: '180px',
    height: '180px',
    border: `1px solid black`,
    borderRadius: "7px",
    padding: "5px",
  },
})

const textStyle = cva({
  base: {
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '16px',
    opacity: 0.5,
    textAlign: "center",
    color: '6B7280', 
    borderRadius:"7px",
  },
})

const cardDataStyle = cva({
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
    height: '100%',
    backgroundColor: "white",
    border: `1px solid #1F2937`,
    borderRadius: 'inherit',
    padding: '16px',
  }
})

const Text = styled('div', textStyle)
const CardContainer = styled("div",cardContainerStyles)
const CardData = styled('div',cardDataStyle)

export { Text, CardContainer, CardData }