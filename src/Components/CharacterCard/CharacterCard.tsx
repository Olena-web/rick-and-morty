import React from 'react';
import {useState, useEffect} from 'react';
import { Character } from '../../utility/types';
import { getCharacter } from '../../utility/api';

export const CharacterCard = (props: Character) => {
    const [character, setCharacter] = useState<Character>(props);

    useEffect(() => {
        getCharacter(props.id).then((data) => {
            setCharacter(data);
        });
    }, [character, props.id]);

    const handleClick = () => {
        localStorage.setItem('key', props.id.toString());
    }

    return (
        
        <div className="character-card" onClick={handleClick}>
            <div className="character-card__image">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="character-card__info">
                <h2>{props.name}</h2>
                <p>
                 <strong>Species:</strong> {props.species}
                </p>
            </div>
        </div>
            
           
    );
};
