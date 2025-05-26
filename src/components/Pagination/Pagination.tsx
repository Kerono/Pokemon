import { range } from "@/utils/range";
import { FC } from "react";
import {
  PageButton,
  Container,
  PagesWrapper,
  Underline,
} from "./Pagination.components";
import { css } from "@/../styled-system/css";
import { useSelectedPokemon } from "@/components/CustomHooks/useSelectedPokemon";
import { AnimatePresence } from "motion/react";
type Props = {
  numOfPages: number;
  currentPage: number;
  setCurrentPage: (value: number) => void;
};

export const Pagination: FC<Props> = ({
  numOfPages,
  currentPage,
  setCurrentPage,
}) => {
  const title = numOfPages > 1 ? "Pages" : "Page";
  const { clickedPokemon } = useSelectedPokemon();

  return (
    <AnimatePresence mode="wait">
      <Container
        className={css({
          fontSize: "reorderS",
        })}
      >
        <div>{numOfPages > 0 && title}</div>
        <PagesWrapper>
          {range(numOfPages).map((page) => {
            return (
              <PageButton
                key={page}
                disabled={!!clickedPokemon}
                onClick={() => {
                  if (clickedPokemon) return;
                  setCurrentPage(page);
                }}
              >
                {page}
                {currentPage === page && (
                  <Underline
                    layoutId="underline"
                    layout="position"
                    style={{ originY: "0px" }}
                    transition={{ duration: 0.4 }}
                  />
                )}
              </PageButton>
            );
          })}
        </PagesWrapper>
      </Container>
    </AnimatePresence>
  );
};
