import '../../css/cardsAbout.css'
function cardsAbout({ background, color, width, height, logo, title, text }) {
    return (
        <>
            <div className="wrapper-cards-about" style={{width:width, height:height, color:color, background:background}}>
                <div className='first-block-card-about'>
                    <div className='logo-card-about'>{logo}</div>
                    <div className='title-card-about'>
                        <h1>{title}</h1>
                    </div>
                </div>
                <div className='second-block-card-about'>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}
export default cardsAbout;
