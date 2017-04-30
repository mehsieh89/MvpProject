

export var strong = {
  normal: [],
  fire: ['grass', 'ice', 'bug', 'steel'],
  water: ['fire', 'ground', 'rock'],
  electric: ['water', 'ground', 'rock'],
  grass: ['water', 'ground', 'rock'],
  ice: ['grass', 'ground', 'flying', 'dragon'],
  fighting: ['normal', 'ice', 'rock', 'dark', 'steel'],
  poison: ['grass', 'fairy'],
  ground: ['fire', 'electric', 'poison', 'rock', 'steel'],
  flying: ['grass', 'fighting', 'bug'],
  psychic: ['fighting', 'poison'],
  bug: ['grass', 'psychic', 'dark'],
  rock: ['fire', 'ice', 'flying', 'bug'],
  ghost: ['psychic', 'ghost'],
  dragon: ['dragon'],
  dark: ['psychic', 'ghost'],
  steel: ['ice', 'rock', 'fairy'],
  fairy: ['fighting', 'dragon', 'dark']
},

weak = { 
	normal: ['rock', 'steel', 'ghost'],
	fire: ['fire', 'water', 'rock', 'dragon'],
	water: ['water', 'grass', 'dragon'],
	electric: ['electric', 'grass', 'ground', 'dragon'],
	grass: ['fire', 'grass', 'poison', 'flying', 'bug', 'dragon', 'steel'],
	ice: ['fire', 'water', 'ice', 'steel'],
	fighting: ['poison', 'flying', 'psychic', 'bug', 'ghost', 'fairy'],
	poison: ['poison', 'ground', 'rock', 'ghost', 'steel'],
	ground: ['grass', 'flying', 'bug'],
	flying: ['electric', 'rock', 'steel'],
	psychic: ['psychic', 'dark', 'steel'],
	bug: ['fire', 'fighting', 'poison', 'flying', 'ghost', 'steel', 'fairy'],
	rock: ['fighting', 'ground', 'steel'],
	ghost: ['normal', 'dark'],
	dragon: ['steel', 'fairy'],
	dark: ['fighting', 'dark', 'fairy'],
	steel: ['fire', 'water', 'electric', 'steel'],
	fairy: ['fire', 'poison', 'steel']
}

