import { FC } from "react";
import { CardProps, Card } from "@/components/Card";
import { Wrapper } from "@/components/PokemonList/PokemonList.components";
import { Skeleton } from "../Skeleton";
import { range } from "@/utils/range";
import { cardsPerPage } from "@/variables";

type Props = {
  isLoading: boolean;
  list: CardProps[];
};

export const PokemonList: FC<Props> = ({ list, isLoading }) => {
  return (
    <Wrapper>
      {isLoading ? (
        <>
          {range(cardsPerPage).map((id) => (
            <Skeleton key={id} width="180px" height="180px" />
          ))}
        </>
      ) : (
        <>
          {list.map(({ name, color, img, id }) => (
            <Card id={id} key={id} name={name} color={color} img={img} />
          ))}
        </>
      )}
    </Wrapper>
  );
};
