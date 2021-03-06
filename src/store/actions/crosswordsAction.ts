import { CrosswordsPuzzleType } from "../../interfaces/crosswordsPuzzleType";
import { CrosswordsActionTypes, LOAD_CROSSWORDS_PUZZLE, SET_CROSSWORDS_ERROR, SET_CROSSWORDS_PUZZLE } from "./crosswordsActionTypes";

export function loadCrosswordsPuzzle(): CrosswordsActionTypes {
  return {
    type: LOAD_CROSSWORDS_PUZZLE,
  };
}

export function setCrosswordsPuzzle(date: string, puzzle: CrosswordsPuzzleType): CrosswordsActionTypes {
  return {
    type: SET_CROSSWORDS_PUZZLE,
    date: date,
    puzzle: puzzle,
  };
}

export function setCrosswordsError(error: string): CrosswordsActionTypes {
  return {
    type: SET_CROSSWORDS_ERROR,
    error: error,
  };
}
