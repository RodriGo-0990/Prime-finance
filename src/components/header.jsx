import "../css/header.css";
import logo from '../assets/PNG/logo-05.png'
import { SlMenu } from "react-icons/sl";
import SideMenu from "./sub-components/sidemenu";

import {useContext } from "react";
import {MenuContext } from '../context/menuContext';

export default function header() {
  const { setMenu } = useContext(MenuContext);
  return (
    <>
      <container className="wrapper">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="menu">
          <ul className="menu-list">
            <li className="menu-item"> Versa Finance</li>
            <li className="menu-item"> Quem Somos</li>
            <li className="menu-item"> Soluções</li>
            <li className="menu-item"> Blog</li>
            <li className="menu-item"> Contato</li>
          </ul>
        </div>

        <div className="sidebar-icon">
          <SlMenu onClick={setMenu} color="white" size={30} />
        </div>
        {/* sidebar */}
          <SideMenu />
      </container>
    </>
  )
}