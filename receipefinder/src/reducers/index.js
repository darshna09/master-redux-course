import { combineReducers } from "redux";
import { SET_RECIPES, FAVOURITE_RECIPE, REMOVE_FAV_RECEIPE } from "../actions";

const recipes = (state = [], action) => {
  switch (action.type) {
    case SET_RECIPES:
      return action.items;
    default:
      return state;
  }
};

const favouriteRecipe = (state = [], action) => {
  switch (action.type) {
    case FAVOURITE_RECIPE:
      return [...state, action.recipe];
    case REMOVE_FAV_RECEIPE:
      return state.filter(item => item.title !== action.title);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  recipes,
  favouriteRecipe
});

export default rootReducer;
