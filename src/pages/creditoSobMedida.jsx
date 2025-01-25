import React from 'react'
import '../css/creditoSobMedida.css'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'
import Void from '../components/void.jsx'
import MidBanner from '../components/midbanner.jsx'
import MidSection from '../components/midsection.jsx'
import Cards from '../components/sub-components/cardsAbout.jsx'
import Paralax from '../components/paralax.jsx'

import { GoVerified } from "react-icons/go";
import { CiTimer } from "react-icons/ci";
import { BiBuildingHouse } from "react-icons/bi";
import { RiBuilding2Fill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiCash } from "react-icons/gi";
import { BsBank2 } from "react-icons/bs";
import { RxStopwatch } from "react-icons/rx";

import { TbReceiptTax } from "react-icons/tb";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { TbBusinessplan } from "react-icons/tb";

import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


function CreditoSobMedida() {
  useEffect(function () {
    ScrollReveal().reveal('.first-block-about h1', {
      duration: 1500,
      distance: '30px',
      origin: 'left'
    });
    ScrollReveal().reveal('.second-block-about p', {
      duration: 1500,
      distance: '30px',
      origin: 'right'
    });
    ScrollReveal().reveal('.credito-sob-medida-wrapper-title h1', {
      duration: 1500,
      distance: '30px',
      origin: 'left'
    });
  })
  return (
    <>
      <div className='about'>
        <Header />
        <div className='wrapper-banner-about'>
          <div className='first-block-about'>
            <h1>Soluções de crédito <span style={{ "color": "#20509F" }}>personalizadas</span> para o sucesso do seu negócio</h1>
          </div>
          <div className="second-block-about">
            <p>Na Prime Finance, entendemos que cada empresa tem necessidades únicas. É por isso que oferecemos soluções de crédito personalizadas, projetadas para impulsionar o crescimento e o sucesso do seu negócio.</p>
          </div>
        </div>
        <div className='cards-about'>
          <Cards width={300} height={350} logo={<FaMoneyBillTrendUp size={40} color="#13366f" />} title={'Crédito para Capital de Giro'} text={'Mantenha seu fluxo de caixa saudável e invista no crescimento da sua empresa.'} />
          <Cards width={300} height={350} logo={<TbBusinessplan size={40} color="#13366f" />} title={'Financiamento para Investimentos'} text={'Expanda suas operações, adquira novos equipamentos e impulsione a inovação.'} />
          <Cards width={300} height={350} logo={<TbReceiptTax size={40} color="#13366f" />} title={'Crédito Consignado'} text={'Uma solução simples e eficiente para obter crédito com taxas competitivas.'} />
        </div>
      </div>
      <Void />
      <Paralax />
      <MidSection />
      <Void />
      <div className='credito-sob-medida-wrapper'>
        <div className='credito-sob-medida-wrapper-title'>
          <h1>Vantagens de contratar o crédito pessoal na <span style={{ "color": "#20509F" }}>Prime Finance.</span></h1>
        </div>
        <div className='credito-sob-medida-wrapper-cards'>
          <Cards width={280} height={'fit-content'} logo={<GoVerified size={40} color="#13366f"/>} title={'Garantia Flexivel'} text={'Use um ou mais imóveis como garantia, de forma flexível e acessível'} />
          <Cards width={280} height={'fit-content'} logo={<BiBuildingHouse size={40} color="#13366f"/>} title={'Diversidade de imóveis aceitos'} text={'Aceitamos imóveis próprios ou de terceiros, aumentando as opções disponíveis para você e tornando a garantia mais flexível'}/>
          <Cards width={280} height={'fit-content'} logo={<RiBuilding2Fill size={40} color="#13366f"/>} title={'Avaliação Favorável'} text={'A avaliação do imóvel é realizada com base em seu valor comercial de venda, aumentando o valor da garantia e melhorando as condições do crédito'}/>
          <Cards width={280} height={'fit-content'} logo={<FaMoneyBillTrendUp size={40} color="#13366f"/>} title={'Dedução de custos nos impostos'} text={'Se você é PJ Lucro Real, os custos do serviço são dedutíveis nos impostos, o que pode lhe gerar economia e benefícios fiscais'}/>
          <Cards width={280} height={'fit-content'} logo={<CiTimer size={40} color="#13366f"/>} title={'Prazo estendido'}  text={'Obtenha um prazo mais longo e pague parcelas mais acessíveis'}/>
          <Cards width={280} height={'fit-content'} logo={<FaHandshake size={40} color="#13366f" />} title={'Operação estruturada sem juros'} text={'Significa que você vai ter o menor custo do mercado'}/>
          <Cards width={280} height={'fit-content'} logo={<GiCash size={40} color="#13366f"/>} title={'Liberação de uso do recurso'} text={'O recurso pode ser utilizado livremente, sem a necessidade de justificar sua utilização'}/>
          <Cards width={280} height={'fit-content'} logo={<BsBank2 size={40} color="#13366f"/>} title={'Não gera endividamento no BACEN'} text={'Entra como aporte de capital, não comprometendo assim a saúde financeira da empresa'}/>
          <Cards width={280} height={'fit-content'} logo={<GiTakeMyMoney size={40} color="#13366f"/>} title={'De R$ 500 mil a R$ 5 milhões por fonte tomadora'} text={'Atendendo assim uma ampla gama de necessidades financeiras de pessoas físicas e jurídicas'}/>
          <Link to={'/Prime-finance/homeEquity'}>
          <Cards background={"#13366f"} color={"#fff"} width={280} height={'fit-content'} logo={<RxStopwatch size={40} color="#fff"/>} title={'Faça uma simulação do seu crédito Aqui!'}/>
          </Link>
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

