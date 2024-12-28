import React from 'react'
import '../css/creditoSobMedida.css'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'
import Void from '../components/void.jsx'
import MidBanner from '../components/midbanner.jsx'
import Cards from '../components/sub-components/cardsAbout.jsx'
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'

function CreditoSobMedida() {
  useEffect(function () {
    ScrollReveal().reveal('.title-credito h1', {
      duration: 1500,
      distance: '30px',
      origin: 'left'
    });
    ScrollReveal().reveal('.title-credito p', {
      duration: 1500,
      distance: '30px',
      origin: 'right'
    });
  })
  return (
    <>
      <div className='wrapper-credito'>
        <Header />
        <div className='banner-credito'>
          <div className='first-block'>
            <h1>Soluções de crédito <span style={{ "color": "#20509F" }}>personalizadas</span> para o sucesso do seu negócio</h1>
          </div>
          <div classname="second-block">
            <p>Na Prime Finance, entendemos que cada empresa tem necessidades únicas. É por isso que oferecemos soluções de crédito personalizadas, projetadas para impulsionar o crescimento e o sucesso do seu negócio.</p>
          </div>
        </div>
        <div className='cards-credito'>
          <Cards title={'Crédito para Capital de Giro'} text={'Mantenha seu fluxo de caixa saudável e invista no crescimento da sua empresa.'} />
          <Cards title={'Financiamento para Investimentos'} text={'Expanda suas operações, adquira novos equipamentos e impulsione a inovação.'} />
          <Cards title={'Crédito Consignado'} text={'Uma solução simples e eficiente para obter crédito com taxas competitivas.'} />
        </div>
      </div>
      <Void />
      <MidBanner />
      <Void />
      <Footer />
    </>
  )
}

export default CreditoSobMedida

