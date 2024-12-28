import React from "react";

function thirdStep() {
    return (
        <>
            <label>Qual o Valor do empréstimo?</label>
            <div className="option">
                <input type="radio" name="valor" required/>
                <label>De R$100 mil até R$ 500 mil</label>
            </div>
            <div className="option">
                <input type="radio" name="valor" />
                <label>De R$ 500 mil até R$ 1 milhão</label>
            </div>
            <div className="option">
                <input type="radio" name="valor"/>
                <label>De R$ 1 milhão até R$ 2 milhões</label>
            </div>
            <div className="option">
                <input type="radio" name= "valor"/>
                <label>Acima de R$ 2 milhões</label>
            </div>
        </>
    )
}
export default thirdStep;