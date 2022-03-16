import DivPergunta from "./DivPergunta";

export default function Main () {
    const qtdPerguntas = 8;
    let conteudos = []
    for (let i = 0; i < qtdPerguntas; i++){
        conteudos.push(DivPergunta(i));
    }
    return (
       <main>
           {conteudos.map((conteudo) => conteudo)}
       </main>
    )
}