import React from 'react';
import { useState, useEffect } from 'react';
import { Character } from '../../utility/types';
import { getCharacters } from '../../utility/api';
import { CharacterCard } from '../../Components/CharacterCard/CharacterCard';
import './CharactersList.scss';

export const CharactersList = (data: Character) => {
  const [list, setList] = useState<Character[]>([]);
  useEffect(() => {
    getCharacters(1).then((data) => {
      setList(data['results']);
    });
  }, [list]);
  
if (!list) return <div>Loading...</div>;
    return (
      <div className="cards-wrapper">
      {list.map((card: Character) => (
        <div key={card.id}>
          <div className="character-card__image">
                <img src={card.image} alt={card.name} />
            </div>
          <p>{card.name}</p>
          <p>{card.species}</p>
        </div>
      ))}
    </div>
    );
};
    
  