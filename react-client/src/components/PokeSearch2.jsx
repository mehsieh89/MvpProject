import React from 'react';

class PokeSearch2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value2: ''
    }; 
  }

  changeHandler2 (e) {
  	this.setState ({
  	  value2: e.target.value
  	});
  }

  pokeSearch2() {
  	this.props.onSearch2(this.state.value2);
    this.setState ({
      value2: ''
    })
  }

  //do it silly, double all the functions!!!!!!!
  render() {
    return (<div>
      <input placeholder="Another one! *dab*" value={this.state.value2} onChange={this.changeHandler2.bind(this)} size='17'/>       
      <button onClick={this.pokeSearch2.bind(this)}> add a pokemon </button>
    </div>) 
  }
}
export default PokeSearch2;