import React from 'react';

const ListItem = (props) => {
	var types = (props.poke1.type[0]).charAt(0).toUpperCase() + (props.poke1.type[0]).slice(1);
	if (props.poke1.type[1] !== undefined) {
	  types = types + ', ' + (props.poke1.type[1]).charAt(0).toUpperCase() + (props.poke1.type[1]).slice(1)
	}
return (
  <div>
	  <div>
	    name: { (props.poke1.name).charAt(0).toUpperCase() + (props.poke1.name).slice(1) }
	  </div>
	  <div>
	    types: { types }
	  </div>
	  <img src={ props.poke1.spriteURL }></img>
  </div>  
  )
}

export default ListItem;