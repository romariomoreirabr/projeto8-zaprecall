import React from "react";

export default function Tela1({setIniciarRecall}) {

    // const classeCSS = (habilitaTela2 === true ? "tela1 escondido" : "tela1")
    return (
        <main className="tela1">
            <img src="./img/logo.png" alt="logo" />
            <span>ZapRecall</span>
            <button onClick={() => {setIniciarRecall(true)}}>Iniciar Recall!</button>
        </main>
    )
}