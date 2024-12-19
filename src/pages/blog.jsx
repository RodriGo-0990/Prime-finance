import React from 'react'
import '../css/blog.css'

import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'
import Void from '../components/void.jsx'
import MidBanner from '../components/midbanner.jsx'
import ArticleSsection from '../components/articleSsection.jsx'
import Article from '../components/sub-components/articles.jsx'

import Image1 from '../assets/articles/article.webp'
import Image2 from '../assets/articles/article2.webp'
import Image3 from '../assets/articles/article3.webp'
import Image4 from '../assets/articles/article4.webp'
import Image5 from '../assets/articles/article5.webp'
import Image6 from '../assets/articles/article6.webp'

import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'

function Blog() {
  useEffect(function () {
    ScrollReveal().reveal('.right-wrapper-articles', {
      duration: 3500,
      delay: 500
    });
    ScrollReveal().reveal('.left-wrapper-articles', {
      duration: 2500,
    });
  })
  return (
    <>
      <div className='wrapper-blog'>
        <Header />
        <div className='container-blog'>
          <div className='left-wrapper-articles'>
            <Article foto={Image4} title={'Como preparar sua empresa para uma auditoria financeira'} category={"Gestão Empresarial"} />
            <Article foto={Image5} title={'Descubra como a tecnologia está transformando o crédito'} category={"Gestão Empresarial"} />
            <Article foto={Image6} title={'Superando as barreiras do crédito'}category={"Crédito Empresarial"} />
          </div>
          <div className='right-wrapper-articles'>
            <Article foto={Image1} title={'Como preparar sua empresa para uma auditoria financeira'} category={"Gestão Empresarial"}/>
            <Article foto={Image2} title={'Descubra como a tecnologia está transformando o crédito'}category={"Gestão Empresarial"} />
            <Article foto={Image3} title={'Superando as barreiras do crédito'} category={"Crédito Empresarial"} />
          </div>
        </div>
      </div>
      <Void />
      <ArticleSsection title={'Últimas postagens'} />
      <Void />
      <MidBanner />
      <Void />
      <Footer />
    </>
  )
}

export default Blog
