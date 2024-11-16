import characters_json from "../data/characters.json";

const createCharacter = id => {
  return characters_json.find(c => c.id === id);
};

export default createCharacter;
