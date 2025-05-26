import { useEffect, useRef, useState } from "react";
import { PokemonStatsCard } from "@/components/PokemonStatsCard";
import { useSelectedPokemon } from "@/components/CustomHooks/useSelectedPokemon";
import { Overlay } from "./Modal.components";
import { AnimatePresence } from "motion/react";
import { Skeleton } from "@/components/Skeleton";
import { UserInfo } from "@/components/UserInfo";
import type { Transition } from "@/components/Card";

export type Response = {
  base_stat: number;
  stat: { name: string };
};

export type PokemonInfo = {
  name: string;
  stats: Response[];
  img: string;
  types: { type: { name: string } }[];
};

type Data = {
  stats: Response[];
  sprites: { front_shiny: string; front_default: string };
  name: string;
  types: { type: { name: string } }[];
};

const transitionStyle: Transition = {
  type: "spring",
  damping: 35,
  stiffness: 150,
};

type DataState = "loading" | "error" | "complete";

export const Modal = () => {
  const { clickedPokemon, setClickedPokemon } = useSelectedPokemon();
  const [pokemonInfo, setPokemonInfo] = useState<PokemonInfo | null>(null);
  const [dataState, setDataState] = useState<DataState>("loading");

  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    async function pokemonInfo() {
      console.log("useEffect call");
      try {
        if (!clickedPokemon?.name) return;
        setDataState("loading");
        const responce = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${clickedPokemon.name}`
        );
        console.log(responce, "res");
        if (responce.ok) {
          const data: Data = await responce.json();
          console.log(data, "check");
          const img = data.sprites.front_shiny || data.sprites.front_default;
          setPokemonInfo({
            name: data.name,
            img,
            stats: data.stats.map(({ base_stat, stat }) => ({
              base_stat,
              stat: { name: stat.name },
            })),
            types: data.types,
          });
          setDataState("complete");
        } else {
          setDataState("error");
        }
      } catch (err: unknown) {
        setDataState("error");
        console.error(err);
      }
    }
    pokemonInfo();
  }, [clickedPokemon]);

  useEffect(() => {
    function handleEsc(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setClickedPokemon(null);
      }
    }
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [setClickedPokemon]);

  useEffect(() => {
    function handleClick(event: Event) {
      if (overlayRef.current === event.target) {
        setClickedPokemon(null);
        console.log("haha close");
      }
    }
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [setClickedPokemon]);
  console.log(dataState, pokemonInfo);
  return (
    <Overlay
      layout
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={transitionStyle}
      ref={overlayRef}
    >
      {dataState === "error" && !pokemonInfo && (
        <UserInfo>
          <div>Something went wrong. Try again later</div>
        </UserInfo>
      )}
      {dataState === "loading" && !pokemonInfo && (
        <Skeleton width="450px" height="350px" />
      )}
      <AnimatePresence>
        {dataState === "complete" && pokemonInfo !== null && (
          <PokemonStatsCard
            name={pokemonInfo.name}
            img={pokemonInfo.img}
            stats={pokemonInfo.stats}
            types={pokemonInfo.types}
          />
        )}
      </AnimatePresence>
    </Overlay>
  );
};
