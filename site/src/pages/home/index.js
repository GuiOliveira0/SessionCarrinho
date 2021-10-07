import { Container } from './styled';
import React from "react";
import { useState } from "react";

export default function Home (){
    const [produto, setProduto] = useState ([]);

    function listar () {
        const r = [
        {
            id: 1,
            imagem: ""
        }
    ]
    setProduto (r);
}

    return(
        <Container>
            <div> Bem vindo à Home </div>
        </Container>
    )
}