import { useState, useEffect } from "react";



export function UsePokemons(limit = 30, offset = 0) {
    
    const [pokemons, setPokemons] = useState ({
        loading: true,
        next: true,
        data: [],
    });

    useEffect(() => {

        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(response => response.json())
        .then(j => {
            if(j.next = null) return setPokemons({...pokemons, next: false})

                    setPokemons({
                    loading: false,
                    next: true,
                    data: [...pokemons.data, j.results]
                    })
            
            
    })

    }, [offset])

    return pokemons
    
  
    
}



