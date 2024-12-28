// utils/formatUtils.js

/**
 * Formata um valor numérico para o formato de moeda brasileiro (R$).
 * @param {string} value - O valor em string que será formatado.
 * @returns {string} - O valor formatado como moeda.
 */
export const formatCurrency = (value) => {
  const numericValue = value.replace(/\D/g, ""); // Remove caracteres não numéricos
  if (!numericValue) return ""; // Retorna vazio se não houver valor numérico
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(numericValue / 100);
};
