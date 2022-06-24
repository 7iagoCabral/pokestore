import styled from "styled-components";
import { usePokemon } from "../hooks/usePokemon";
import { PokemonSpec } from "./PokemonSpec";

import loadingImg from "../assets/images/pokeball.png";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export function Card(props) {
    const {loading, pokemon} = usePokemon(props.pokemon.url);
    const { handleBuyPokemon } = useContext(CartContext)
    
  
    
    if(!loading){
        return(
            <CARD>
                <img src={pokemon.avatarImg} alt={pokemon.name} />
                <h2>{pokemon.name.substr(0, 17)}</h2>
                    <PokemonSpec props={pokemon.infos} />
                    <span className="price">P$ {pokemon.price}</span>
                    <CardButton onClick={()=> handleBuyPokemon(pokemon)}>Comprar</CardButton>
                
            </CARD>
    
        );
    }else{
                return(
                    <CARD>
                        <Loading src={loadingImg} alt="Loading" />
                    </CARD>
                );

    }
}

const CARD = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 210px;
    min-height: 260px;
    
    background: #F8F8F8;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;


    > img {
        height: 90px;
        margin: 14px 0 8px;
    }
    
    > h2 {
        font-family: 'Oswald', sans-serif;
        font-size: 24px;
        font-weight: 400;

    }
    
    .price {
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;

        color: #163711;

        margin: 8px 0;

    }

`;





const CardButton = styled.button`


    width: 100%;
    height: 38px;
    border-radius: 0px 0px 4px 4px;
    border: 0;

    background: #D94747;

    font-family: 'Oswald';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #FFFFFF;

    transition: filter 0.03s;
    cursor: pointer;

    &:hover{
        filter: brightness(0.80);
    }
`;
const Loading = styled.img`
    display: flex;
    margin: 15px auto 0 auto;
    width: auto;
    max-height: 80px ;
    animation: rotation 8s infinite linear;
    
    
    @keyframes rotation {
        from {
        transform: rotate(0deg);
        }
        to {
        transform: rotate(359deg);
        }
    }
`;
