import { FiArrowRight } from 'react-icons/fi';
import '../../css/articles.css'
function articles({ foto, title }) {
    return (
        <>
            <div className='wrapper-article'>
                <div className='article-title'>

                    <div className='image-article' style={{ backgroundImage: `url(${foto})` }}></div>
                    <div className='title-article'>
                        <h2>{title}</h2>    
                    </div>
                </div>
                <div className='leia-mais'>
                    <h2>Leia mais</h2><FiArrowRight color='black' size={20} />
                </div>
            </div>
        </>
    )
}
export default articles;