import { Link } from 'react-router-dom'
import { Container } from "./styled";

export default function Produtp (props) {
    return (
        <Container>
            <img className="imagem" alt="" src={props.info.imagem}/>
            <div className="nome"> {props.info.nome} </div>
            <div className="preco"> {props.info.preco} </div>

            <Link to={{
                pathname: '/detalhe',
                state: props.info
            }}>
                <button> Ver Detalhes </button>   
            </Link>
        </Container>
    )
}