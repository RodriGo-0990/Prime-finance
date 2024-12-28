import React from 'react'
import '../css/sessaoEstratégica.css'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'
import Void from '../components/void.jsx'
import MidBanner from '../components/midbanner.jsx'
import Cards from '../components/sub-components/cardsAbout.jsx'
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'

function SessãoEstratégica() {
  useEffect(function () {
    ScrollReveal().reveal('.title-sessao h1', {
      duration: 1500,
      distance: '30px',
      origin: 'left'
    });
    ScrollReveal().reveal('.title-sessao p', {
      duration: 1500,
      distance: '30px',
      origin: 'right'
    });
  })
  return (
    <>
      <div className='sessao-estrategica'>
        <Header />
        <div className='banner-sessao'>
          <div className='title-sessao'>
            <h1>Sessão estratégica <span style={{ "color": "#20509F" }}>para alavancar seu negócio</span></h1>
            <p>Na Prime Finance, oferecemos sessões estratégicas personalizadas para ajudar sua empresa a alcançar seus objetivos financeiros. Nossas sessões são conduzidas por especialistas experientes que irão trabalhar com você para desenvolver um plano financeiro personalizado que atenda às suas necessidades específicas.</p>
          </div>
          <div className='cards-sessao'>
            <Cards title={'Análise de fluxo de caixa'} subtitle={'Entenda a saúde financeira da sua empresa e identifique oportunidades de melhoria.'} image={'/assets/cards/fluxoCaixa.webp'} />
            <Cards title={'Planejamento financeiro'} subtitle={'Defina metas realistas e crie um plano para alcançá-las.'} image={'/assets/cards/planejamento.webp'} />
            <Cards title={'Gestão de riscos'} subtitle={'Identifique e mitigue os riscos financeiros que podem afetar seu negócio.'} image={'/assets/cards/riscos.webp'} />
          </div>
        </div>
      </div>
      <Void />
      <MidBanner />
      <Void />
      <Footer />
    </>
  )
}

export default SessãoEstratégica

      