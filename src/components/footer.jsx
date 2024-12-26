import '../css/footer.css';
import logo from '../assets/PNG/logo-05.png'
import { FaSquareFacebook, FaSquareInstagram } from 'react-icons/fa6'
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
function footer() {
    return (
        <>
            <div className='wrapper-footer'>
                <div className='first-block-footer'>
                    <div className='prime-div'>
                        <Link to={'/'}>
                            <img src={logo} alt='logo'></img>
                        </Link>
                        <p>Na Prime Finance, você tem a liberdade de se Autofinanciar e investir no crescimento da sua empresa ou em seus projetos pessoais.</p>
                        <div className='logo-redes'>
                            <FaSquareInstagram color='white' size={30} />
                            <FaSquareFacebook color='white' size={30} />
                            <FaLinkedin color='white' size={30} />
                        </div>
                    </div>
                    <div className='wrapper-links'>

                        <div className='div-links'>
                            <div className='title-footer'>
                                <h2>Links</h2>
                            </div>
                            <ul>
                                <Link to={'/'}>
                                    <li>Home</li>
                                </Link>
                                <Link to={'/Prime-finance/about'}>
                                    <li>Sobre nós</li>
                                </Link>
                                <Link to={'/Prime-finance/solucoes'}>
                                    <li>Soluções</li>
                                </Link>
                                <Link to={'/Prime-finance/contato'}>
                                    <li>Contato</li>
                                </Link>
                            </ul>
                        </div>

                        <div className='div-links'>
                            <div className='title-footer'>
                                <h2>Soluções</h2>
                            </div>
                            <ul>
                                <li>Credito sob medida</li>
                                <li>Sessão Estratégica</li>
                                <Link to={'/Prime-finance/homeEquity'}>
                                    <li>Home Equity</li>
                                </Link>
                            </ul>
                        </div>

                        <div className='div-links'>
                            <div className='title-footer'>
                                <h2>Contatos</h2>
                            </div>
                            <ul>
                                <Link to={'/Prime-finance/contato'}>
                                    <li>Contato</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='second-block-footer'>

                    <div>
                        <h4>© 2023 Prime Finance</h4>
                    </div>
                    <p>Aqui no nosso site, levamos a sério a privacidade dos nossos clientes e nos
                        esforçamos para cumprir os mais altos padrões de proteção de dados.
                        Estamos comprometidos em garantir que seus dados pessoais sejam coletados,
                        armazenados e utilizados de maneira ética e transparente, em conformidade com a LGPD.
                        Nós respeitamos a sua privacidade e queremos garantir que você tenha a melhor
                        experiência possível no nosso site, sabendo que seus dados estão seguros e protegidos.
                        <a style={{ color: 'orange', cursor: 'pointer' }} > Acesse nossa política de privacidade.</a></p>
                    <p>Desenvolvido por: <a style={{ fontWeight:'900', color:'white', cursor: 'pointer' }} href='https://rodrigo-0990.github.io/Portfolio/' target='blank'>Rodrigo Rodrigues</a></p>
                </div>
            </div>
        </>
    )
}
export default footer;