import { useState } from "react";

export default function Flashcard(props) {
    const [rederenrizado, setRedenrizado] = useState("flashcard");
    const {contador} = props;
    const {atualizarContadorResposta} = props;

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


    if (rederenrizado === "flashcard") {
        return (
            <div className="flashcard">
                <span>Pergunta {contador + 1}</span>
                <img src="./img/play.svg" alt="play" onClick={() => { setRedenrizado("pergunta") }} />
            </div>
        );
    } else if (rederenrizado === "pergunta") {
        return (
            <div className="perguntaResposta">
                <span>{pergunta}</span>
                <img src="./img/setinha.svg" alt="setinha" onClick={() => { setRedenrizado("resposta") }} />
            </div>
        );

    } else if (rederenrizado === "resposta") {
        return (
            <div className="perguntaResposta">
                <span>{resposta}</span>
                <div className="botoes">
                    <button className="naoLembrei" onClick={() => { setRedenrizado("naoLembrei") }} >Não lembrei!</button>
                    <button className="quaseNaoLembrei" onClick={() => { setRedenrizado("quaseNaoLembrei") }}>Quase não lembrei!</button>
                    <button className="lembrei" onClick={() => { setRedenrizado("lembrei") }}>Zap!</button>
                </div>
            </div>
        );
    } else if (rederenrizado === "naoLembrei") {
        atualizarContadorResposta(1);
        return (
            <div className="flashcard naoLembrei">
                <span>Pergunta {contador + 1}</span>
                <img src="./img/x.svg" alt="errado" />
            </div>
        );
    } else if (rederenrizado === "quaseNaoLembrei") {
        return (
            <div className="flashcard quaseNaoLembrei">
                <span>Pergunta {contador + 1}</span>
                <img src="./img/interrogacao.svg" alt="interrogação" />
            </div>
        );
    } else if (rederenrizado === "lembrei") {
        return (
            <div className="flashcard lembrei">
                <span>Pergunta {contador + 1}</span>
                <img src="./img/v.svg" alt="acertou" />
            </div>
        );
    }

}