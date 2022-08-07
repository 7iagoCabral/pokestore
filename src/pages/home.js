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
            if(entries.some((entry) => entry.isIntersecting)){
                setCurrentPage((currentPageInsideState)=> currentPageInsideState + 30)
            }
        })

        intersectionObserver.observe(document.querySelector('#next-page'))

        return () => intersectionObserver.disconnect()

    },[]) */
    useEffect(()=>{
        startStore(30, 0, null)
    },[])
    return(
        <Main>
        
        {pokemon(pokemonsList) }
        
         <NextPage id="next-page" >
        <MoreButton onClick={()=> startStore(30, (pokemonsList.length -30)+30, null)}>Próxima página</MoreButton>
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
const MoreButton = styled.button`
    align-self: center;

    width: 238px;
    height: 35px;
    background: #d3d3d3;
    border-radius: 6px;
    border: 0;

    font-family: 'Oswald';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #000;

    cursor: pointer;

    


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