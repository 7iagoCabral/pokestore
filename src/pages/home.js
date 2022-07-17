import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { Specie } from "../components/Specie";

import { connect } from "react-redux";
import { pokestore } from "../store/actions/actions"



function Home({ pokemonsList, pokemonsCart, dispatch, startStore }) {
    

     
    
    function pokemon(pokemons) {
        return pokemons.map((pokemon) => <Card key={pokemon.name} pokemon={pokemon} />);
    }

    /* useEffect(()=>{
        const intersectionObserver = new IntersectionObserver((entries)=>{
            if(entries.some((entry) => entry.isIntersecting) && pokemons.next){
                setCurrentPage((currentPageInsideState)=> currentPageInsideState + 30)
            }
        })

        intersectionObserver.observe(document.querySelector('#next-page'))

        return () => intersectionObserver.disconnect()

    },[]) */

    return(
        <Main>
        {pokemon(pokemonsList) }
        
        
         <NextPage id="next-page" >
        <button onClick={()=> startStore(30, pokemonsList.length+30, null)}>More Pokemons</button>
         </NextPage>
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

const mapStateToProps = state => ({
    pokemonsList: state.pokemonsList,
    pokemonsCart: state.pokemonsCart
});
const mapDispatchToProps = dispatch => {
    return {

        startStore: (limit = 30, offset = 0, pokemonType = null) => dispatch(
         pokestore(limit, offset, pokemonType)
        ) 
    }
   
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);