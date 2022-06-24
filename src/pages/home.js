import { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "../components/Card";
import { Specie } from "../components/Specie";
import { UsePokemons } from "../hooks/usePokemons";


export function Home() {
        
     
    const [currentPage, setCurrentPage] = useState(-30)
    const pokemons = UsePokemons(30, currentPage);
    function pokemon(pokemons) {
        return pokemons.flat(1).map((p) => <Card key={p.name} pokemon={p} />);
    }

    useEffect(()=>{
        const intersectionObserver = new IntersectionObserver((entries)=>{
            if(entries.some((entry) => entry.isIntersecting) && pokemons.next){
                setCurrentPage((currentPageInsideState)=> currentPageInsideState + 30)
            }
        })

        intersectionObserver.observe(document.querySelector('#next-page'))

        return () => intersectionObserver.disconnect()

    },[])

    return(
        <Main>
    
        
        
        
        { !pokemons.loading && pokemon(pokemons.data) }

        <NextPage id="next-page" > Loading ... </NextPage>
        </Main>
    );

    
}


const Main = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12.5px;
    justify-content: center;
  
    max-width: 1100px;
    margin: 0 auto;
    padding: 40px 0 0;
`;

const NextPage = styled.div`
   background: #D94747;
   width: 100%;
   height: 40px;
   text-align: center;
   padding: 20px 10px;
   margin-bottom: 20px;
   border-radius: 6px;
`;

