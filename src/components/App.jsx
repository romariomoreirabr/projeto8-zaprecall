import Tela1 from "./Tela1";
import Tela2 from "./Tela2";
import "../styles/reset.css";
import "../styles/estilo.css";

import React from "react";
export default function App() {
    const [iniciarRecall, setIniciarRecall] = React.useState(false);
    const qtdFlashcard = 8; //manual
    let list = gerarListaAleatorio (qtdFlashcard);
    return (
        iniciarRecall === false ? 
            <Tela1 setIniciarRecall={setIniciarRecall}/>
            : <Tela2 list={list} qtdFlashcard={qtdFlashcard}/>
    );
}

function gerarListaAleatorio (qtdFlashcard) {
    let list = [];
    let randomNumber;
    let tmp;
    for (let i = 0; i < qtdFlashcard; i++) {
        list[i] = i;
    }
    
    for (let i = list.length; i;) {
        randomNumber = Math.random() * i-- | 0;
        tmp = list[randomNumber];
        // troca o número aleatório pelo atual
        list[randomNumber] = list[i];
        // troca o atual pelo aleatório
        list[i] = tmp;
    }
    return list;
}