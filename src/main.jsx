import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './pages/about.jsx'
import Solucoes from './pages/solucoes.jsx'
import Blog from './pages/blog.jsx'
import Contato from './pages/contato.jsx'
import ArticlePage from './pages/articlePage.jsx'
import HomeEquity from './pages/homeEquity.jsx'
import { HashRouter,Routes, Route } from 'react-router-dom'
import MenuProvider from './context/menuContext.jsx'
import ScrollToTop from './context/scrollToTop.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop/>
      <MenuProvider>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/Prime-finance/about' element={<About />} />
          <Route path='/Prime-finance/solucoes' element={<Solucoes />} />
          <Route path='/Prime-finance/blog' element={<Blog />} />
          <Route path='/Prime-finance/contato' element={<Contato />} />
          <Route path='/Prime-finance/articlePage/:id' element={<ArticlePage />} />
          <Route path='/Prime-finance/homeEquity' element={<HomeEquity/>}/>
        </Routes>
      </MenuProvider>
    </HashRouter>
  </React.StrictMode>,
)
