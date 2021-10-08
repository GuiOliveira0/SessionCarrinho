import { Container } from './styled';
import React from "react";
import Cookie from 'js-cookie'
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';


export default function detalhes (){
    const [produto, setProduto] = useState(props.location.state);
    const navigation = useHistory();

    function comprar() {
        let carrinho = Cookie.get('carrino');
        carrinho = carrinho !== undefined
        ? JSON.parse(carrinho)
        : [];
        
        if (carrinho.some(item => item.id === produto.id) === false)
            carrinho.push({...produto, qtd: 1});

        Cookie.set('carrinho', JSON.stringify(carrinho));

        navigation.push('/carrinho');
    }

    return(
        <Container>
            <div> 
                <Link to="/"> Voltar </Link>
                <h1> Detalhes </h1>
                
                <div> <img src={produto.imagem} alt=""/> </div>
                <div> {produto.nome} </div>
                <div> {produto.preco} </div>
            </div>

            <div>
                <h2> Descrição </h2>
                <div> {produto.descricao} </div>

                <h2> Especificações </h2>
                <div> {produto.especificacoes} </div>

                <div> <button onClick={comprar}> Comprar </button></div>
            </div>
        </Container>
    )
}