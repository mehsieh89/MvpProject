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
  }

  //do it silly, double all the functions!!!!!!!

  render() {
    return (<div>
      <h4>Search a pokemon!</h4>
      pokemon name or number between 1 -721: <input value={this.state.value} onChange={this.onChange.bind(this)}/>       
      <button onClick={this.pokeSearch.bind(this)}> add pokemon </button>
      pokemon name or number between 1 -721: <input value={this.state.value} onChange={this.onChange.bind(this)}/> 
      <button onClick={this.pokeSearch.bind(this)}> add pokemon </button>
    </div>) 
  }
}
export default PokeSearch;