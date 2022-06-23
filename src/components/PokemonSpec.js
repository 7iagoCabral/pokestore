import styled from "styled-components";
import { Sword, Activity, ShieldCheckered } from "phosphor-react";


export function PokemonSpec({props}) {
    return(
        <PokeSpec>
                <PokeTag background="#D96767">   
                    <Sword size={16} color="#fafafa" />
                    {props[0]}
                </PokeTag>
                <PokeTag background="#68CF8B">
                    <Activity size={16} color="#fafafa" />
                    {props[1]}
                </PokeTag>
                <PokeTag background="#D9C067">
                    <ShieldCheckered size={16} color="#fafafa" />
                    {props[2]}
                </PokeTag>
            </PokeSpec>
    );
}

const PokeSpec = styled.div`
    display: flex;
    width: calc(100% - 10%);
    justify-content: space-around;
    

    margin: 4px 0;
`;
 


const PokeTag = styled.span(props => ({

    display: 'flex',
    alignItems: 'center',
    background: props.background,
    width: '56px',
    height: '24px',

    color: '#fff',

    borderRadius: '4px',
    justifyContent: 'space-around',

   
}));
