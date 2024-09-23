import styled from 'styled-components';

export const MainNavBarContainer = styled.div<{ isIn: boolean, navOffset: number}>`

    display: flex;
    position: fixed;
    margin-top: 1.5rem;
    width: 90%;
    justify-content: space-around;
    align-items: center;
    transition: transform 0.25s cubic-bezier(0.645,0.045,0.355,1), margin 0.25s cubic-bezier(0.645,0.045,0.355,1);
    box-sizing: border-box;
    top: 0;

    > *:not(button) {
        position: relative;
        transition: top 0.75s cubic-bezier(0.645,0.045,0.355,1);
    }

    > a {
        ${({ isIn = false, navOffset = 0 }) => !isIn ? `top: -${navOffset}px` : 'top: 0'};

    }

    > nav {
        display: flex;
        gap: 1rem;
        margin-left: auto;
        font-size: 14px;
  
        > a {
            font-family: 'Jetbrains Mono';
            color: white;
            text-decoration: none;
            position: relative;
            transition: top 0.75s cubic-bezier(0.645,0.045,0.355,1);
            ${({ isIn = false, navOffset = 0 }) => !isIn ? `top: -${navOffset}px` : 'top: 0'};

            &:nth-of-type(1) {
                transition-delay: 0.25s;
            }

            &:nth-of-type(2) {
                transition-delay: 0.5s;
            }

            &:nth-of-type(3) {
                transition-delay: 0.75s;
            }

            &:nth-of-type(4) {
                transition-delay: 1s;
            }

            > * {
            transition: color 0.3s ease 0.3s;
            }

            > span {
                transition: opacity 0.3s ease;
            }

            > span:nth-of-type(2) {
                letter-spacing: 0.25ch;
            }

            &:hover > span:nth-of-type(1) {
                opacity: 1;
            }

            &:hover > span:nth-of-type(2) {
                opacity: 1;
            }

            &:hover {
                color: var(--accent-color);
            }

            &:hover > * {
                color: var(--accent-color);
            }

            > span:nth-of-type(1), > span:nth-of-type(2) {
                opacity: 0;
            }
        }
    }

    > button {
        margin-left: 4rem;
        position: relative;
        ${({ isIn = false, navOffset = 0 }) => !isIn ? `top: -${navOffset}px` : 'top: 0'};
        transition: top 0.75s cubic-bezier(0.645,0.045,0.355,1) 1.25s, color 0.25s ease, box-shadow 0.25s ease;
    }

`


export const LogoContainer = styled.a`
    position: relative;
    
`