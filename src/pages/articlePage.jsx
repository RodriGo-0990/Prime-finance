import React from "react";
import "../css/articlePage.css";
import image from "../assets/articles/article.webp";
import Header from "../components/header";
import MidBanner from "../components/midbanner";
import Footer from "../components/footer";
import Void from "../components/void";
import { useLocation } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";


function articlePage() {
    const location = useLocation();
    const data = location.state;
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
                        <p>conteúdo do artigo</p>
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
