import React from "react";
import "../css/articlePage.css";
import Header from "../components/header";
import MidBanner from "../components/midbanner";
import Footer from "../components/footer";
import Void from "../components/void";
import { useLocation, useParams } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

// artigos
import ArticleAuditoria from "../articles/article-auditoria";
import DezPassos from "../articles/10passos";
import ArticleBarreiras from "../articles/article-barreiras_de_credito";
import ArticleTecnologia from "../articles/article-tecnologia";
import Enchentes from "../articles/enchentes.jsx";
import SolucoesParaEmpresa from "../articles/solucoesParaEmpresa.jsx";
import PoderDaExpansao from "../articles/poder_da_expansao.jsx";
//serviços
import CredGarantiaImobiliaria from "../articles/serviços/credito_garantia_imobiliaria.jsx";
import AntecipacaoDeRecebiveis from "../articles/serviços/antecipacao_recebiveis.jsx";
import CreditoRural from "../articles/serviços/credito_rural.jsx";
import Cricra from "../articles/serviços/cri_cra.jsx";
import Finem from "../articles/serviços/finem.jsx";

const articlesMap ={
    //artigos
    1:<ArticleAuditoria/>,
    2:<DezPassos/>,
    3:<ArticleBarreiras/>, 
    4:<ArticleTecnologia/>,
    5:<Enchentes/>,
    6:<SolucoesParaEmpresa/>,
    7:<PoderDaExpansao/>,
    //serviços
    8:<CredGarantiaImobiliaria/>,
    9:<AntecipacaoDeRecebiveis/>,
    10:<CreditoRural/>,
    11:<Cricra/>,
    12:<Finem/>,
    13:<></>
}


function articlePage() {
    const location = useLocation();
    const data = location.state;
    const { id } = useParams();
    const content = articlesMap[id];

    useEffect(function (){
        ScrollReveal().reveal('.article-page-title h1',{
            duration:2300,
            origin: 'right',
            distance: '30px'
        })
        ScrollReveal().reveal('.article-page-title h3',{
            duration:1000,
            
        })
        ScrollReveal().reveal('.image-article-page',{
            duration:900,
            
        })
    })

    return (
        <>
            <div className="container-article-page">
                <Header />
                <div className="article-page-title">
                    <h3>{data.category}</h3>
                    <h1>{data.title}</h1>
                    <div className="image-article-page">
                        <img src={data.image} alt={'title'}></img>
                    </div>
                </div>
                <div className="article-page-background">
                    <div className="content-article-page">
                        <>{content}</>
                    </div>
                </div>
            </div>
            <Void />
            <MidBanner />
            <Void />
            <Footer />

        </>
    )
}
export default articlePage;
