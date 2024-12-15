import '../css/banner.css'
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { FiArrowDownRight } from "react-icons/fi";
import { FaHandshake } from "react-icons/fa6";
import Button from './sub-components/button-contact.jsx';

function banner() {
    useEffect(() => {

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
        ScrollReveal().reveal('.solutions', {
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
            delay: 300,
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
                    <div className='solutions'>
                        <div className='logo-solutions'>
                            <FaHandshake color='#20509F' size={40}/>
                        </div>
                        <p>Soluções que se adaptam ao seu perfil e objetivos para oferecer o melhor em serviços financeiros</p>
                    </div>
                </div>
                <div className="second-block">
                    <Button />
                    <div className='ask-div'>
                        <p><span><FiArrowDownRight /></span> Por que escolher a Prime Finance? </p>
                    </div>
                </div>

            </div>
        </>
    )
}
export default banner