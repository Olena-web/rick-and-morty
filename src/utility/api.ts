export const baseUrl = 'https://rickandmortyapi.com/api';

export const Characters = `${baseUrl}/character`; // https://rickandmortyapi.com/api/character
export const Character = `${baseUrl}/character/:id`; // https://rickandmortyapi.com/api/character/:id
export const Episodes = `${baseUrl}/episode`; // https://rickandmortyapi.com/api/episode
export const Episode = `${baseUrl}/episode/:id`; // https://rickandmortyapi.com/api/episode/:id
export const Locations = `${baseUrl}/location`; // https://rickandmortyapi.com/api/location
export const Location = `${baseUrl}/location/:id`; // https://rickandmortyapi.com/api/location/:id

export const getCharacters = async (page: number) => {
    const response = await fetch(`${Characters}?page=${page}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },

    });
    const data = await response.json();
    return data;
};

export const getCharacter = async (id: number) => {
    const response = await fetch(Character.replace(':id', id.toString()));
    const data = await response.json();
    return data;
};

export const getEpisodes = async (page: number) => {
    const response = await fetch(`${Episodes}?page=${page}`);
    const data = await response.json();
    return data;
}



