import React from 'react'
import '../css/contato.css'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'
import Void from '../components/void.jsx'
import Midbanner from '../components/midbanner.jsx'
import FaqComponent from '../components/sub-components/faq-component.jsx'
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

function Contato() {
  useEffect(function () {
    ScrollReveal().reveal('.title-contato h1', {
      duration: 1500,
      distance: '30px',
      origin: 'left'
    });
    ScrollReveal().reveal('.title-contato p', {
      duration: 1500,
      distance: '30px',
      origin: 'right'
    });
  })
  return (
    <>
      <div className='contato'>
        <Header />
        <div className='banner-contato'>
          <div className='title-contato'>
            <h1>Na hora de planejar o futuro da sua empresa conte com os nossos <span style={{ "color": "#20509F" }}>profissionais</span></h1>
            <p>Descubra a diferença da Prime Finance e experimente a verdadeira personalização em serviços financeiros. Vamos juntos desenhar o seu futuro financeiro. Entre em contato conosco hoje para iniciar sua jornada.</p>
          </div>
          <div className='form-contato'>
            <form>
              <input type='text' placeholder='Nome' required></input>
              <input type='text' placeholder='Email' required></input>
              <input type='text' placeholder='Celular' required></input>
              <textarea placeholder='Motivo do contato' required></textarea>
              <button type='submit'>Enviar</button>
            </form>
          </div>
        </div>
      </div>
      <Void />
      <div className={'title-contatos'}>
        <p>Fale Conosco</p>
      </div>
      <div className='contatos-wrapper'>
        <div className='contatos-item'>
          <div className='contatos-icon'><FaPhoneVolume color='#20509F' size={30} /></div>
          <h3>Telefone</h3>
          <p>(00)0000-0000</p>
        </div>
        <div className='contatos-item'>
          <div className='contatos-icon'><IoMailSharp color='#20509F' size={30} /></div>
          <h3>Email</h3>
          <p>contatos@Primefinance.com.br</p>
        </div>
        <div className='contatos-item'>
          <div className='contatos-icon'><FaLocationDot color='#20509F' size={30} /></div>
          <h3>Localização</h3>
          <p>Florianópolis,SC</p>
        </div>
      </div>
      <Void/>
      <Midbanner/>
      <Void />
      <div className={'title-faq'}>
        <h1>Perguntas frequentes</h1>
      </div>
      <div className='faq-wrapper'>
        <FaqComponent question={'Quais são os principais tipos de creditos empresariais disponíves?'} answer={'As opções de crédito para sua empresa são inúmeras, indo desde linhas de crédito para capital de giro até financiamentos para expansão e inovação. A chave é encontrar a solução perfeita para o seu plano de crescimento.'} />
        <FaqComponent question={'como o crédito empresarial pode impulsionar o crescimento da minha empresa? '} answer={'Com o crédito empresarial, as possibilidades são ilimitadas. Acesso a novas tecnologias, expansão de mercados, aumento da produção - tudo é possível com o financiamento adequado.'} />
        <FaqComponent question={'Minha empresa é nova, posso conseguir crédito empresarial?'} answer={'Certamente! Bancos e instituições financeiras oferecem produtos especialmente desenvolvidos para startups e novos negócios. É o impulso inicial que seu sonho empreendedor precisa.'} />
        <FaqComponent question={'O que é melhor para minha empresa, crédito ou financiamento?'} answer={'Empréstimo ou financiamento, qual a melhor escolha? A resposta depende de suas necessidades específicas. Nossos especialistas podem ajudá-lo a tomar a melhor decisão para o seu negócio.'} />
        <FaqComponent question={'Existem maneiras de tornar o gerenciamento de crédito empresarial mais eficiente?'} answer={'Absolutamente! A arte de gerenciar crédito empresarial eficientemente é um diferencial para qualquer negócio. Com a abordagem certa, você pode converter crédito em combustível para o sucesso contínuo do seu empreendimento.'} />
      </div>
      <Void />
      <Footer />
    </>
  )
}

export default Contato
