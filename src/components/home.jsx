import '../css/home.css'

import Header from './header'
import Banner from './banner'

function home() {
    return(
        <>
            <div className="wrapper-home">
                <Header/>
                <Banner/>
            </div>
        </>
    )
}

export default home