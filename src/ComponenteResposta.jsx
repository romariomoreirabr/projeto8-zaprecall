export default function ComponenteResposta(props) {
    return (
        props.visibilidade === false ? <></> :
        <>
            <span>{props.resposta}</span>
            <div className="botoes">
                <button className="naoLembrei">Não lembrei!</button>
                <button className="quaseNaoLembrei">Quase não lembrei!</button>
                <button className="lembrei">Zap!</button>
            </div>
        </>
    )
}