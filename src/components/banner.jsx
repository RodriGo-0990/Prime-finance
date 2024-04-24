import '../css/banner.css'
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import ArrowDown from '../assets/arrow-down.png'
import Manager from '../assets/arrow-up.png'

function banner() {
    useEffect(() => {
        // Inicialize a ScrollReveal
        ScrollReveal().reveal('.title', {
            duration: 1500,
            origin: 'left',
            distance: '50px'
        });
        ScrollReveal().reveal('.text', {
            delay: 500,
            duration: 1500,
            origin: 'left',
            distance: '50px'
        });
        ScrollReveal().reveal('.button-contact', {
            duration: 1500,
            distance: '50px',
            origin: 'right',
        });
        ScrollReveal().reveal('.ask-div', {
            delay:300,
            duration: 1500,
            distance: '50px',
            origin: 'right',
        });
    }, []);
    return (
        <>
            <div className='wrapper-banner'>
                <div className='first-block'>
                    <div className='title'>
                        <h1>A essência da personalização em<p style={{ color: '#20509F' }}>suas finanças</p></h1>
                    </div>
                    <div className='text'>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
                <div className="second-block">
                    <div className="button-contact">
                        <button className="contact"> Fale com um especialista <span><img src={Manager} alt='icon' /></span></button>
                    </div>
                    <div className='ask-div'>
                        <p><span><img src={ArrowDown} alt='arrow' /></span>Por que escolher a Versa Finance? </p>
                    </div>
                </div>

            </div>
        </>
    )
}
export default banner