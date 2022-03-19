import ComponentePergunta from "./ComponentePergunta"
import ComponenteResposta from "./ComponenteResposta";

export default function DivPerguntaResposta() {
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
    let {pergunta} = quizzes[0];
    let {resposta} = quizzes[0];
    return (
        <div className="perguntaResposta">
            <ComponentePergunta pergunta={pergunta} visibilidade = {true} />
            <ComponenteResposta resposta = {resposta} visibilidade = {false} />
        </div>
    )
}