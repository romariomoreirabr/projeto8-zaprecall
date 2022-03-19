import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

import { useState } from "react";

export default function Tela2() {
    const [contadorRespostas, setContadorResposta] = useState(0);

    let qtdFlashcard = 8;
    let textoFooter = ` ${contadorRespostas}/${qtdFlashcard} CONCLUÍDOS`;

    function atualizarContadorResposta (contadorResp){
        // console.log("Passei aqui " + contadorResp);
        // setContadorResposta(contadorRespostas + contadorResp);
        // console.log("ContadorRespostas " + contadorRespostas);
    }

    return (
        <section className="tela2">
            <Header />
            <Main qtdFlashcard = {qtdFlashcard} atualizarContadorResposta = {atualizarContadorResposta} />
            <Footer texto = {textoFooter} />
        </section>
    )
}