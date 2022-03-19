// import DivFlashcard from "./DivFlashcard";
// import DivPerguntaResposta from "./DivPerguntaResposta";

// export default function Main (props) {
//     const qtdFlashcard = props.qtdFlashcard;
//     let conteudos = [];
//     for (let i = 0; i < qtdFlashcard; i++){
//         conteudos.push(<DivFlashcard key={i} contador = {i + 1} />)
//     }
//     return (
//        <main>
//            <DivPerguntaResposta />
//            {conteudos.map((conteudo) => conteudo)}
//        </main>
//     )
// }
import Flashcard from "./Flashcard";

export default function Main (props) {
    const {qtdFlashcard} = props;
    const {atualizarContadorResposta} = props;
    let conteudos = [];
    for (let i = 0; i < qtdFlashcard; i++){
        conteudos.push(<Flashcard key={i} contador = {i} atualizarContadorResposta= {atualizarContadorResposta}/>)
    }
    return (
       <main>
           {conteudos.map((conteudo) => conteudo)}
       </main>
    )
 }