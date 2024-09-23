import styled from "styled-components";

export const AboutMeContainer = styled.div`
    height: 100vh;
    width: 100%;
    background-color: var(--background-color);
    padding: 2rem;
`

export const TextContainer = styled.div`
    width: 60%;
    margin-inline: auto;


    > h1 {
        margin: 0;
        color: white;
        font-family: 'Jetbrains Mono';

        > span {
            color: var(--accent-color);
        }
    }
`