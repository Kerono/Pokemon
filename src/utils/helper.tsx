
import { CardProps } from "../components/Card"

export const alphabetSorting = (pokemonList: CardProps[]): CardProps[] => {

    let alphabetically = [...pokemonList].sort((a, b) => {
        let aName = a.name.toUpperCase()
        let bName = b.name.toUpperCase()
        if (aName < bName) {
            return -1;
        }
        if (aName > bName) {
            return 1;
        } 
        return 0
    })
    
    return [...alphabetically];
}