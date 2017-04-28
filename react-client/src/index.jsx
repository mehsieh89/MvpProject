import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
// import PokeSearch from './components/PokeSearch.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  componentDidMount() {
   
  }

  pokeSearch(query) {
     $.ajax({
      type: 'GET', 
      url: 'http://127.0.0.1:3000/items',
      data: JSON.stringify({"query":`${query}`}),
      success: (data) => {
        console.log('meow')
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('WWWHHHYYYY');
      }
    });
  }

  render () {
    return (<div>
      <h1>Item List</h1>
      {//<SearchPokemon onSearch={this.pokeSearch.bind(this)}/>
      }
       <List items={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));