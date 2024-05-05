import '../../css/header.css'
import { IoMdClose } from "react-icons/io";
import { useContext } from 'react';
import {MenuContext } from '../../context/menuContext';
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
            <li className="menu-item"> Versa Finance</li>
            <li className="menu-item"> Quem Somos</li>
            <li className="menu-item"> Soluções</li>
            <li className="menu-item"> Blog</li>
            <li className="menu-item"> Contato</li>
          </ul>
        </div>
    </>
  )
}
export default sideMenu;