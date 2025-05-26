import { FC } from "react";
import {
  ContentWrapper,
  Wrapper,
  Title,
  Img,
  MainContentWrapper,
  ImageWrapper,
  StatsWrapper,
  InfoWrapper,
  TypesWrapper,
  ExitImg,
  ExitWrapper,
} from "./PokemonStatsCard.components";
import { useSelectedPokemon } from "@/components/CustomHooks/useSelectedPokemon";
import type { Transition } from "@/components/Card";
import type { PokemonInfo } from "@/components/Modal";

const transitionStyle: Transition = {
  type: "spring",
  damping: 25,
  stiffness: 200,
  delay: 0.2,
};

export const PokemonStatsCard: FC<PokemonInfo> = ({
  name,
  stats,
  img,
  types,
}) => {
  const { setClickedPokemon } = useSelectedPokemon();
  const typesTitle = `${types.length} ${types.length === 1 ? "type" : "types"}`;

  return (
    <Wrapper
      layout
      transition={transitionStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ExitWrapper onClick={() => setClickedPokemon(null)}>
        <ExitImg src="/assets/x.svg" alt="exit button" />
      </ExitWrapper>
      <ContentWrapper>
        <ImageWrapper>
          <Img src={img} alt="pokemon image" />
        </ImageWrapper>
        <MainContentWrapper>
          <Title>{name}</Title>
          <StatsWrapper>
            {stats.map(({ base_stat, stat }) => (
              <InfoWrapper key={stat.name}>
                <span>{stat.name}</span>
                <span style={{ fontWeight: "bold" }}>{base_stat}</span>
              </InfoWrapper>
            ))}
          </StatsWrapper>
          <Title>{typesTitle}</Title>
          <TypesWrapper>
            {types.map(({ type }) => (
              <InfoWrapper key={type.name}>{type.name}</InfoWrapper>
            ))}
          </TypesWrapper>
        </MainContentWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};
