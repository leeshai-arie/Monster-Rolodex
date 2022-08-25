import { Component } from 'react';

import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import './App.css';

const App = () => {

  const onSearchChange = (event) => {
    const searchField = event.target.value.toLo
  };

  return(
    <div className='App'>
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBox className='search-box' onChangeHandler={onSearchChange} placeholder='search monsters'/>
      <CardList monsters={filterdMonsters} />
    </div>
  );
};
 
export default App;