import React from 'react';

import { Routes, Route } from 'react-router-dom';
//import { NotFound } from '../NotFound/NotFound';
//import { PaginationComponent } from '../Pagination/Pagination';
//import { JobDetails } from '../JobDetails/JobDetails';
import { Character } from '../../utility/types';
import { CharacterCard } from '../../Components/CharacterCard/CharacterCard';
import { CharactersList } from '../../Components/CharacteresList/CharactersList';


export class MainPage extends React.Component < Character> {
  el: HTMLDivElement;
constructor(props:  Character) {
  super(props);
    this.el = document.createElement('div');
  
}
  render() {
    return (
      <main>
        <Routes>
         <Route path="/" element={<CharactersList id={0} name={''} status={''} species={''} type={''} gender={''} origin={{
            name: '',
            url: ''
          }} location={{
            name: '',
            url: ''
          }} image={''} episode={[]} url={''} created={''} />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path={`/character/:id`} element={<CharacterCard   />} />
        </Routes>
      </main>
    );
  }
}
