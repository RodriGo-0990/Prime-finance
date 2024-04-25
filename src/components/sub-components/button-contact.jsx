import'../../css/banner.css'
import { MdArrowOutward } from "react-icons/md";
function buttonContact() {
    return (
        <>
            <div className="button-contact">
                <button className="contact"> Fale com um especialista <span><MdArrowOutward /></span></button>
            </div>
        </>
    )
}

export default buttonContact