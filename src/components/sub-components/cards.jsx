import '../../css/cards.css'
import { FaArrowRightLong } from "react-icons/fa6";
function cards({ foto, logo, title }) {
    return (
        <>
            <div className="wrapper-card-options" style={{ backgroundImage: `url(${foto})` }}>
                <div className='overlayer'>
                    <div className='card-title'>
                        <div className="logo-card">{logo}</div>
                        <div className="title-cards">
                            <h1>{title}</h1>
                        </div>
                    </div>
                    <div className="arrow-card">
                        <FaArrowRightLong size={30} color='white'></FaArrowRightLong>
                    </div>
                </div>
            </div>
        </>
    )
}
export default cards;