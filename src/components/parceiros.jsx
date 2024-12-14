import '../css/parceiros.css'
import logo1 from '../assets/parceiros/logo1.png'
import logo2 from '../assets/parceiros/logo2.png'
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function parceiros() {
    useEffect(() => {
        ScrollReveal().reveal('.wrapper-parceiros', {
            duration: 1500,
            distance: '20px'
        });
    }, [])
    return (
        <>
            <div className='wrapper-parceiros'>
                <h1>Nossos parceiros</h1>
                <div className='logo-parceiros'>
                    <img src={logo1} alt='logo'></img>
                    <img src={logo2} alt='logo'></img>
                </div>
            </div>
        </>
    )
}
export default parceiros;
