export interface PageResponseStructure {
  count: number;
  next: string;
  previous: string;
  results: PokemonResults[];
}

export interface PokemonResults {
  name: string;
  url: string;
}
