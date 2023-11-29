import { Row, Col } from "reactstrap";
import CarouselInicio from "../components/CarouselInicio";
import ItemCardapio from "../components/ItemCardapio";
import hamburguer from '../images/hamburguer.jpg';
import tortah from '../images/Tortah.jpg';
import coxinha from '../images/coxinha.jpg';
import tbone from '../images/tbone.jpg';

function Home() {
    return (
        <div>
            <Row>
                <Col>
                    {/* Aqui vai o Carousel */}
                    <CarouselInicio />
                </Col>
            </Row>
            <Row>
                <Col className="text-center my-3">
                    <h1>Mais pedidos</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ItemCardapio titulo="Hamburguer" img={hamburguer} descricao="Hamburguer caseiro feito com fraldinha, pão de brioche e salada fresca." />
                </Col>
                <Col>
                    <ItemCardapio titulo="Torta Holadesa" img={tortah} descricao="Torta holandesa, feita com chocolate belga e recheio de leite de cabra."/>
                </Col>
                <Col>
                    <ItemCardapio titulo="Coxinha" img={coxinha} descricao="Coxinha de frango vegano e massa de leite de côco com catupiry vegano." />
                </Col>
                <Col>
                    <ItemCardapio titulo="T-Bone" img={tbone} descricao="Corte show de desenho animado, temperado com sal grosso de mostarda." />
                </Col>
            </Row>
        </div>
    )
}
export default Home;