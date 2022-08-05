import styled from "styled-components";
import {Plus, Minus, Trash} from "phosphor-react";
import { PokemonSpec } from "./PokemonSpec";

import { connect } from "react-redux";
import { dispatch } from 'redux'
import store from '../store';
import { handleRemovePokemon } from '../store/actions/actions';

function CartItem({handleRemovePokemon ,pokemon}) {
    return(
        <CartComponent>
            <div className="pokemon-img">
                <img src={pokemon.avatarImg} alt={pokemon.name} />

            </div>

            
            <div className="pokemon-data">
                <span>{pokemon.name}</span>
                <PokemonSpec props={pokemon.infos} />
            </div>
            <div className="pokemon-count">
                {/* <form>
                    <button className="plus"><Plus size={24} color="#fff" weight="bold" /></button>
                    <input type="text" value=" 1" />
                    <button className="minus"><Minus size={24} color="#fff" weight="bold" /></button>
                </form> */}
            </div>
            <div className="pokemon-price">
                    
                    P$ {pokemon.price}
               
            </div>
            <div className="pokemon-remove">
                <button onClick={()=> handleRemovePokemon(pokemon)}><Trash size={28} color="#000000" weight="bold" /></button>
            </div>
        </CartComponent>
    );
}

const CartComponent = styled.div`

    display: grid;
    align-items: center;
    grid-template-columns: 140px 220px 100px auto 70px;
    min-height: 140px;
    background: #fff;

    border-radius: 8px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    margin: 4px 0;

    .pokemon-img {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #D94747;
        border-radius: 50%;

        width: 10 0px;
        height: 100px;

        margin: 20px;

        > img {
            
            max-height: 80px;
        }

        

    }

    .pokemon-data > span {
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 36px;
      
        color: #000000;
        padding-left: 6px;
    }
    .pokemon-count {
        display: flex;
        align-items: center;
        justify-content: center;

        > form {

            width: 28px;
            background: #fff;
            border-radius: 6px;
            box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
        }
        > form input {
            width: 20px;
            background: transparent;
            border: 0;
            outline: none;

            font-size: 16px;
            font-weight: 600;
        }
        > form .plus {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 28px;
            height: 28px;
            background: #D94747;
            border: 0;
            border-radius: 6px 6px 0 0;

            cursor: pointer;
        }
        > form .minus {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 28px;
            height: 28px;
            background: #D94747;
            border: 0;
            border-radius: 0 0 6px 6px;

            cursor: pointer;
        }

        

    }

    .pokemon-price{
            display: flex;
            justify-content: center;
            font-family: 'Oswald';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 36px;

            color: #000000;
        }
    .pokemon-remove > button {

        background: transparent;
        border: 0;
        padding: 0;
        cursor: pointer;

    }
`;
const mapStateToProps = state => ({
});
const mapDispatchToProps = dispatch => ({
    handleRemovePokemon: (pokemon) => dispatch(handleRemovePokemon(pokemon))
})
export default connect(mapStateToProps, mapDispatchToProps)(CartItem);