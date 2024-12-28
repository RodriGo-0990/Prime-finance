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
import MidSection from "../components/midsection";
import Faq from "../components/sub-components/faq-component.jsx";
import Footer from "../components/footer";

import FirstStep from "../components/form-components/firstStep.jsx";
import SecondStep from "../components/form-components/secondStep.jsx";
import ThirdStep from "../components/form-components/thirdStep.jsx";
import Loader from "../components/sub-components/loading.jsx"
import Error from "../components/sub-components/serverError.jsx"

import ScrollReveal from "scrollreveal";
import { useEffect, useState } from "react";


function homeEquity() {
    const [step, setStep] = useState(1);

    function handleNextStep() {
        const currentStep = step;
        setStep(0);
        if ( currentStep <= 3) {
            
            setTimeout(() => {
                setStep(currentStep + 1);
            }, 2000);
        }else{
            setTimeout(() => {
                setStep(4);
            }, 2000);
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
            case 0:
                return <Loader />;
            case 1:
                return <FirstStep />;
            case 2:
                return <SecondStep />;
            case 3:
                return <ThirdStep />;
            case 4:
                return <Error/>
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
                            <br/>
                            <p>Faça uma simulação do seu crédito e obtenha condições exclusivas.</p>
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
                    {/* <Cards logo={<RiCustomerService2Fill size={40} color="#13366f" />}
                        title={"Atendimento ao cliente excepcional"}
                        text={"Nossos consultores financeiros dedicados estão sempre disponíveis para ajudá-lo a navegar por suas opções e garantir que você esteja totalmente informado e confortável com suas decisões financeiras"} /> */}
                </div>
            </section>
            <Void/>
            <MidSection/>
            <Void />
            <MidBanner />
            <Void />
            <div className="faq-equity">
                <div className="title-faq">
                    <h1>Perguntas frequentes</h1>
                </div>
                <div className="faq-wrapper">
                    <Faq question={"Posso usar imoveis de terceiros como garantia no Home Equity?"} answer={"Sim, é possível! Contanto que o proprietário esteja de acordo, o imóvel de terceiros pode ser a chave para desbloquear seu potencial financeiro."} />
                    <Faq question={"O imóvel precia estar averbado para solicitar o Home Equity? "} answer={"Sim, a averbação do imóvel é essencial. Trata-se da garantia de que o imóvel está em conformidade legal, proporcionando segurança tanto para você quanto para a instituição financeira."} />
                    <Faq question={"Quais tipos de imóveis posso usar no Home Equity?"} answer={"Seja residencial ou comercial, urbano ou rural, seu imóvel pode ser um ativo valioso na busca por crédito. Descubra o poder escondido em suas propriedades!"} />
                    <Faq question={"Posso cmpor renda com pessoa juridica ou outras pessoas físicas?"} answer={"Com certeza! Compor renda permite que você potencialize seu poder de obtenção de crédito, acelerando o crescimento do seu negócio. Unir forças nunca foi tão lucrativo!"} />
                    <Faq question={"Estou negativado, ainda assim posso solicitar o Home Equity?"} answer={"Sim, ainda há esperança! O Home Equity pode ser uma solução viável mesmo para quem está negativado. Porque acreditamos no seu potencial e na sua capacidade de superar obstáculos."} />
                </div>

            </div>
            <Void />
            <Footer />
        </>
    )
}

export default homeEquity;
