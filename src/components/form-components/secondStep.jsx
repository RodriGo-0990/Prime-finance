import React, { useState } from "react";
import InputMask from "react-input-mask";
import { formatCurrency } from "../../utils/formatUtils";

function SecondStep() {
  const [valorImovel, setValorImovel] = useState("");

  const handleValorChange = (e) => {
    const inputValue = e.target.value;
    setValorImovel(formatCurrency(inputValue));
  };

  return (
    <>
      <label>Valor do imóvel</label>
      <input
        type="text"
        value={valorImovel}
        onChange={handleValorChange}
        placeholder="R$ 0,00"
        required
      />
      <label>CEP do imóvel</label>
      <InputMask
        type="text"
        placeholder="Digite o CEP"
        mask={"99999-999"}
        title="Digite um CEP válido no formato 00000-000"
        required
      />
    </>
  );
}

export default SecondStep;
