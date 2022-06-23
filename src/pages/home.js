import styled from "styled-components";
import { Card } from "../components/Card";
import { Specie } from "../components/Specie";
import { UsePokemons } from "../hooks/usePokemons";


export function Home() {
    const pokemons = UsePokemons();
    
    function pokemon(pokemons) {
        return pokemons.map((p) => <Card key={p.name} pokemon={p} />);
    }

    return(
        <Main>
    
        
        <Specie />
        
        { !pokemons.loading && pokemon(pokemons.data) }
       
        </Main>
    );

    
}


const Main = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12.5px;
  
    max-width: 1100px;
    margin: 0 auto;
`;



