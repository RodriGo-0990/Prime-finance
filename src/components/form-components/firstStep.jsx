import React from "react";
import InputMask from "react-input-mask";


function firstStep() {
    return (
        <>
            <label>Nome</label>
            <InputMask type="text" placeholder="Como podemos te chamar?"required />
            <label>Email</label>
            <input type="email" placeholder="nome@email.com" required />
            <label>WhatsApp</label>
            <InputMask  mask="+55 (99) 99999-9999"  placeholder="(99)99999-9999" required />
        </>
    )
}
export default firstStep;