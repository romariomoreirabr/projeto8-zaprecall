
import Flashcard from "./Flashcard";

export default function Main (props) {
    const {qtdFlashcard} = props;
    const {getValorContador} = props;
    let conteudos = [];

    // const quizzes = [
    //     {
    //         pergunta: "O que é JSX?",
    //         resposta: "JSX é uma sintaxe para escrever HTML dentro do JS"
    //     },
    //     {
    //         pergunta: "O React é __",
    //         resposta: "uma biblioteca JavaScript para construção de interfaces"
    //     },
    //     {
    //         pergunta: "Componentes devem iniciar com __ ",
    //         resposta: "letra maiúscula"
    //     },
    //     {
    //         pergunta: "Podemos colocar __ dentro do JSX",
    //         resposta: "expressões"
    //     },
    //     {
    //         pergunta: "O ReactDOM nos ajuda __",
    //         resposta: "interagindo com a DOM para colocar componentes React na mesma"
    //     },
    //     {
    //         pergunta: "Usamos o npm para __",
    //         resposta: "gerenciar os pacotes necessários e suas dependências"
    //     },
    //     {
    //         pergunta: "Usamos props para __ ",
    //         resposta: "passar diferentes informações para componentes "
    //     },
    //     {
    //         pergunta: "Usamos estado (state) para __ ",
    //         resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    //     }
    // ]
    for (let i = 0; i < qtdFlashcard; i++){
        conteudos.push(<Flashcard key={i} contador = {i} getValorContador= {getValorContador}/>)
    }
    return (
       <main>
           {conteudos.map((conteudo) => conteudo)}
       </main>
    )
 }