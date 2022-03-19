import { useState } from "react";
// import { useEffect } from "react";

export default function Flashcard(props) {
    const [rederenrizado, setRedenrizado] = useState("flashcard");
    const {contador} = props;
    const {getInfomacoesFooter} = props;
    const {quizz} = props;
    const {pergunta, resposta} = quizz;

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
                    <button className="naoLembrei" onClick={() => { setRedenrizado("naoLembrei"); getInfomacoesFooter(1,"naoLembrei"); }} >Não lembrei!</button>
                    <button className="quaseNaoLembrei" onClick={() => { setRedenrizado("quaseNaoLembrei"); getInfomacoesFooter(1,"quaseNaoLembrei"); }}>Quase não lembrei!</button>
                    <button className="lembrei" onClick={() => { setRedenrizado("lembrei"); getInfomacoesFooter(1,"lembrei"); }}>Zap!</button>
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