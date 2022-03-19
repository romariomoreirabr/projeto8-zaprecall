import { useState } from "react";

export default function Flashcard(props) {
    const [rederenrizado, setRedenrizado] = useState("flashcard");
    const { contador } = props;

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
                    <button className="naoLembrei">Não lembrei!</button>
                    <button className="quaseNaoLembrei">Quase não lembrei!</button>
                    <button className="lembrei">Zap!</button>
                </div>
            </div>
        );
    }

}