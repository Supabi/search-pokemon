export interface Attack {
  name: string;
  type: string;
  damage: number;
}

export interface Evolution {
  id: string;
  number: string;
  name: string;
  image: string;
}

export interface Pokemon {
  id: string;
  number: string;
  name: string;
  image: string;

  attacks: {
    fast: Attack[];
    special: Attack[];
  };

  evolutions: Evolution[]| null;
}

export interface GetPokemonData {
  pokemon: Pokemon | null;
}