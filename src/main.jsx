import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './pages/about.jsx'
import Solucoes from './pages/solucoes.jsx'
import Blog from './pages/blog.jsx'
import Contato from './pages/contato.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MenuProvider from './context/menuContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MenuProvider>
        <Routes>
          <Route path='/sarti-finance' element={<App />} />
          <Route path='/about' element={<About />} />
          <Route path='/solucoes' element={<Solucoes />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contato' element={<Contato />} />
        </Routes>
      </MenuProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
