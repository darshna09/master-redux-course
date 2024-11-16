export const REMOVE_ALL = "REMOVE_ALL";
export const ADD_CHARACTER = "ADD_CHARACTER";
export const REMOVE_CHARACTER = "REMOVE_CHARACTER";

export const addCharacterById = id => {
  return {
    type: ADD_CHARACTER,
    id
  };
};

export const removeCharacterById = id => {
  return {
    type: REMOVE_CHARACTER,
    id
  };
};

export const removeAllHeroes = () => {
  return {
    type: REMOVE_ALL
  };
};
