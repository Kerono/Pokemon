import { FC } from "react";
import { Text, CardContainer, CardData, Img } from "./Card.components";
import { token } from "../../../styled-system/tokens";
import { Color } from "../../../panda.config";
import { useSelectedPokemon } from "@/components/CustomHooks/useSelectedPokemon";

type Props = {
  id: number;
  name: string;
  img: string;
  color: Color;
};

export type Transition = {
  type: "spring";
  damping: number;
  stiffness: number;
  delay?: number;
};

const transitionStyle: Transition = {
  type: "spring",
  damping: 35,
  stiffness: 190,
};

const Card: FC<Props> = ({ name, img, color }) => {
  const { setClickedPokemon } = useSelectedPokemon();

  return (
    <CardContainer
      layout
      onClick={() => {
        setClickedPokemon({ name });
      }}
      style={{
        backgroundColor: token(`colors.${color}`),
      }}
      transition={transitionStyle}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <CardData
        layout
        transition={{ ...transitionStyle }}
        whileHover={{ scale: 1.15 }}
      >
        <Img src={img} alt={"pokemon img"} />
        <Text>{name}</Text>
      </CardData>
    </CardContainer>
  );
};

export type { Props };
export { Card };
