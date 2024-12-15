import "../css/header.css";
import logo from '../assets/PNG/logo-05.png'
import { SlMenu } from "react-icons/sl";
import SideMenu from "./sub-components/sidemenu";

import{Link} from "react-router-dom";
import {useContext } from "react";
import {MenuContext } from '../context/menuContext';

export default function header() {
  const { setMenu } = useContext(MenuContext);
  return (
    <>
      <div className="wrapper">
        <div className="logo">
          <Link to="/Prime-finance"><img src={logo} alt="logo"/></Link>
        </div>
        <div className="menu">
          <ul className="menu-list">
            <li className="menu-item"> <Link to="/Prime-finance">Prime Finance</Link></li>
            <li className="menu-item"> <Link to="/Prime-finance/about">Quem Somos</Link> </li>
            <li className="menu-item"> <Link to="/Prime-finance/solucoes">Soluções</Link> </li>
            <li className="menu-item"> <Link to="/Prime-finance/blog">Blog</Link> </li>
            <li className="menu-item"> <Link to="/Prime-finance/contato">Contato</Link> </li>
          </ul>
        </div>

        <div className="sidebar-icon">
          <SlMenu onClick={setMenu} color="white" size={30} />
        </div>
        {/* sidebar */}
          <SideMenu />
      </div>
    </>
  )
}