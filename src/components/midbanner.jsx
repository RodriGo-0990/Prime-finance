import '../css/midbanner.css'
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Askprime from '../components/sub-components/askPrime.jsx'
import Button from '../components/sub-components/button-contact.jsx'
function midBanner() {
    useEffect(() => {
        ScrollReveal().reveal('.wrapper-center',
            {
                duration: 1000,
                delay:400,
                distance:'20px'
            });
    }, [])
    return (
        <>
            <div className='wrapper-center'>
                <div className='midbanner-background'>
                    <div className='wrapper-midbanner'>
                        <div className='first-block'>
                            <div className='title'>
                                <h1>Na hora de planejar o futuro da sua empresa, conte com a <p style={{ color: '#20509F' }}> Prime Finance</p></h1>
                            </div>
                            <div className='text-midbanner'>
                                <p>Descubra a diferença da Prime Finance e experimente a verdadeira personalização em serviços financeiros. Vamos juntos desenhar o seu futuro financeiro.</p>
                            </div>
                        </div>
                        <div className='second-block'>
                            <Button />
                            <Askprime/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default midBanner;