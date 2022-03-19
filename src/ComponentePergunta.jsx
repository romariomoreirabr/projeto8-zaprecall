export default function ComponentePergunta(props) {
    return (
        props.visibilidade === false ? <></> :
        <>
            <span>{props.pergunta}</span>
            <img src="./img/setinha.svg" alt="setinha" />
        </>
    )
}