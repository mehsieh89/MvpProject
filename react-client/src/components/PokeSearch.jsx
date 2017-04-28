import React from 'react';

class PokeSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    } 
  }

  onChange(e) {
  	this.setState = ({
  	  term: e.target.value
  	});
  }

  pokeSearch() {
  	this.props.pokeSearch(this.state.term);
  }

  render() {
    return (<div>
      <h4>Search a pokemon!</h4>
      pokemon name or number between 1 -721: <input value={this.state.terms} onChange={this.onChange.bind(this)}/>       
      <button onClick={this.pokeSearch.bind(this)}> add pokemon </button>
    </div>) 
  }
}
export default PokeSearch;