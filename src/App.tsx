import { useState, useEffect, createContext } from "react";
import "./App.css";
import { alphabetSorting } from "@/utils/alphabetSorting";
import { Header } from "@/components/Header";
import { SearchField } from "@/components/SearchField";
import { PokemonList } from "@/components/PokemonList";
import { CardProps } from "@/components/Card";
import { container } from "@/../styled-system/patterns";
import { ReorderingButton } from "@/components/ReorderButton";
import { LayoutGroup } from "motion/react";
import { Pagination } from "@/components/Pagination";
import { Dispatch, SetStateAction } from "react";
import { Modal } from "@/components/Modal";
import { cardsPerPage } from "@/variables";
import { UserInfo } from "@/components/UserInfo";
import { AnimatePresence } from "motion/react";

export type Sort = "alphabet";

type Color =
  | "green"
  | "red"
  | "blue"
  | "white"
  | "brown"
  | "yellow"
  | "purple"
  | "pink"
  | "gray";

export type PokemonListInfo = {
  name: string;
  url: string;
  key: number;
  img: string;
  color: Color;
};

type PokemonListResponse = {
  results: {
    name: string;
    url: string;
  }[];
};

type PokemonInfoResponse = {
  sprites: {
    front_default: string;
  };
};

type PokemonSpeciesInfoResponse = {
  id: number;
  color: {
    name: Color;
  };
};

export type PokemonContextType = {
  clickedPokemon: { name: string } | null;
  setClickedPokemon: Dispatch<SetStateAction<{ name: string } | null>>;
};

export const PokemonContext = createContext<PokemonContextType | null>(null);

const pokemonsLimit = 95;

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchValue, setSearchValue] = useState<string>("");
  const [pokemonList, setPokemonList] = useState<CardProps[]>([]);
  const [sort, setSort] = useState<Sort | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [error, setError] = useState<boolean>(false);
  const [clickedPokemon, setClickedPokemon] = useState<{
    name: string;
  } | null>(null);

  const filteredList =
    searchValue === ""
      ? pokemonList
      : pokemonList.filter((card) => {
          return card.name.includes(searchValue.toLocaleLowerCase().trim());
        });
  const isListEmpty = filteredList.length === 0 && !isLoading;
  const numOfPages = Math.ceil(filteredList.length / cardsPerPage);
  const firstCardOnPageIndex = (currentPage - 1) * cardsPerPage;
  const lastCardOnPageIndex = currentPage * cardsPerPage;
  const pageCards = filteredList.slice(
    firstCardOnPageIndex,
    lastCardOnPageIndex
  );

  const sortedList =
    sort === "alphabet" ? alphabetSorting(pageCards) : pageCards;

  const toggleAphabetSorting = () => {
    setSort((s) => (s === "alphabet" ? null : "alphabet"));
  };

  useEffect(() => {
    const res = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${pokemonsLimit}`
        );
        const data: PokemonListResponse = await response.json();

        const pokemonInfoPromises: Promise<string>[] = data.results.map(
          ({ url }) => {
            return fetch(url)
              .then((responce) => responce.json())
              .then(
                (result: PokemonInfoResponse) => result.sprites.front_default
              );
          }
        );

        const pokemonSpeciesInfoPromises: Promise<{
          id: number;
          color: Color;
        }>[] = data.results.map(({ name }) => {
          return fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}/`)
            .then((responce) => responce.json())
            .then((result: PokemonSpeciesInfoResponse) => ({
              id: result.id,
              color: result.color.name,
            }));
        });
        const pokemonsInfo = await Promise.all(pokemonInfoPromises);
        const pokemonsSpeciesInfo = await Promise.all(
          pokemonSpeciesInfoPromises
        );

        const cards: CardProps[] = data.results.map((r, index) => ({
          id: pokemonsSpeciesInfo[index].id,
          name: r.name,
          img: pokemonsInfo[index],
          color: pokemonsSpeciesInfo[index].color,
        }));
        setPokemonList(cards);
        setIsLoading(false);
      } catch (error: unknown) {
        let errorMessage = "Unknown Error";
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        console.error(errorMessage);
        setIsLoading(false);
        setError(true);
      }
    };

    res();
  }, []);

  useEffect(() => {
    if (isLoading) return;
    if (currentPage > numOfPages) {
      setCurrentPage(1);
    }
  }, [currentPage, numOfPages, isLoading]);

  return (
    <PokemonContext.Provider value={{ clickedPokemon, setClickedPokemon }}>
      <LayoutGroup>
        <div
          className={container({
            position: "relative",
            maxWidth: "1024px",
            paddingY: 4,
            paddingX: 4,
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          })}
        >
          <Header>
            <ReorderingButton
              aphabetSorting={toggleAphabetSorting}
              currentSort={sort}
            />
          </Header>
          <SearchField
            value={searchValue}
            onChange={(value: string) => setSearchValue(value)}
          />
          {error && (
            <UserInfo>
              <div>
                We have problems on the server side, please try again later
              </div>
            </UserInfo>
          )}
          {isListEmpty && !error ? (
            <UserInfo>
              <div>Could not find the required pokemon. Check spelling.</div>
            </UserInfo>
          ) : (
            <PokemonList list={sortedList} isLoading={isLoading} />
          )}
          <AnimatePresence>
            {clickedPokemon && <Modal key="modal" />}
          </AnimatePresence>

          <Pagination
            currentPage={currentPage}
            numOfPages={numOfPages}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </LayoutGroup>
    </PokemonContext.Provider>
  );
}

export type { Color };
export default App;
