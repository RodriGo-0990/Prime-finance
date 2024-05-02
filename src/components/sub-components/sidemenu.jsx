import { useEffect, useState } from 'react';
import '../../css/header.css'
import { IoMdClose } from "react-icons/io";
function sideMenu({ open }) {
    const [activate, setActive] = useState(open);
    useEffect(() => {
        setActive(open);
    }, [open]);
    const closeMenu = () => {
        setActive(!open);
    }
    return (
        <>
            <div className={activate ? "side-menu" : "side-menu-close"}>
                <div className='head-sidemenu'>
                    <button onClick={closeMenu}>
                        <IoMdClose  color='white' size={30} />
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