import '../css/section.css'
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

import CardNumbers from './sub-components/card-numbers';

function section() {
    useEffect(() => {
        // Inicialize a ScrollReveal
        ScrollReveal().reveal('.text-section', {
            duration: 1500,
            distance: '20px'
        });
        ScrollReveal().reveal('.title-section', {
            duration: 1500,
            distance: '20px'
        });
        ScrollReveal().reveal('.ask-div-section', {
            delay:300,
            duration: 1500,
            distance: '50px',
            origin: 'right',
        });
    },[])
    return (
        <>
            <div className="wrapper-section">
                <div className="section-title">
                    <div className='title-section'>
                        <h1>Em um mundo financeiro em constante mudança, <p style={{ color: '#20509F' }}>
                            somos a sua bússola confiável</p></h1>
                    </div>
                    <div className='text-section'>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className='ask-div-section'>
                        <p >Saiba mais sobre nós <HiArrowTopRightOnSquare/> </p>
                    </div>
                </div>
                <div className='wrapper-card'>
                    <CardNumbers number={4} text={'Bilhões em Cessões de Crédito'}/>
                    <CardNumbers number={11} text={'Anos no mercado'}/>
                    <CardNumbers number={4000} text={'Operações sem Default'}/>
                    <CardNumbers number={75} text={'Instituíções Financeiras Parceiras'}/>
                </div>
            </div>
        </>
    )
}

export default section;