import { useState, useEffect } from "react";


export function usePokemon (pokeUrl) {
    const [pokemon, setPokemon] = useState({});

    
     useEffect(() => {
        fetch(pokeUrl)
        .then(response => response.json())
        .then(j => setPokemon({
            name: j.name,
            avatarImg: j.sprites.other.dream_world.front_default,
            infos: [j.stats[0].base_stat, j.stats[1].base_stat, j.stats[2].base_stat],
            weight: j.weight
        }))

    },[pokeUrl])

    return pokemon;
}