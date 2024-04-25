import '../../css/cardNumbers.css'
import React, { useEffect } from 'react';

import ScrollReveal from 'scrollreveal';
function cardNumbers({ number, text }) {
    useEffect(() => {
        ScrollReveal().reveal('.card-number', {
            duration: 1500,
            distance: '50px'
        });
    }, [])
    return (
        <>
            <div className='card-number'>
                <div className='numbers'><p>{number} +</p></div>
                <div className='text-card'><p>{text}</p></div>
            </div>
        </>
    )
}
export default cardNumbers;