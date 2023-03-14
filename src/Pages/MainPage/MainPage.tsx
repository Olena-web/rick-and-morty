import React from 'react';

import { Routes, Route } from 'react-router-dom';
//import { NotFound } from '../NotFound/NotFound';
//import { PaginationComponent } from '../Pagination/Pagination';
//import { JobDetails } from '../JobDetails/JobDetails';
import { Character } from '../../utility/types';
import { CharacterDetails} from '../../Components/CharacterDetails/CharacterDetails';
import { CharactersList } from '../../Components/CharacteresList/CharactersList';


export class MainPage extends React.Component < Character> {
  el: HTMLDivElement;
constructor(props:  Character) {
  super(props);
    this.el = document.createElement('div');
  
}
  render() {
    return (
      <div >
      
      <main>
        <Routes>
         <Route path="/character" element={<CharactersList id={this.props.id} name={''} status={''} species={''} type={''} gender={''} origin={{
            name: '',
            url: ''
          }} location={{
            name: '',
            url: ''
          }} image={''} episode={[]} url={''} created={''} />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path={`/character/:id`} element={<CharacterDetails id={this.props.id} name={this.props.name} status={this.props.status} species={''} type={''} gender={''} origin={{
            name: '',
            url: ''
          }} location={{
            name: '',
            url: ''
          }} image={''} episode={[]} url={''} created={''} />} />
        </Routes>
      </main>
      </div>
    );
  }
}