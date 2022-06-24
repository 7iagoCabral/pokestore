import styled from "styled-components";
import {  } from "phosphor-react";
import { CartItem } from "../components/CartItem";

import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export function Cart() {
    const { MyCartStorage } = useContext(CartContext);
    function pokemon(pokemons) {
        return pokemons.map((pokemon)=> <CartItem key={pokemon.name} pokemon={pokemon} />)
    }

    function ResumeCart(pokemons){
        console.log(pokemons)
        return (pokemons.map((pokemon) => {
            <ResumeItem key={pokemon.name}>
                 <span>{pokemon.qtd} - {pokemon.name} </span>
                 <span>P$ {pokemon.price * pokemon.qtd} </span>
            </ResumeItem>

        }))
    }
    return(
        <Main>
        <Wrapper width="70%" >
        <Title>Meu Carrinho</Title>
            {MyCartStorage && pokemon(MyCartStorage)}
        </Wrapper>
        <Wrapper width="30%" >
            <Resume>
                <SubTitle>Resumo do pedido</SubTitle>
                    {MyCartStorage && ResumeCart(MyCartStorage)}
                
                
                <BreakLine />
                <ResumeTotal>
                    <span>Total</span>
                    <span>P$ 12521,00</span>
                </ResumeTotal>
                <ResumeFooter>
                    Receba 7% de CashBack
                </ResumeFooter>
                <BreakLine />

                <ResumeButton>Finalizar</ResumeButton>
            
            </Resume>
        </Wrapper>
        </Main>
    )
}
const Main = styled.div`
    display: flex;
    flex-wrap: wrap;
  
    max-width: 1100px;
    margin: 0 auto;
`;

const Wrapper = styled.div(props => ({
    display: 'flex',
    flexDirection: 'column',
    margin: '10px',
    width: `calc(${props.width} - 20px)`,
}))

const Title = styled.h1`
    display: flex;
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 300;
    font-size: 32px;
    line-height: 47px;



    color: #000000;
    border-bottom: 1px solid #70707040;
    margin: 10px 0;
`;
const SubTitle = styled.h2`

    padding: 4px 0 0 0;
    margin-bottom: 20px;

    font-family: 'Oswald';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;

    color: #000000;

`;

const Resume = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    background: #C4C4C4;
    border-radius: 6px;
    margin-top: 60px;
    padding: 12px;

`;

const ResumeItem = styled.div`

        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;


        color: #000000;
        display: flex;
        justify-content: space-between;

`;

const ResumeTotal = styled.div`
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 27px;
        color: #414141;

        display: flex;
        justify-content: space-between;
    

        margin-bottom: 20px;

`;
const ResumeFooter = styled.span`
    display: flex;
    justify-content: flex-end;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 200;
    font-size: 14px;
    line-height: 14px;
    margin: 0 20px;

    color: #000000;

`;
const ResumeButton = styled.button`
    align-self: center;

    width: 238px;
    height: 35px;
    background: #D94747;
    border-radius: 6px;
    border: 0;

    font-family: 'Oswald';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #FFFFFF;

    cursor: pointer;

    


`;

const BreakLine = styled.div`
    border-bottom: 1px solid #00000025;
    margin: 8px 0;
`;