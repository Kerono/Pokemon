import { Button, SymbolsContainer, Img } from "./ReorderButton.components";
import { Sort } from "@/App";
import { FC } from "react";

type Props = {
  currentSort: Sort | null;
  aphabetSorting: () => void;
};
export const ReorderingButton: FC<Props> = ({
  currentSort,
  aphabetSorting,
}) => {
  const transformStyle = currentSort ? "180deg" : "0";

  return (
    <Button onClick={aphabetSorting}>
      <SymbolsContainer>
        <div>A</div>
        <div>Z</div>
      </SymbolsContainer>
      <Img
        animate={{ rotateX: transformStyle }}
        src="/assets/arrowDown.svg"
        alt="arrowDown"
      />
    </Button>
  );
};
