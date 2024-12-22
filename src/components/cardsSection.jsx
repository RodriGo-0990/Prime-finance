import '../css/cardsSection.css'
import React, { useEffect } from 'react'
import Cards from './sub-components/cards.jsx';
import ScrollReveal from 'scrollreveal';

import { BsBuilding } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaHatCowboy } from "react-icons/fa";
import { PiCertificate } from "react-icons/pi";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";

import cred from "../assets/creditoImobiliário.jpg";
import receb from "../assets/recebiveis.jpg"
import rural from "../assets/rural.jpg"
import deben from "../assets/deben.jpg"
import bndes from "../assets/bndes.webp"
import black from "../assets/0.jpg"


function cardsSection({ title }) {
    useEffect(() => {

        ScrollReveal().reveal('.div-cards',
            {
                duration: 1500,
                distance: '20px',
                delay: 300,
            });
    }, [])
    return (
        <>
            <div className='wrapper-cards'>
                <h1>{title}</h1>
                <div className='div-cards'>
                    <Cards logo={<BsBuilding color='white' size={50}></BsBuilding>}
                        foto={cred}
                        title={'Crédito com garantia imobiliária'}
                        page={"articlePage"}
                        contentId={"8"} />
                    <Cards logo={<IoDocumentTextOutline color='white' size={50} />}
                        foto={receb}
                        title={
                            'Antecipação de recebíveis'}
                        page={"articlePage"}
                        contentId={"9"} />
                    <Cards logo={<FaHatCowboy color='white' size={50} />}
                        foto={rural}
                        title={
                            'Crédito Rural'}
                        page={"articlePage"}
                        contentId={"10"} />
                    <Cards logo={<PiCertificate color='white' size={50} />}
                        foto={deben}
                        title={
                            'CRI, CRA e Emissão de Debêntures'}
                        page={"articlePage"}
                        contentId={"11"} />
                    <Cards logo={<FaMoneyCheckAlt color='white' size={50} />}
                        foto={bndes}
                        title={
                            'Finem, Finame, Pronamp, BNDES'}
                        page={"articlePage"}
                        contentId={"12"} />
                    <Cards logo={<GiOpenBook color='white' size={25} />}
                        foto={black}
                        title={
                            'Conteúdos para impulsionar o seu negócio'}
                        page={"blog"}
                        contentId={""} />

                </div>
            </div>
        </>
    )
}
export default cardsSection;