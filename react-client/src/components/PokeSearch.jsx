import React from 'react';

class PokeSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }; 
  }

  onChange (e) {
  	this.setState ({
  	  value: e.target.value
  	});
  }

  pokeSearch() {
  	this.props.onSearch(this.state.value);
    this.setState ({
      value: ''
    })
  }

  //do it silly, double all the functions!!!!!!!

  render() {
    return (<div>
      <h4>Search a pokemon!</h4>
      <input placeholder="Enter a PokeName! or a Pokedex number (1 -721)!!!" value={this.state.value} onChange={this.onChange.bind(this)} size='45'/>       
      <button onClick={this.pokeSearch.bind(this)}> add a pokemon </button>
    </div>) 
  }
}
export default PokeSearch;