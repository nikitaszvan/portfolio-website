import styled from 'styled-components';

export const MainNavBarContainer = styled.div`
    display: flex;
    position: fixed;
    margin-top: 1.5rem;
    top: 0;
    width: 90%;
    justify-content: space-around;
    align-items: center;
    transition: transform 0.25s cubic-bezier(0.645,0.045,0.355,1), margin 0.25s cubic-bezier(0.645,0.045,0.355,1);
    box-sizing: border-box;

    > nav {
        display: flex;
        gap: 1rem;
        margin-left: auto;
        font-size: 14px;
  
        > a {
            font-family: 'Jetbrains Mono';
            color: white;
            text-decoration: none;

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
    }

`