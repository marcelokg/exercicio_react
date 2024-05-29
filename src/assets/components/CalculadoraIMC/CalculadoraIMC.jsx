import { useState } from "react";

function CalculadoraIMC (){
    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)
    const [imc, setImc] = useState(0)

    const alteraAltura = (evento) =>{
        setAltura(parseFloat(evento.target.value)/100)
    }

    const alteraPeso = (evento) =>{
        setPeso(parseFloat(evento.target.value))
    }

    const calcular = () => {
        const resultado = peso / (altura*altura)
        setImc(resultado.toFixed(2))
    }

    return(
        <div className="container">
            <h1>Calculadora IMC</h1>
            <input type="number" placeholder="Altura (cm)" onChange={alteraAltura}/>
            <input type="number" placeholder="Peso (kg)" onChange={alteraPeso} />
            <button onClick={calcular}>Calcular</button>
            {imc != 0 && <p>O Seu IMC é {imc} kg/m²</p>}

            {imc > 0 && imc <= 18.5 && <p>IMC &le; 18,50kg/m²: Você Está Com Baixo Peso</p>}

            {imc > 18.5 && imc <= 24.9 && <p>IMC &gt; 18,50kg/m² Até 24,90kg/m²: Você Está Com Peso Adequado</p>}

            {imc >= 25 && imc <= 29.9 && <p>IMC &ge; 25kg/m² Até 29,9kg/m²: Você Está Com Sobrepeso</p>}

            {imc > 29.9 && imc <= 34.9 && <p>IMC &ge; 29,90kg/m² Até 34,9kg/m²: Você Está Com Obesidadae Grau 1</p>}

            {imc > 34.9 && imc <= 39.9 && <p>IMC &ge; 34,90kg/m² Até 39,90kg/m²: Você Está Com Obesidadae Grau 2</p>}

            {imc > 39.91 && <p>IMC &ge; 39,91kg/m²: Você Está Com Obesidadae Grau 3</p>}
        </div>
    )
}
export default CalculadoraIMC