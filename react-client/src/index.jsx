import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ListItem from './components/ListItem.jsx';
import ListItem2 from './components/ListItem2.jsx';
import PokeSearch from './components/PokeSearch.jsx';
import PokeSearch2 from './components/PokeSearch2.jsx';
import History from './components/History.jsx';
// import Battle from './components/Battle.js';
import {strong, weak} from './components/BattleData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      poke1: {
        name: "Pikachu",
        type: ['electric'],
        spriteURL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
      },
      poke2: {
        name: "Raichu",
        type: ['electric'],
        spriteURL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png'
      },
      history: [],
      winner: ''
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
    var poke1types = this.state.poke1.type;
    var poke2types = this.state.poke2.type;

    var pokepoint1 = 0;
    for ( var i = 0; i < poke1types.length; i++ ) {
      for ( var k = 0; k < poke2types.length; k++) {
        if (strong[poke1types[i]].includes(poke2types[k])) {
          pokepoint1 += 1;
        }
      }
    }
    var pokepoint2 = 0;
    for ( var y = 0; y < poke2types.length; y++ ) {
      for ( var h = 0; h < poke1types.length; h++) {
        if (strong[poke2types[y]].includes(poke1types[h])) {
          pokepoint2 += 1;
        }
      }
    }
    var statement = '';
    if (pokepoint1 > pokepoint2) {
      statement = (this.state.poke1.name).toUpperCase() + ' WINS!'
    } else if (pokepoint1 < pokepoint2) {
      statement = (this.state.poke2.name).toUpperCase() + ' WINS!'
    } else {
      statement = 'NEITHER POKEMON WINS!';
    }
    this.setState({
      winner: statement
    })
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
        <button onClick={this.battle.bind(this)} > Battle! </button>
        <div> {this.state.winner} </div>
        <History history={this.state.history} pokeHistory={this.pokeHistory.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));