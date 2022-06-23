import styled from "styled-components";
import { usePokemon } from "../hooks/usePokemon";
import { PokemonSpec } from "./PokemonSpec";

export function Card(props) {
    console.log(props.pokemon.url)
    const data = usePokemon(props.pokemon.url);
    console.log(data)
    return(
        <$Card>
            <img src={data.avatarImg} alt={data.name} />
            <h2>{data.name}</h2>
                <PokemonSpec props={data.infos} />
                <span className="price">P$ 565,74</span>
                <CardButton>Comprar</CardButton>
            
        </$Card>

    );
}

const $Card = styled.div`
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
