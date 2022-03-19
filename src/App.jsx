import Tela1 from "./Tela1";
import Tela2 from "./Tela2";

import React from "react";
export default function App() {
    const [iniciarRecall, setIniciarRecall] = React.useState(false);
    return (
        iniciarRecall === false ? 
            <Tela1 setIniciarRecall={setIniciarRecall}/>
            : <Tela2 />
    );
}