import React from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import Search from './components/search/search.component';

class App extends React.Component {
  state = {
    monsters: [],
    searchFilter: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState({
          monsters: users
        });
      });
  }

  handleSearch = (event) => {
    this.setState({
      searchFilter: event.target.value
    });
  }

  filerMonsters = () => {
    return this.state.monsters.filter(
      (monster) => monster.name.includes(this.state.searchFilter)
    )
  }

  render() {
    let filteredMonsters = this.filerMonsters();
    return (
      <>
        <h1 className='App'>Monsters!</h1>
        <Search onChange={this.handleSearch} />
        <CardList monsters={filteredMonsters} />
      </>
    );
  }
}

export default App;
