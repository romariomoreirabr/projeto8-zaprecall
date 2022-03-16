import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"

export default function Tela2() {
    // const footer = {texto: "0/4 CONCLUÍDOS"}
    return (
        <section className="tela2">
            <Header />
            <Main></Main>
            <Footer texto = "0/4 CONCLUÍDOS" />
        </section>
    )
}