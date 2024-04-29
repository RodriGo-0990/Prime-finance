import '../css/cardsSection.css'
import React, { useEffect } from 'react'
import Cards from './sub-components/cards.jsx';
import ScrollReveal from 'scrollreveal';

import { BsBuilding } from "react-icons/bs"; 
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaHatCowboy } from "react-icons/fa";
import { PiCertificate } from "react-icons/pi";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { MdOutlineHelp } from "react-icons/md";

import cred from "../assets/creditoImobiliário.jpg";
import receb from "../assets/recebiveis.jpg"
import rural from "../assets/rural.jpg"
import deben from "../assets/deben.jpg"
import bndes from "../assets/bndes.webp"
import black from "../assets/0.jpg"


function cardsSection() {
    useEffect(() => {
        ScrollReveal().reveal('.wrapper-cards',
            {
                duration: 1500,
                distance: '20px'
            });
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
                <h1>Cada cliente é especial, e assim também são as <p style={{ color: '#20509F' }}>nossas soluções.</p></h1>
                <div className='div-cards'>
                    <Cards logo={<BsBuilding color='white' size={50}></BsBuilding>}
                        foto={cred}
                        title={
                            'Crédito com garantia imobiliária'} />
                    <Cards logo={<IoDocumentTextOutline color='white' size={50} />}
                        foto={receb}
                        title={
                            'Antecipação de recebíveis'} />
                    <Cards logo={<FaHatCowboy color='white' size={50} />}
                        foto={rural}
                        title={
                            'Crédito e financiamento Rural'} />
                    <Cards logo={<PiCertificate color='white' size={50}/>}
                        foto={deben}
                        title={
                            'CRI, CRA e Emissão de Debêntures'} />
                    <Cards logo={<FaMoneyCheckAlt color='white' size={50}/>}
                        foto={bndes}
                        title={
                            'Finem, Finame, Pronamp, BNDES'} />
                    <Cards logo={<MdOutlineHelp color='white' size={25} />}
                        foto={black}
                        title={
                            'Saiba mais sobre nossas soluções em crédito personalizado'} />

                </div>
            </div>
        </>
    )
}
export default cardsSection;