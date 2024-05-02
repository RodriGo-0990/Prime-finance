import "../css/header.css";
import logo from '../assets/PNG/logo-05.png'
import { SlMenu } from "react-icons/sl";
import { useEffect, useState } from "react";

import SideMenu from "./sub-components/sidemenu";

export default function header() {
    const[activate,setActive]= useState(false);
    
    const openMenu = () => {
        setActive(prevState => !prevState);
    };
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
                    <SlMenu onClick={openMenu} color="white" size={30}/>
                </div>
                {/* sidebar */}
                    <SideMenu open={activate}/>
            </container>
        </>
    )
}