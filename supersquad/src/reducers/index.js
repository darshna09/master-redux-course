import { combineReducers } from "redux";

import characters from "./characters";
import heroes from "./heroes";

const rootReducer = combineReducers({
  characters,
  heroes
});

export default rootReducer;
