import { ADD_CHARACTER, REMOVE_CHARACTER, REMOVE_ALL } from "../actions";
import createCharacter from "./helper";

const heroes = (state = [], action) => {
  switch (action.type) {
    case REMOVE_ALL:
      return [];
    case ADD_CHARACTER:
      return [...state, createCharacter(action.id)];
    case REMOVE_CHARACTER:
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};

export default heroes;
