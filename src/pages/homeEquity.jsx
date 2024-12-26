import React from "react";
import "../css/homeEquity.css";
import { TbReceiptTax } from "react-icons/tb";
import { FaHandsHelping } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";

import Header from "../components/header";
import Cards from "../components/sub-components/cardsAbout.jsx"
import Void from "../components/void";
import MidBanner from "../components/midbanner";
import Faq from "../components/sub-components/faq-component.jsx";
import Footer from "../components/footer";

import FirstStep from "../components/form-components/firstStep.jsx";
import SecondStep from "../components/form-components/secondStep.jsx";
import ThirdStep from "../components/form-components/thirdStep.jsx";

import ScrollReveal from "scrollreveal";
import { useEffect, useState } from "react";


function homeEquity() {
    const [step, setStep] = useState(1);

    function handleNextStep() {
        if (step != 3) {
            setStep(step + 1);
        }
    }


    useEffect(() => {
        const step1 = document.getElementById("pass-1");
        const step2 = document.getElementById("pass-2");
        const step3 = document.getElementById("pass-3");
        const button = document.getElementById("button-equity");

        // Manipula as classes com base no passo atual
        if (step === 1) {
            step1.classList.add("active");
        }
        if (step === 2) {
            step1.classList.remove("pass");
            step1.classList.add("passed");
            step2.classList.add("active");
        }
        if (step === 3) {
            step2.classList.remove("pass");
            step2.classList.add("passed");
            step3.classList.add("active");
            button.innerText = "Simular";
        }
    }, [step]);

    const renderContent = () => {
        switch (step) {
            case 1:
                return <FirstStep />;
            case 2:
                return <SecondStep />;
            case 3:
                return <ThirdStep />;
            default:
                return null;
        }
    };



    useEffect(() => {
        ScrollReveal().reveal('.first-block', { duration: 1500, origin: 'left', distance: '50px' });
        ScrollReveal().reveal('.second-block', { duration: 1500, origin: 'bottom', distance: '50px' });
        ScrollReveal().reveal('.cards-equity', { duration: 1500, origin: 'bottom', distance: '50px' });
    }, [])

    return (
        <>
            <div className="wrapper-home-equity">
                <Header />
                <div className="container-home-equity">
                    <div className="first-block">
                        <div className="title-equity">
                            <h1>Conheça o Home Equity da <span style={{ color: "#20509F" }}>Prime Finance</span></h1>
                        </div>
                        <div className="text-equity">
                            <p>Utilize o potencial oculto do seu imóvel para financiar sua expansão de negócios ou alcançar suas metas financeiras.<br /> <span style={{ color: "#20509F", fontWeight: 'bold' }}>Experimente a verdadeira liberdade financeira.</span></p>
                        </div>
                    </div>
                    <div className="second-block">
                        <div className="pass-simulation">
                            <div id="pass-1" className="pass">
                                <span>1</span>
                            </div>
                            <div className="gap-pass">
                                <span />
                            </div>
                            <div id="pass-2" className="pass">
                                <span>2</span>
                            </div>
                            <div className="gap-pass">
                                <span />
                            </div>
                            <div id="pass-3" className="pass">
                                <span>3</span>
                            </div>
                        </div>
                        <form className="form-equity"
                        onSubmit={(e) => {
                            e.preventDefault(); // Impede o envio padrão do formulário
                            handleNextStep(); // Avança para o próximo passo
                          }}>
                            {renderContent()}
                            <button id="button-equity" type='submit' style={{ marginTop: '20px' }}>Proximo</button>
                        </form>
                    </div>
                </div>
            </div>
            <Void />
            <section className="cards-equity">
                <h1>Porque escolher o <span style={{ color: "#20509F" }}>Home Equity</span> da Prime Finance?</h1>
                <div className="cards-equity-wrapper">
                    <Cards logo={<TbReceiptTax size={40} color="#13366f" />}
                        title={"Acesse um crédito significativo a taxas de juros competitivas"}
                        text={"Maximize o potencial do seu imóvel e libere a liquidez que você precisa para expandir seus negócios ou financiar outros projetos importantes"} />
                    <Cards logo={<FaHandsHelping size={40} color="#13366f" />}
                        title={"Processo de solicitação simples e ágil"}
                        text={"Nossa equipe está pronta para guiar você por cada etapa, tornando todo o processo o mais simples e rápido possível"} />
                    <Cards logo={<FaMoneyBillWave size={40} color="#13366f" />}
                        title={"Soluções financeiras personalizadas"}
                        text={"Compreendemos que cada cliente tem necessidades únicas. Nossa abordagem sob medida garante que oferecemos as soluções que melhor atendem às suas circunstâncias específicas"} />
                    <Cards logo={<RiCustomerService2Fill size={40} color="#13366f" />}
                        title={"Atendimento ao cliente excepcional"}
                        text={"Nossos consultores financeiros dedicados estão sempre disponíveis para ajudá-lo a navegar por suas opções e garantir que você esteja totalmente informado e confortável com suas decisões financeiras"} />
                </div>
            </section>
            <Void />
            <MidBanner />
            <Void />
            <div className="faq-equity">
                <div className="title-faq">
                    <h1>Perguntas frequentes</h1>
                </div>
                <div className="faq-wrapper">
                    <Faq question={"Quais são os principais tipos de creditos empresariais disponíves?"} answer={"As opções de crédito para sua empresa são inúmeras, indo desde linhas de crédito para capital de giro até financiamentos para expansão e inovação. A chave é encontrar a solução perfeita para o seu plano de crescimento."} />
                    <Faq question={"como o crédito empresarial pode impulsionar o crescimento da minha empresa? "} answer={"Com o crédito empresarial, as possibilidades são ilimitadas. Acesso a novas tecnologias, expansão de mercados, aumento da produção - tudo é possível com o financiamento adequado."} />
                    <Faq question={"Minha empresa é nova, posso conseguir crédito empresarial?"} answer={"Certamente! Bancos e instituições financeiras oferecem produtos especialmente desenvolvidos para startups e novos negócios. É o impulso inicial que seu sonho empreendedor precisa."} />
                    <Faq question={"O que é melhor para minha empresa, crédito ou financiamento?"} answer={"Empréstimo ou financiamento, qual a melhor escolha? A resposta depende de suas necessidades específicas. Nossos especialistas podem ajudá-lo a tomar a melhor decisão para o seu negócio."} />
                </div>

            </div>
            <Void />
            <Footer />
        </>
    )
}

export default homeEquity;
