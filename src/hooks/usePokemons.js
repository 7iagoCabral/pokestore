import { useState, useEffect } from "react";



export function UsePokemons(limit = 30, offset = 0) {

    const [pokemons, setPokemons] = useState ({
        loading: true,
        data: null
    });

    useEffect(() => {

        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(response => response.json())
        .then(j => setPokemons({
            loading: false,
            data: j.results
        }))

    }, [])

    return pokemons
    
  
    
}



