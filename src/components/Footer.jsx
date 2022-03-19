// import { useState } from "react";
// import { useEffect } from "react";
export default function Footer(props) {
    const {qtdFlashcard} = props;
    const {contadorRespostas} = props;
    // const [contadorRespostas, setContadorResposta] = useState(0);
    // setContadorResposta(contadorRespostas + contadorR);
    // useEffect(() => { setContadorResposta(contadorRespostas + contadorR)},[contadorRespostas, contadorR]);
    console.log("Contador Resposta: " + contadorRespostas);
    let textoFooter = ` ${contadorRespostas}/${qtdFlashcard} CONCLUÍDOS`;
    return (
        <footer><span>{textoFooter}</span></footer>
    )
}