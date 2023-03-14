import React from 'react';
import { useState, useEffect } from 'react';
import { Character } from '../../utility/types';
import { CharacterCard } from '../../Components/CharacterCard/CharacterCard';
import { getCharacters } from '../../utility/api';

import './CharactersList.scss';
import { NavLink } from 'react-router-dom';

export const CharactersList = (data: Character) => {
  const [list, setList] = useState<Character[]>([]);
  useEffect(() => {
    getCharacters(1).then((data) => {
      setList(data['results']);
    });
  }, [list]);

  if (!list) return <div>Loading...</div>;
  return (
    <>
      <header>
        <div className='main-logo'>
          <img src="./assets/mainlogo.svg" alt="logo" />
        </div>
      </header>
      <div className="cards-wrapper">
        {list.map((item, index) => (
          <div key={index}>
            <NavLink to={`/character/${item.id}`}>
              {<CharacterCard {...item} />}
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
};

