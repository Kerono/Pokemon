import { FC } from 'react';
import { SearchFieldWrapper, SearchFieldImgLabel, SearchImg, SearchFieldInput } from './SearchField.styles';

type Props = {
    value: string;
    onChange: (value: string) => void;
}

export const SearchField: FC<Props> = ({ value, onChange }) => {

    return (
        <SearchFieldWrapper>
				<SearchFieldImgLabel htmlFor="searchField" >
					<SearchImg 
						src="/assets/search.svg" 
						alt="search"
					/>
				</SearchFieldImgLabel>
				<SearchFieldInput 
					id = "searchField"
					type="text"
					placeholder="Enter pokemon name"
					onChange={e => onChange(e.target.value)}
					value={value}
				/>
		</SearchFieldWrapper>
    )
}