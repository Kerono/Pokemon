import { FC } from "react";
import { CardProps, Card } from "@/components/Card"
import { Wrapper } from "@/components/PokemonList"

interface Props {
	isLoading: boolean
    list: CardProps[]
}

export const PokemonList: FC<Props> = ({list, isLoading}) => {
    return (
		<Wrapper>
			{isLoading
				? (
					<div>loading...</div>
				)
				: (
					<>
						{list.map(({ name, color, img, id }) => (
							<Card
								key={id}
								id={id}
								name={name}
								color={color}
								img={img}
							/>
						))}
					</>
				)
			}
		</Wrapper>
	)
}