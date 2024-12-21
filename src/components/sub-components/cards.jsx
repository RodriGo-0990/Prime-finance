import '../../css/cards.css'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function cards({ foto, logo, title, content }) {
    const data = { category: "Serviços", image: foto, title: title, content: content };
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
                        <Link to={'/Prime-finance/articlePage'} state={ data }>
                            <FaArrowRightLong size={30} color='white'></FaArrowRightLong>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default cards;