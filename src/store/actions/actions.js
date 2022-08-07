export function toggleFavorite(pokemon){
  return {
      type: 'TOGGLE_FAVORITE',
      pokemon
  };
}

export function handleBuyPokemon(pokemon){
  return{
    type: 'ADD_ON_CART',
    payload: pokemon
  }

} 
export function handleRemovePokemon(pokemon){
  return{
    type: 'REMOVE_ON_CART',
    payload: pokemon
  }

} 
export function handleFinishCart(){
  return{
    type: 'FINISH_CART'
  }
}


export function pokestore(limit, offset, pokemonType){
  return dispatch => {
    dispatch(startStore());
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(response => response.json())
        .then(pokeList => {
          pokeList.results.map(pokemon => {
            fetch(pokemon.url)
            .then(response => response.json())
            .then(pokemonData => {
              dispatch(listPokemons({
                name: pokemonData.name,
                avatarImg: pokemonData.sprites.other.dream_world.front_default ? pokemonData.sprites.other.dream_world.front_default : pokemonData.sprites.other.home.front_default,
                price: (pokemonData.weight * 0.15).toFixed(2),
                infos: {
                  hp: pokemonData.stats[0].base_stat,
                  atk: pokemonData.stats[1].base_stat,
                  def: pokemonData.stats[2].base_stat,
                }

                
              }))
            })
          })
        })
  }
}
function startStore(){
  return{
    type: 'STORE_STARTED'
  }
}
function listPokemons(pokemon){
  return{
    type: 'LIST_POKEMONS',
    payload: pokemon

  }
}
