
import Flashcard from "./Flashcard";

export default function Main (props) {
    const {qtdFlashcard} = props;
    const {getInfomacoesFooter} = props;
    let conteudos = [];

    for (let i = 0; i < qtdFlashcard; i++){
        conteudos.push(<Flashcard key={i} contador = {i} getInfomacoesFooter= {getInfomacoesFooter}/>)
    }
    return (
       <main>
           {conteudos.map((conteudo) => conteudo)}
       </main>
    )
 }