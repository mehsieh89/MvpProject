import React from 'react';

const History = (props) => (
  <div>
  <button onClick={props.pokeHistory} > Poke Search History </button>
    {props.history.map(one => (
    	<img src={ one.spriteURL }></img>
    ))}
  </div>
)
//<button> onClick={this.pokeHistory} > History </button>
export default History;