// import { useState } from "react";
// import { useEffect } from "react";
export default function Footer(props) {
    const { qtdFlashcard } = props;
    const { contadorRespostas } = props;
    const { informacaoResposta } = props;
    let temErrado = false;
    let imagens = <></>

    let textoFooter = ` ${contadorRespostas}/${qtdFlashcard} CONCLUÍDOS`;
    return (
        <>
            {
                imagens = informacaoResposta.map((info, index) => {
                    let imagem = <></>;
                    if (info === "naoLembrei") {
                        temErrado = true;
                        imagem = <img src="./img/x.svg" alt="errado" />
                    } else if (info === "quaseNaoLembrei") {
                        imagem = <img src="./img/interrogacao.svg" alt="interrogação" />
                    } else if (info === "lembrei") {
                        imagem = <img src="./img/v.svg" alt="acertou" />
                    }
                    return (
                        <div key={info + index}>
                            {imagem}
                        </div>
                    );
                }
                )
            }
            {(contadorRespostas === qtdFlashcard ?
                < footer className="resultado" >
                    {(temErrado ?
                        <>
                            <div className="reacao">
                                <img src="./img/sad.svg" alt="sad"></img>
                                <strong>Puts!</strong>
                            </div>
                            <p>Ainda faltam alguns...
                                Mas não desanime!</p>
                        </>
                        :
                        <>
                            <div className="reacao">
                                <img src="./img/party.svg" alt="party"></img>
                                <strong>Parabéns!</strong>
                            </div>
                            <p>Você não esqueceu de nenhum flashcard!</p>
                        </>
                    )}

                    <span>{textoFooter}</span>
                    <div>
                        {imagens}
                    </div>
                </footer >
                :
                < footer >
                    <span>{textoFooter}</span>
                    <div>
                        {imagens}
                    </div>
                </footer >)
            }
        </>
    )
}