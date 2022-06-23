import styled from "styled-components";
import React from "react";
//import { eletricSVG } from "../assets/images/species/eletric.svg";


export function Specie() {
    return(
        <$Specie>
            <span>Eletric</span>
        </$Specie>
    )
}

const $Specie = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;
    background: #C4C4C4;
    border-radius: 4px;

    width: 100%;
    height: 120px;
    margin: 20px 0;
    
    > img {
        margin: 4px 10px;
        height: auto;
    }

    > span {
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 300;
        font-size: 40px;
        line-height: 59px;

        color: #4E4E4E;

    }
`;