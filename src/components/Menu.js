import styled from "styled-components";
import { Link } from 'react-router-dom';
import { ShoppingCart, HeartStraight, MagnifyingGlass } from "phosphor-react";

import LogoImg from "../assets/images/pokemon-logo.png";
import { connect } from "react-redux";


function Menu({pokemonsCart}) {

    return(
        <Nav>
            <div className="container">
                <a href=""><img className="logo" src={LogoImg} alt="Logo Pokemon"></img></a>

                <ul className="menu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <a href="">Store</a>
                    </li>
                    <li>
                        <a href="">Species</a>
                    </li>
                    
                </ul>
                <NavUser>
                    <form>
                        <input type="text" />
                        <button><MagnifyingGlass size={16} color="#000" /></button>
                    </form>
                    <div className="user">
                        <Link to="/cart"><ShoppingCart size={28} color="#fafafa" />{pokemonsCart.length ? <span>{pokemonsCart.length}</span> : ''}</Link>
                        <a href=""><HeartStraight size={28} color="#fafafa" /></a>
                    </div>
                </NavUser>
            </div>
        </Nav>
    );
}

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 78px;

    background: #D94747;

    .container {
        display: flex;
        align-items: center;
        width: 1100px;      
    }
    .logo{
        height: 62px;
    }

    .menu{ 
        display: flex;
        flex: 1;
        align-items: center;

        height: 78px;
        list-style: none;

        margin: 0 30px;
       
    }
    .menu li{
        padding: 0 20px;
    }
    .menu li a{
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;

        color: #FFFFFF;
        text-decoration: none;
    }
`;

const NavUser = styled.div`
    display: flex;
    align-items: center;

    form {
        position: relative;

        width: 120px;
        height: 28px;

        background: #EDEDEB;
        border-radius: 4px;
        box-sizing: border-box;
        transition: 0.2s;

        input {
            position: absolute;
            width: 90px;
            height: 28px;
            border: 0;
            outline: none;
            background: transparent;

            padding-left: 28px;
        }

        button{
            background: transparent;
            border: 0;
            height: 28px;
        }

        &:hover, :focus{
            width: 180px;

            input{
                width: 144px;
            }
        }
    }

    .user{ 
        display: flex;
        flex: 1;
        align-items: center;

        height: 78px;
        list-style: none;

        margin-left: 20px;
       
    }
    .user a{
        position: relative;
        margin: 0 10px;
        text-decoration: none;
        color: #FFFFFF;
    }
    .user a span{
        position: absolute;
        top: -12px;
        right: -4px;

        border-radius: 4px;
        padding: 0 3px;
        background: #fff9;
        color: #000;
        font-size: 12px;
    }
`;
const mapDispatchToProps = state => ({
    pokemonsCart: state.pokemonsCart
})

export default connect(mapDispatchToProps)(Menu)