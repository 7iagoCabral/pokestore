import React, { useEffect, useState } from "react";


const MyCartStorage = JSON.parse(localStorage.getItem('mypokedex')) || []

export const CartContext = React.createContext(MyCartStorage)
export const CartContextProvide = props => {
    
    //const [myCart, setMyCart] = useState([]);
    
    //getMyCartOnLocalStorage()
    //

    

    
    function PushMyCart ({...pokemon}){
        let pokemonsByName = MyCartStorage.map(pokemon => pokemon.name)
        let onMyCart = pokemonsByName.some(el => el == pokemon.name)
        if(!onMyCart){
            
            MyCartStorage.push(
               
                {
                    name: pokemon.name,
                    avatarImg:pokemon.avatarImg,
                    infos: pokemon.infos, 
                    qtd: 1,
                    price: pokemon.price
                }
            )

            return localStorage.setItem('mypokedex', JSON.stringify(MyCartStorage)   )
        }
        
        
    }
    
    
    
    function handleBuyPokemon({...pokemon}){
        PushMyCart({...pokemon})
    }

    function handleRemovePokemon({...pokemon}){
        
        
    }
    function handleIncrementPokemon({...pokemon}){

    }
    function handleDecrementPokemon({...pokemon}){

    }


    return(
        <CartContext.Provider value={{
            handleBuyPokemon, 
            MyCartStorage
        }}>
            {props.children}
        </CartContext.Provider>
        
    );
}