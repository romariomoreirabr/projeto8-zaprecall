import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

import { useState } from "react";

export default function Tela2({list, qtdFlashcard}) {
    const [contadorRespostas, setContadorRespostas] = useState(0);
    const [informacaoResposta, setInformacaoResposta] = useState([]);
    let arrayInformacoes = informacaoResposta;
    // let qtdFlashcard = 8;
    function getInfomacoesFooter(contador, informacao) {
        arrayInformacoes.push(informacao);
        setContadorRespostas(contadorRespostas + contador);
        setInformacaoResposta(arrayInformacoes);
    }

    return (
        <section className="tela2">
            <Header />
            <Main qtdFlashcard = {qtdFlashcard} getInfomacoesFooter = {getInfomacoesFooter} list = {list} />
            <Footer qtdFlashcard = {qtdFlashcard} contadorRespostas = {contadorRespostas} informacaoResposta={informacaoResposta} />
        </section>
    )
}