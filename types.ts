export type AirportData = {
    icao: string;
    iata: string;
    name: string;
    city: string;
    region: string;
    country: string;
    elevation_ft: string;
    latitude: string;
    longitude: string;
    timezone: string;
}
export type Jokes = {
 joke: string
}

export type Recipe = {
    title: string;
    ingredients: string[];
    servings: string;
    instructions: string[];
};
export type RecipeData = {
    title: string;
    ingredients: string;
    servings: string;
    instructions: string;
};