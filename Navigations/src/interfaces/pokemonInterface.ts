export interface Pokemon {
  name: string;
  id: string;
  picture: string;
}

export interface PokemonDetail {
  abilities: [any];
  base_experience: number;
  forms: [any];
  height: number;
  held_items: [any];
  weight: number;
}
