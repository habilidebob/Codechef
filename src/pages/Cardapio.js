import { Col, Row } from "reactstrap"
import ItemCardapio from "../components/ItemCardapio"
import hamburguer from '../images/hamburguer.jpg';
import tortah from '../images/Tortah.jpg';
import coxinha from '../images/coxinha.jpg';
import tbone from '../images/tbone.jpg';
import kebab from '../images/kebab.jpg';
import pastel from '../images/pastel.jpg';
import picanha from '../images/picanha.png';
import pudim from '../images/pudim.jpg';

function Cardapio() {
    return (
        <div>
            <Row>
                <Col>
                    <h1 className="display-4 text-center">Nosso cardápio</h1>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <ItemCardapio titulo="Hamburguer" img={hamburguer} descricao="Hamburguer caseiro suculento show 10 muito bom."/>
                </Col>
                <Col>
                    <ItemCardapio titulo="Torta Holandesa" img={tortah} descricao="Torta holandesa" />
                </Col>
                <Col>
                    <ItemCardapio titulo="Coxinha" img={coxinha} descricao="Bolinho de frango frito, tradicionalmente servido com maionese e ketchup." />
                </Col>
                <Col>
                    <ItemCardapio titulo="T-Bone" img={tbone} descricao="Filé mignon com um osso em T no meio, geralmente grelhado ou assado." />
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <ItemCardapio titulo="Kebab" img={kebab} descricao="Espetinho de carne, frango, vegetais ou frutos do mar, geralmente servido com molho de iogurte." />
                </Col>
                <Col>
                    <ItemCardapio titulo="Pastel" img={pastel} descricao="Um pastel é uma massa folhada frita recheada com vários ingredientes, como carne, frango, queijo, legumes ou camarão. É um prato popular em muitos países da América Latina e do Sul da Ásia." />
                </Col>
                <Col>
                    <ItemCardapio titulo="Picanha" img={picanha} descricao="Corte de carne bovina suculento e saboroso, perfeito para um churrasco ou uma refeição especial." />
                </Col>
                <Col>
                    <ItemCardapio titulo="Pudim" img={pudim} descricao="Sobremesa doce e cremosa, perfeita para terminar uma refeição com chave de ouro." />
                </Col>
            </Row>
        </div>
    )
}
export default Cardapio