import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

export default function Tela2() {
    // const footer = {texto: "0/4 CONCLUÍDOS"}
    let qtdFlashcard = 8;
    let textoFooter = ` 0/${qtdFlashcard} CONCLUÍDOS`;

    return (
        <section className="tela2">
            <Header />
            <Main qtdFlashcard = {qtdFlashcard} />
            <Footer texto = {textoFooter} />
        </section>
    )
}