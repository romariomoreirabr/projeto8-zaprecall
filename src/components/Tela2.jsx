import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

import { useState } from "react";

export default function Tela2() {
    const [contadorRespostas, setContadorResposta] = useState(0);
    function getValorContador(contador) {
        console.log("Contador:" + contador);
        setContadorResposta(contadorRespostas + contador);
        console.log("Contador Resp:" + contadorRespostas);
    }

    let qtdFlashcard = 8;

    return (
        <section className="tela2">
            <Header />
            <Main qtdFlashcard = {qtdFlashcard} getValorContador = {getValorContador} />
            <Footer qtdFlashcard = {qtdFlashcard} contadorRespostas = {contadorRespostas} />
        </section>
    )
}