import styled from 'styled-components';

const  Container = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 3em;

  .botao-listar button {
    border-radius: 4px;
    padding: 0.5em 3em;
    font-size: 1em;
    background-color: skyblue;
    border: 1px solid black;
  }

  .listar-prod {
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 100%;
  }

  .carousel-container {
    width: 100%;
    height: 21em;
  }

`

export {Container};