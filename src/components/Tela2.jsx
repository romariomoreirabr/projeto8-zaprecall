import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

import { useState } from "react";

export default function Tela2() {
    const [contadorRespostas, setContadorRespostas] = useState(0);
    const [informacaoResposta, setInformacaoResposta] = useState([]);
    let arrayInformacoes = informacaoResposta;
    function getInfomacoesFooter(contador, informacao) {
        arrayInformacoes.push(informacao);
        console.log("Contador:" + contador);
        setContadorRespostas(contadorRespostas + contador);
        setInformacaoResposta(arrayInformacoes);
        setTimeout(() => {console.log("Contador Resposta: " + contadorRespostas + "\nInfo Resposta: " + informacaoResposta);}, 3000)
        
    }

    let qtdFlashcard = 8;

    return (
        <section className="tela2">
            <Header />
            <Main qtdFlashcard = {qtdFlashcard} getInfomacoesFooter = {getInfomacoesFooter} />
            <Footer qtdFlashcard = {qtdFlashcard} contadorRespostas = {contadorRespostas} informacaoResposta={informacaoResposta} />
        </section>
    )
}