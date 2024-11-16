export const SET_RECIPES = "SET_RECIPES";
export const FAVOURITE_RECIPE = "FAVOURITE_RECIPE";
export const REMOVE_FAV_RECEIPE = "REMOVE_FAV_RECEIPE";

export const setRecipes = items => {
  return {
    type: SET_RECIPES,
    items
  };
};

export const favouriteRecipe = recipe => {
  return {
    type: FAVOURITE_RECIPE,
    recipe
  };
};

export const removeFavRecipe = recipe => {
  return {
    type: REMOVE_FAV_RECEIPE,
    title: recipe.title
  };
};
