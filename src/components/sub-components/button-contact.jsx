import { Link } from 'react-router-dom';
import '../../css/banner.css'
import { MdArrowOutward } from "react-icons/md";
function buttonContact() {
    return (
        <>
            <div className="button-contact">
                <button className="contact">
                    <Link to={'/Prime-finance/contato'}>
                        Fale com um especialista <span>
                            <MdArrowOutward /></span>
                    </Link>
                </button>
            </div >
        </>
    )
}

export default buttonContact