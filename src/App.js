import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: 1,
        },
        {
          name: 'Frank',
          id: 2,
        },
        {
          name: 'Jacky',
          id: 3,
        },
        {
          name: 'Andrei',
          id: 4,
        },
      ]
    };
  }
  
  render() {
    return(
      <div>
        {
          this.state.monsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            )})}
      </div>
    )
  };
};

export default App;