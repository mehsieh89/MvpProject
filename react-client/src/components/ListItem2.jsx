import React from 'react';

const ListItem2 = (props) => {
	var types = (props.poke2.type[0]).charAt(0).toUpperCase() + (props.poke2.type[0]).slice(1);
	if (props.poke2.type[1] !== undefined) {
	  types = types + ', ' + (props.poke2.type[1]).charAt(0).toUpperCase() + (props.poke2.type[1]).slice(1)
	}
return (
  <div>
	  <div>
	    name: { (props.poke2.name).charAt(0).toUpperCase() + (props.poke2.name).slice(1) }
	  </div>
	  <div>
	    types: { types }
	  </div>
	  <img src={ props.poke2.spriteURL }></img>
  </div>  
  )
}

// (props.poke2.type[0]).charAt(0).toUpperCase() + (props.poke2.type[0]).slice(1)
export default ListItem2;