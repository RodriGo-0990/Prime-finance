import "../css/header.css";
import logo from '../assets/PNG/logo-05.png'
import { SlMenu } from "react-icons/sl";
export default function header() {
    return (
        <>
            <div className="wrapper">
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
                    <SlMenu color="white" size={30}/>
                </div>

            </div>
        </>
    )
}