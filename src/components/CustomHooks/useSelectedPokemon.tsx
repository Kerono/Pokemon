import { useContext } from "react";
import type { PokemonContextType } from "@/App";
import { PokemonContext } from "@/App";

export const useSelectedPokemon = (): PokemonContextType => {
  const value = useContext(PokemonContext);

  if (value === null) {
    throw new Error("useSelectedPokemon must be used within a PokemonContext");
  }

  return value;
};
