import styled from "styled-components";
import { Card } from "../components/Card";
import { Menu } from "../components/Menu";
import { Specie } from "../components/Specie";


export function Home() {
    return(
        <Main>
    
        
        <Specie />
        
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    
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



