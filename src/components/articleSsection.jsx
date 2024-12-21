import '../css/articlesSection.css'
import { FiArrowUpRight } from 'react-icons/fi';

// imagens de artigo
import article1 from '../assets/articles/article.webp';
import article2 from '../assets/articles/article2.webp'
import article3 from '../assets/articles/article3.webp'
// conteúdos de artigo
import ArticleLoremIpsum from '../articles/article-lorenIpsum';
import Articles from './sub-components/articles';
import { Link } from 'react-router-dom';
function articlesSection({title}) {
    return (
        <>
            <div className='wrapper-articles'>
                <div className='title-articles'>
                    <h1>{title}</h1>
                </div>
                <div className='div-cards'>
                    <Articles foto={article1} title={'Como preparar sua empresa para uma auditoria financeira'} category={"Gestão Empresarial"} content={<ArticleLoremIpsum/>}/>
                    <Articles foto={article2} title={'Descubra como a tecnologia está transformando o crédito'} category={"Crédito Empresarial"} content={<ArticleLoremIpsum/>} />
                    <Articles foto={article3} title={'Superando as barreiras do crédito'} category={"Crédito Empresarial"} content={<ArticleLoremIpsum/>}/>
                </div>
                <div className='ask-div-articles'>
                    <Link to={'/Prime-finance/blog'}>
                     Ver mais conteúdos <span><FiArrowUpRight/></span>
                    </Link>
                </div>

            </div>
        </>
    )
}
export default articlesSection;