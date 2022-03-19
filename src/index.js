import ReactDom from "react-dom"
import App from "./components/App";

function redenrizarNaTela() {
    return (
        <App />
    )
}

ReactDom.render(redenrizarNaTela(), document.querySelector(".root"));