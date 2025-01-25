import React from 'react'
import '../css/about.css'
import { GiReceiveMoney } from "react-icons/gi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { TbBusinessplan } from "react-icons/tb";
import Header from '../components/header.jsx'
import Banner from '../components/bannerAbout.jsx'
import Void from '../components/void.jsx'
import MidBanner from '../components/midbanner.jsx'
import Footer from '../components/footer.jsx'
import Parceiros from '../components/parceiros.jsx'
import Cards from '../components/sub-components/cardsAbout.jsx'

function About() {

    return (
        <>
            <div className='about'>
                <Header />
                <Banner />
                    <div className='cards-about'>
                        <Cards width={330} height={400} logo={<GiReceiveMoney size={40} color="#13366f" />} title={"Serviço Personalizado"} text={'Cada cliente é único e, por isso, merece um serviço personalizado. Entendemos seus objetivos e criamos uma estratégia financeira que seja verdadeiramente sua.'} />
                        <Cards width={330} height={400} logo={<FaMoneyBillTrendUp size={40} color="#13366f" />} title={"Visão voltada ao futuro"} text={'Sabemos que o mundo financeiro está em constante evolução. Por isso, estamos sempre buscando inovações para oferecer o melhor e o mais atual aos nossos clientes.'} />
                        <Cards width={330} height={400} logo={<TbBusinessplan size={40} color="#13366f" />} title={"Impulsionamos seu negócio"} text={'Juntos, construindo o crescimento da sua empresa: Com nossa rede exclusiva de instituições financeiras, oferecemos soluções econômicas para potencializar seus lucros através do crédito.'} />
                    </div>
            </div>
            <Void/>
            <MidBanner />
            <Void />
            <Parceiros />
            <Void />
            <Footer />
        </>
    )
}

export default About
