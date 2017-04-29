import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import PokeSearch from './components/PokeSearch.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      poke1: {}
    }
  }

  // componentDidMount() {
  //  this.pokeSearch()
  // }



  pokeSearch(query) {
    console.log(`${query} was searched`);
     $.ajax({
      type: 'get', 
      url: 'http://127.0.0.1:3000/items/?query=' + `${query}`,
      // data: JSON.stringify({"query":`${query}`}),
      // contentType: 'application/json',
      success: (data) => {
        console.log('meow')
        console.log('yyyyaaattttaaaaa', data);
        // console.log(data)
        // this.setState({
        //   items: data
        // })
      },
      error: (err) => {
        console.log('WWWHHHYYYY');
      }
    });
  }

  render () {
    return (<div>
      <h1>Item List</h1>
        <PokeSearch onSearch={this.pokeSearch.bind(this)}/>
       {//<List items={this.state.items}/>
     }
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));