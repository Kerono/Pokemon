
import { FC, PropsWithChildren } from "react";
import { HeaderContainer, HeaderImg, HeaderLogo } from "./Header.styles";

type Props = {
} & PropsWithChildren

export const Header : FC<Props> =  ({children}) => {
	return (
		<HeaderContainer>
			<HeaderImg 
				src="/assets/pokeball.svg" 
				alt="logo"
			/>
			<HeaderLogo>Pokédex</HeaderLogo>
			<div>
				{children}
			</div>
		</HeaderContainer>
	)
}