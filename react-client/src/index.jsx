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

    componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        console.log('great success!');
        console.log(data);
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

//double all the functions for the 2nd search!

  render () {
    return (<div>
      <h1>I wanna be the very best</h1>
        <ListItem poke1={this.state.poke1}/>
        <ListItem2 poke2={this.state.poke2}/>
        <div> {this.state.winner} </div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));