import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ListItem from './components/ListItem.jsx';
import ListItem2 from './components/ListItem2.jsx';
import PokeSearch from './components/PokeSearch.jsx';
import PokeSearch2 from './components/PokeSearch2.jsx';
import History from './components/History.jsx';
// import Battle from './components/Battle.js';
import {strong, weak}  from './components/BattleData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      poke1: {
        name: "Pikachu",
        type: ['Electric'],
        spriteURL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
      },
      poke2: {
        name: "Raichu",
        type: ['Electric'],
        spriteURL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png'
      },
      history: []
    }
  }

  pokeSearch(query) {
    $.ajax({
      type: 'get', 
      url: 'http://127.0.0.1:3000/pokesearch/?query=' + query,
      success: (data) => {
        this.setState ({poke1: data})
      }
    });
  }

  pokeSearch2(query) {
    $.ajax({
      type: 'get', 
      url: 'http://127.0.0.1:3000/pokesearch/?query=' + query,
      success: (data) => {
        this.setState ({poke2: data})
      }
    });
  }

  battle() {

  }

  pokeHistory() {
    $.ajax({
      type: 'get', 
      url: 'http://127.0.0.1:3000/pokeHistory',
      success: (data) => {
        this.setState ({history: data})
      }
    });
  }
//double all the functions for the 2nd search!

  render () {
    return (<div>
      <h1>I wanna be the very best</h1>
        <PokeSearch onSearch={this.pokeSearch.bind(this)}/>
        <ListItem poke1={this.state.poke1}/>
        <PokeSearch2 onSearch2={this.pokeSearch2.bind(this)}/>
        <ListItem2 poke2={this.state.poke2}/>
        <button onClick={this.battle} > Battle! </button>
        <History history={this.state.history} pokeHistory={this.pokeHistory.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));