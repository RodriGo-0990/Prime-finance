import { FiArrowRight } from 'react-icons/fi';
import '../../css/articles.css'
import { Link } from 'react-router-dom';
function articles({ foto, title, category, contentId }) {
    const data = { category: category, image: foto, title: title };
    return (
        <>
            <div className='wrapper-article'>
                <div className='article-title'>

                    <div className='image-article' style={{ backgroundImage: `url(${foto})` }}></div>
                    <div className='title-article'>
                        <h3>{category}</h3>
                        <Link to={`/Prime-finance/articlePage/${contentId}`} state={data}>
                            <h2>{title}</h2>
                        </Link>
                    </div>
                </div>
                <div className='leia-mais'>
                    <Link to={`/Prime-finance/articlePage/${contentId}`} state={data}>
                        <h2>Leia mais</h2><FiArrowRight color='black' size={20} />
                    </Link>
                </div>
            </div>
        </>
    )
}
export default articles;