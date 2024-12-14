import React from 'react'
import '../css/solucoes.css'
import Header from '../components/header.jsx'
import SectionCards from '../components/cardsSection.jsx'
import Footer from '../components/footer.jsx'
import Void from '../components/void.jsx'
import MidSection from '../components/midsection.jsx'
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'


function Solucoes() {
  useEffect(function () {
    ScrollReveal().reveal('.title-solucoes', {
      duration: 1500,
      distance: '30px',
      origin: 'left'
    });

  })
  return (
    <>
      <div className='solucoes'>
        <Header />
        <div className='banner-solucoes'>
          <div className='title-solucoes'>
            <h1>Conheça nossas soluções de <span style={{ "color": "#20509F" }}>crédito personalizado</span> para empresas</h1>
          </div>
        </div>
      </div>
      <SectionCards/>
      <Void />
      <MidSection />
      <Void />
      <Footer />
    </>
  )
}

export default Solucoes
