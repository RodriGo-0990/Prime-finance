import React from "react";
import { Link } from "react-router-dom";

function criCra() {
    return (
        <>
            <h1>Certificados de Recebíveis Imobiliários (CRI)</h1>
            <p>O CRI é um título de crédito de longo prazo, emitido por companhias securitizadoras, que representa direitos creditórios originários de negócios imobiliários. Para simplificar, é um modo de financiamento que usa como base os recebíveis provenientes de contratos de locação, venda de imóveis, entre outros.</p>

            <h1>Certificados de Recebíveis do Agronegócio (CRA)</h1>
            <p>Semelhante ao CRI, o CRA é um título que também representa direitos creditórios, mas no caso, esses são originados de negócios entre produtores rurais ou suas cooperativas e terceiros, envolvendo a produção, comercialização, beneficiamento ou industrialização de produtos agropecuários.</p>

            <h1>Debêntures</h1>
            <p>Debêntures são títulos de dívida emitidos por empresas não financeiras com a finalidade de captar recursos para investimentos, reestruturação de dívidas, capital de giro, entre outros. Aqueles que adquirem as debêntures se tornam credores dessas companhias, esperando receber de volta o capital investido com juros após um período definido.</p>

            <h1>Benefícios e Considerações</h1>
            <p>Esses instrumentos financeiros oferecem várias vantagens. Eles permitem que empresas acessem capital frequentemente a taxas mais atrativas do que empréstimos tradicionais, com prazos mais longos e sem diluir a participação dos atuais acionistas, como ocorre em emissões de ações.</p>
            <p>No entanto, emitir CRI, CRA ou Debêntures exige o cumprimento de critérios rigorosos e regulamentos estabelecidos pela Comissão de Valores Mobiliários (CVM). Esses instrumentos geralmente são mais adequados para empresas de médio e grande porte, devido ao custo e à complexidade do processo de emissão.</p>

            <p>Se você deseja explorar como CRI, CRA e Debêntures podem beneficiar o seu negócio, <Link to="/Prime-finance/contato" style={{"cursor":"pointer" , color:"orange", fontWeight:"900"}}>clique aqui</Link> para falar com nossos especialistas. Estamos prontos para ajudá-lo a identificar as melhores opções e impulsionar o crescimento de sua empresa.</p>

        </>
    )
}
export default criCra;