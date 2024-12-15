import '../css/bannerAbout.css'
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function BannerAbout() {
    useEffect(() => {
        ScrollReveal().reveal('.first-block-about', {
            duration: 1500,
            distance: '60px',
            origin: 'left'
        });
        ScrollReveal().reveal('.second-block-about', {
            duration: 1500,
            distance: '60px',
            origin: 'right'
        });
    }, [])
    return (
        <>
            <div className='wrapper-banner-about'>
                <div className='first-block-about'>
                    <h1>
                    Prime Finance: Juntos, <span style={{color:'#20509F'}} > personalizamos</span> o futuro financeiro de sua empresa
                    </h1>
                </div>
                <div className='second-block-about'>
                    <h1 style={{color:'orange'}}>Sobre nós</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec enim nec odio tincidunt luctus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.</p>
                </div>
            </div>
        </>
    )
}
export default BannerAbout;
