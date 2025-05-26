import { FC } from "react";
import {
  SearchFieldWrapper,
  SearchFieldImgLabel,
  SearchImg,
  SearchFieldInput,
} from "./SearchField.componets";
import { useRef, useEffect } from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const SearchField: FC<Props> = ({ value, onChange }) => {
  const searchFieldRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (searchFieldRef.current) {
      searchFieldRef.current.focus();
    }
  }, []);

  return (
    <SearchFieldWrapper>
      <SearchFieldImgLabel htmlFor="searchField">
        <SearchImg src="/assets/search.svg" alt="search" />
      </SearchFieldImgLabel>
      <SearchFieldInput
        ref={searchFieldRef}
        id="searchField"
        type="text"
        placeholder="Enter pokemon name"
        onChange={(e) => {
          onChange(e.target.value);
        }}
        value={value}
      />
    </SearchFieldWrapper>
  );
};
