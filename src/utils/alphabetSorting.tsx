import { CardProps } from "../components/Card";

export const alphabetSorting = (pokemonList: CardProps[]): CardProps[] => {
  const alphabetically = [...pokemonList].sort((a, b) => {
    const firstElementName = a.name.toUpperCase();
    const secondElementName = b.name.toUpperCase();
    if (firstElementName < secondElementName) {
      return -1;
    }
    if (firstElementName > secondElementName) {
      return 1;
    }
    return 0;
  });
  return [...alphabetically];
};
