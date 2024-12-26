import React from "react";

function firstStep() {
    return (
        <>
            <label>Nome</label>
            <input type="text" required />
            <label>Email</label>
            <input type="text" required />
            <label>WhatsApp</label>
            <input type="number" required />
        </>
    )
}
export default firstStep;