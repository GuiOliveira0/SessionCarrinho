import { Container } from "./styled";
import Produto from "../produto"

export default function Produtp (props) {
    return (
        <Container>
            <img className="imagem" src={props.info.imagem}/>
            <div className="nome"> {props.info.nome} </div>
            <div className="preco"> {props.info.preco} </div>
        </Container>
    )
}