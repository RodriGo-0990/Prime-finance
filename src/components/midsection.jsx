import "../css/midSection.css"
import { useEffect } from "react";
import Askprime from "./sub-components/askPrime";
import Button from "./sub-components/button-contact";
import ScrollReveal from "scrollreveal";
function midSection() {
    useEffect(() => {

        ScrollReveal().reveal('.wrapper-midsection', {
            duration: 1500,
            origin: 'center',
        });
    },)

    return (
        <>
            <div className="wrapper-midsection-background">
                <div className="wrapper-midsection">
                    <div className='first-block'>
                        <div className='title'>
                            <h1>Suas finanças, seu futuro,<p style={{ color: "#20509F" }}> sob medida para você</p></h1>
                        </div>
                        <div className='text'>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>

                    </div>
                    <div className="second-block">
                        <Button />
                        <Askprime/>
                    </div>
                </div>
            </div>

        </>
    )
}
export default midSection;