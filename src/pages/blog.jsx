import React from 'react'
import '../css/blog.css'

import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'
import Void from '../components/void.jsx'
import MidBanner from '../components/midbanner.jsx'
import ArticleSsection from '../components/articleSsection.jsx'
import Article from '../components/sub-components/articles.jsx'

import Image1 from '../assets/article.webp'
import Image2 from '../assets/article2.webp'
import Image3 from '../assets/article3.webp'

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
            <Article foto={Image1} title={'Como preparar sua empresa para uma auditoria financeira'} />
            <Article foto={Image2} title={'Descubra como a tecnologia está transformando o crédito'} />
            <Article foto={Image3} title={'Superando as barreiras do crédito'} />
          </div>
          <div className='right-wrapper-articles'>
            <Article foto={Image1} title={'Como preparar sua empresa para uma auditoria financeira'} />
            <Article foto={Image2} title={'Descubra como a tecnologia está transformando o crédito'} />
            <Article foto={Image3} title={'Superando as barreiras do crédito'} />
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
