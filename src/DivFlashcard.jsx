export default function DivFlashcard(props) {
    return (
        <div className="flashcard">
            <span>Pergunta {props.contador}</span>
            <img src="./img/play.svg" alt="play" />
        </div>
    )
}