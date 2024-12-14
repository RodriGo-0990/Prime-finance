import '../css/articlesSection.css'
import { FiArrowUpRight } from 'react-icons/fi';
import article1 from '../assets/article.webp';
import article2 from '../assets/article2.webp'
import article3 from '../assets/article3.webp'

import Articles from './sub-components/articles';
function articlesSection({title}) {
    return (
        <>
            <div className='wrapper-articles'>
                <div className='title-articles'>
                    <h1>{title}</h1>
                </div>
                <div className='div-cards'>
                    <Articles foto={article1} title={'Como preparar sua empresa para uma auditoria financeira'}/>
                    <Articles foto={article2} title={'Descubra como a tecnologia está transformando o crédito'}/>
                    <Articles foto={article3} title={'Superando as barreiras do crédito'}/>
                </div>
                <div className='ask-div-articles'>
                    <p> Ver mais conteúdos <span><FiArrowUpRight/></span> </p>
                </div>

            </div>
        </>
    )
}
export default articlesSection;