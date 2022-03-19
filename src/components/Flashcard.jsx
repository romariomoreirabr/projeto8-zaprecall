import { useState } from "react";
// import { useEffect } from "react";

export default function Flashcard(props) {
    const [rederenrizado, setRedenrizado] = useState("flashcard");
    const {contador} = props;
    const {getValorContador} = props;

    const quizzes = [
        {
            pergunta: "O que é JSX?",
            resposta: "JSX é uma sintaxe para escrever HTML dentro do JS"
        },
        {
            pergunta: "O React é __",
            resposta: "uma biblioteca JavaScript para construção de interfaces"
        },
        {
            pergunta: "Componentes devem iniciar com __ ",
            resposta: "letra maiúscula"
        },
        {
            pergunta: "Podemos colocar __ dentro do JSX",
            resposta: "expressões"
        },
        {
            pergunta: "O ReactDOM nos ajuda __",
            resposta: "interagindo com a DOM para colocar componentes React na mesma"
        },
        {
            pergunta: "Usamos o npm para __",
            resposta: "gerenciar os pacotes necessários e suas dependências"
        },
        {
            pergunta: "Usamos props para __ ",
            resposta: "passar diferentes informações para componentes "
        },
        {
            pergunta: "Usamos estado (state) para __ ",
            resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        }
    ]
    const pergunta = quizzes[contador].pergunta;
    const resposta = quizzes[contador].resposta;

    let componenteRedenrizado = null;

    if (rederenrizado === "flashcard") {
        componenteRedenrizado =
            <div className="flashcard">
                <span>Pergunta {contador + 1}</span>
                <img src="./img/play.svg" alt="play" onClick={() => { setRedenrizado("pergunta") }} />
            </div>

    } else if (rederenrizado === "pergunta") {
        componenteRedenrizado =
            <div className="perguntaResposta">
                <span>{pergunta}</span>
                <img src="./img/setinha.svg" alt="setinha" onClick={() => { setRedenrizado("resposta") }} />
            </div>

    } else if (rederenrizado === "resposta") {
        componenteRedenrizado =
            <div className="perguntaResposta">
                <span>{resposta}</span>
                <div className="botoes">
                    <button className="naoLembrei" onClick={() => { setRedenrizado("naoLembrei"); getValorContador(1); }} >Não lembrei!</button>
                    <button className="quaseNaoLembrei" onClick={() => { setRedenrizado("quaseNaoLembrei"); getValorContador(1); }}>Quase não lembrei!</button>
                    <button className="lembrei" onClick={() => { setRedenrizado("lembrei"); getValorContador(1); }}>Zap!</button>
                </div>
            </div>
    } else if (rederenrizado === "naoLembrei") {
            
            componenteRedenrizado =
                <div className="flashcard naoLembrei">
                    <span>Pergunta {contador + 1}</span>
                    <img src="./img/x.svg" alt="errado" />
                </div>
        } else if (rederenrizado === "quaseNaoLembrei") {

            componenteRedenrizado =
                <div className="flashcard quaseNaoLembrei">
                    <span>Pergunta {contador + 1}</span>
                    <img src="./img/interrogacao.svg" alt="interrogação" />
                </div>
        } else if (rederenrizado === "lembrei") {

            componenteRedenrizado =
                <div className="flashcard lembrei">
                    <span>Pergunta {contador + 1}</span>
                    <img src="./img/v.svg" alt="acertou" />
                </div>
        }
    return (
        componenteRedenrizado
    );

}