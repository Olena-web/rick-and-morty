//import logo from '../public/logo.svg';
import './App.scss';
import { CharacterCard } from './Components/CharacterCard/CharacterCard';
import {MainPage} from './Pages/MainPage/MainPage';
function App() {
  
  return (
    <div className="App" id='app'>
      <header className="App-header">
      </header>
      <MainPage id={0} name={''} status={''} species={''} type={''} gender={''} origin={{
        name: '',
        url: ''
      }} location={{
        name: '',
        url: ''
      }} image={''} episode={[]} url={''} created={''}/>
      {/* <CharacterCard  /> */}
    </div>
  );
}

export default App;
