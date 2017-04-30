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
        type: ['electric'],
        spriteURL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
      },
      poke2: {
        name: "Raichu",
        type: ['electric'],
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
    var poke1types = this.state.poke1.type;
    var poke2types = this.state.poke2.type;

    var point = 0;
    for ( var i = 0; i < poke1types.length; i++ ) {
      for ( var k = 0; k < poke2types.length; k++) {
        if (strong[poke1types[i]].includes(poke2types[k])) {
          point += 1;
        }
        if (weak[poke1types[i]].includes(poke2types[k])) {
          point -= 1;
        }
      }
    }
    if (point > 0) {
      console.log(this.state.poke1.name + 'wins!');
      alert(this.state.poke1.name + ' has advantage!')
    } else if (point < 0) {
      console.log(this.state.poke2.name + 'wins!');
      alert(this.state.poke2.name + ' has advantage!')
    } else {
      console.log('NEITHER POKEMON WINS')
      alert('Neither Pokemon has advantage!')
    }
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
        <History history={this.state.history} pokeHistory={this.pokeHistory.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));