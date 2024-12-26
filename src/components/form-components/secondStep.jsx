import React from "react";

function secondStep() {
    return (
        <>
            <label>Valor no imóvel</label>
            <input type="number" required />
            <label>Cep do imóvel</label>
            <input type="number" required />
        </>
    )
}
export default secondStep;