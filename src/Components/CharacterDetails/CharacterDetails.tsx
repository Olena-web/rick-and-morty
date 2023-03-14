import React from 'react';
import { useState, useEffect } from 'react';
import { Character } from '../../utility/types';
import { getCharacter } from '../../utility/api';
import { NavLink } from 'react-router-dom';

export const CharacterDetails = (props: Character) => {
    const [character, setCharacter] = useState<Character>(props);
    const id = Number(localStorage.getItem('key'));

    useEffect(() => {
        getCharacter(id).then((data) => {
            setCharacter(data);
        });
    }, [character, id]);

    return (
        <>
            <NavLink to={`/character`}>
                Go back
            </NavLink>

            <div className="character-card">
                <div className="character-card__image">
                    <img src={character.image} alt={character.name} />
                </div>
                <div className="character-card__info">
                    <h2>{character.name}</h2>
                    <h3>Informations</h3>
                    <p>
                        <strong>Gender:</strong> {character.gender}
                    </p>
                    <p>
                        <strong>Status:</strong> {character.status}
                    </p>
                    <p>
                        <strong>Species:</strong> {character.species}
                    </p>
                    <p>
                        <strong>Origin:</strong> {character.origin.name}
                    </p>
                    <p>
                        <strong>Location:</strong> {character.location.name}
                    </p>

                </div>
            </div>
        </>

    );
};
