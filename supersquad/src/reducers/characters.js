import characters_json from "../data/characters.json";
import { ADD_CHARACTER, REMOVE_CHARACTER, REMOVE_ALL } from "../actions";
import createCharacter from "./helper";

const characters = (state = characters_json, action) => {
  switch (action.type) {
    case REMOVE_ALL:
      return [...state];
    case ADD_CHARACTER:
      return state.filter(item => item.id !== action.id);
    case REMOVE_CHARACTER:
      return [...state, createCharacter(action.id)];
    default:
      return state;
  }
};

export default characters;
