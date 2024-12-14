import '../../css/header.css'
import { IoMdClose } from "react-icons/io";
import { useContext } from 'react';
import {MenuContext } from '../../context/menuContext';
import { Link } from 'react-router-dom';
function sideMenu() {

  const { isOpen, setMenu } = useContext(MenuContext);
  return (
    <>

        <div className={isOpen ? "side-menu" : "side-menu-close"}>
          <div className='head-sidemenu'>
            <button onClick={setMenu}>
              <IoMdClose color='white' size={30} />
            </button>
          </div>
          <ul className="sidemenu-list">
          <li className="menu-item" onClick={setMenu}> <Link to="/sarti-finance">Versa Finance</Link></li>
            <li className="menu-item" onClick={setMenu}> <Link to="/about">Quem Somos</Link> </li>
            <li className="menu-item" onClick={setMenu}> <Link to="/solucoes">Soluções</Link> </li>
            <li className="menu-item" onClick={setMenu}> <Link to="/blog">Blog</Link> </li>
            <li className="menu-item" onClick={setMenu}> <Link to="/contato">Contato</Link> </li>
          </ul>
        </div>
    </>
  )
}
export default sideMenu;