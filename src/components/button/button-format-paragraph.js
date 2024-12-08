import { useState } from "react";
import './button.css';

const BotaoFormatarParagrafo = ({ texto, corInicial, corNova }) => {
    const [cor, setCor] = useState(corInicial);

    const [textoFormatado, setTextoFormatado] = useState(texto);

    function letrasMaisculas() {
        return setTextoFormatado(texto.toUpperCase())
    };

    function trocarCor() {
        setCor(corNova);
    };

    function formatarParagrafo() {
        letrasMaisculas()
        trocarCor()
    }

    return (
        <div>
            <p style= {{ color: cor}}> {textoFormatado} </p>

            <button className='btn' onClick={formatarParagrafo}> Clique para Formatar o Parágrafo </button>
        </div>
    )
};

export default BotaoFormatarParagrafo;