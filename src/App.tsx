import { useState, useEffect } from 'react';
import './App.css';
import { alphabetSorting } from './utils/helper';
import { Header } from './components/Header';
import { SearchField } from './components/SearchField';
import { PokemonList } from './components/PokemonList';
import { CardProps } from './components/Card';
import { css } from '@/../styled-system/css';
import { container } from '@/../styled-system/patterns';

type Sort = 'alphabet'

type Color = 'green' | 'red' | 'blue' | 'white' | 'brown' | 'yellow' | 'purple' | 'pink' | 'gray'

export interface PokemonListInfo  {
	name: string;
	url: string;
	key: number;
	img: string;
	color: Color;
}

type PokemonListResponse = {
	results: {
		name: string;
		url: string;
	}[]
}

type PokemonInfoResponse = {
	sprites: {
		front_default: string
	}
}

type PokemonSpeciesInfoResponse = {
	id: number;
	color: {
		name: Color;
	}
}

function App() {
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [searchValue, setSearchValue] = useState<string>("")
	const [pokemonList, setPokemonList] = useState<CardProps[]>([]);
	const [sort, setSort] = useState<Sort | null>(null)

	useEffect(() => {
		const res = async () => {
			const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
			const data: PokemonListResponse = await response.json()

			const pokemonInfoPromises: Promise<string>[] = data.results.map(({
				url
			}) => {
				return fetch(url)
					.then(responce => responce.json())
					.then((result: PokemonInfoResponse) => result.sprites.front_default)
			})

			const pokemonSpeciesInfoPromises: Promise<{ id: number; color: Color }>[] = data.results.map(({ name }) => {
				return fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}/`)
					.then(responce => responce.json())
					.then((result: PokemonSpeciesInfoResponse) => ({
						id: result.id,
						color: result.color.name,
					}))
			})
			const pokemonsInfo = await Promise.all(pokemonInfoPromises)
			
			const pokemonsSpeciesInfo = await Promise.all(pokemonSpeciesInfoPromises)

			const cards: CardProps[] = data.results.map((r, index) => ({
				id: pokemonsSpeciesInfo[index].id,
				name: r.name,
				img: pokemonsInfo[index],
				color: pokemonsSpeciesInfo[index].color,
			}))
			setPokemonList(cards)
			setIsLoading(false)
		}

		res()
	}, [])

	const filteredList = searchValue === ""
		? pokemonList
		: pokemonList.filter(card => {
			return card.name.includes(searchValue.toLocaleLowerCase().trim())
		});

	const isListEmpty = filteredList.length === 0 && !isLoading ;

	const sortedList = sort === 'alphabet' ? alphabetSorting(filteredList) : filteredList;

	const toggleAphabetSorting = () => {
		setSort(s => s === 'alphabet' ? null : 'alphabet')
	}

	return (
		<div className={container()}>
			<Header>
				<div
					className={css({
						display: "flex",
						alignItems: "center",
						fontWeight: "bold",
						cursor: "pointer",
					})}
					onClick={toggleAphabetSorting}
				>
					<div className={css({
						fontWeight: "bold",
						fontSize: "reorderS",
						lg:{
							fontSize: "reorderM",
						}
					})}>
						<div>A</div>
						<div>Z</div>
					</div>
					<img 
						className={css({
							width:"imgW",
							height:"imgH",
							paddingLeft: "5px",

						})}
						src="/assets/arrowDown.svg" 
						alt="arrowDown"
					/>
				</div>
			</Header>
			<SearchField
				value={searchValue}
				onChange={value => setSearchValue(value)}
			/>
			{isListEmpty ? (
				<div>Не удалось найти нужного покемона. Проверьте корректность написания. </div>
			) : (
				<PokemonList list={sortedList} isLoading={isLoading} />
			)}
		</div>
  )
}

export type { Color };
export default App;
