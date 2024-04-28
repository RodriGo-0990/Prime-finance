import '../css/paralax.css'
import logo from "../assets/PNG/logo-05.png"
function paralax() {
    return (
        <>
            <div className='wrapper-paralax'>
                <div className='paralax'>
                    <h1> Unindo tradição e inovação, nós moldamos seu<p style={{ color: '#20509F' }}> futuro financeiro</p> </h1>
                    <div className='logo-paralax'><img src={logo} alt='logo'/></div>
                </div>
            </div>

        </>
    )

}
export default paralax;