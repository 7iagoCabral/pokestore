import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const INITIAL_STATE = {
  pokemonsList: [],
  SpeciesList: [],
  pokemonsCart: localStorage.getItem('pokestoreCart') ? JSON.parse(localStorage.getItem('pokestoreCart')) : [],
  favoritePokemons: [],
  pagination: [],
  loading: true
}

function reducer(state = INITIAL_STATE, action) {
  console.log(action)
  
  switch(action.type){
    case 'STORE_STARTED':
    return {
      ...state,
      loading: true

    };
    case 'LIST_POKEMONS':
    return {
      ...state,
      loading: false,
      pokemonsList: [...state.pokemonsList, action.payload]

    };
    case 'ADD_ON_CART':
      let onCart = state.pokemonsCart.some(pokemon => pokemon.name == action.payload.name) 
      if(!onCart){

        localStorage.setItem('pokestoreCart', JSON.stringify([...state.pokemonsCart, action.payload]))
          return {
            ...state,
            pokemonsCart: [...state.pokemonsCart, action.payload]
          }
      }
      return {
        ...state
      }
      case 'REMOVE_ON_CART':
        const existLocal = state.pokemonsCart.indexOf(action.payload)
        if(existLocal != -1){
          state.pokemonsCart.splice(existLocal, 1)
          localStorage.setItem('pokestoreCart', JSON.stringify([...state.pokemonsCart]))
          return{
            ...state,
            pokemonsCart: [...state.pokemonsCart]
          }
        }else{
          return{
            ...state
          }

        }

      case 'FINISH_CART':
        localStorage.removeItem('pokestoreCart')
        return {
          ...state,
          pokemonsCart: []
        }
  }
  
  
  return state;
}


const store = createStore(reducer, applyMiddleware(thunk));

export default store;