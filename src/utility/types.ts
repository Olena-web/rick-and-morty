import { Key } from "react";

export type Character = {
    [x: string]: Key | null | undefined | string | number | string[] | { name: string, url: string };
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {
        name: string,
        url: string
    },
    location: {
        name: string,
        url: string
    },
    image: string,
    episode: string[],
    url: string,
    created: string
}

