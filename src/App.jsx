import './index.css'
import Home from './components/home.jsx'
import Section from './components/section.jsx'
import Paralax from './components/paralax.jsx'
import MidSection from './components/midsection.jsx'
import Void from './components/void.jsx'
import CardsSection from './components/cardsSection'
import MidBanner from './components/midbanner'
import ArticlesSection from './components/articleSsection'
import Footer from './components/footer'
function App() {

  return (
    <>
      <Home/>
      <Section/>
      <Paralax/>
      <MidSection/>
      <Void/>
      <CardsSection title={<>
      Cada cliente é especial, e assim também são as 
      <span style={{ color: "#20509F" }}> nossas soluções</span>
    </>}/>
      <Void/>
      <MidBanner/>
      <Void/>
      <ArticlesSection title={'Conteúdos para impulsionar o seu negocio'}/>
      <Void/>
      <Footer/>
    </>
  )
}

export default App
