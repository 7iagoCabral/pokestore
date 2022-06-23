import { useState, useEffect } from "react";


export function usePokemon (pokeUrl) {
    const [pokemon, setPokemon] = useState({
        loading: true,
        pokemon: {
            name: '',
            avatarImg: '',
            infos: {
                hp: '',
                atk: '',
                def: '',
            },
            price: ''
        },
    });

    
     useEffect(() => {
        fetch(pokeUrl)
        .then(response => response.json())
        .then(j => {
            let avatarImg = '';
            if(j.sprites.other.dream_world.front_default){
                avatarImg = j.sprites.other.dream_world.front_default
            }else{
                avatarImg = j.sprites.other.home.front_default
            }
            
            
            setPokemon({
            loading: false,
            pokemon: {
            name: j.name,
            avatarImg: avatarImg,
            infos: {
                hp: j.stats[0].base_stat,
                atk: j.stats[1].base_stat,
                def: j.stats[2].base_stat,
            },
            price: (j.weight * 0.15).toFixed(2)
        }})})

        
    },[pokeUrl])

    return pokemon;
}