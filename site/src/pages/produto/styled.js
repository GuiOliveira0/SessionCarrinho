import styled from 'styled-components';

const  Container = styled.div `
    display: flex;
    flex-direction: column;

    padding: 1.5em;
    margin: 1em;
    box-shadow: 0px 0px 5px 1px #d5d4d6;

    align-items: center;

    .imagem {
    }

    .nome {
        font: 700 1.5em arial;
        color: #000;
    }

    .preco {
        font: 400 1.5em arial;
        color: #000;
    }

    button {
        cursor: pointer;
    }
`

export {Container};