import { useEffect, useState } from "react"

export function Contador(props) {
    // let valor = 0;
    const [valor, setValor] = useState(0)

    useEffect(() => {
        console.log("OLA DO EFFECT")
    }, [valor])

    // useEffect(() => { }, [valor])




    return (
        <div>
            {valor}
            <button onClick={() => {

                //incrementar o state
                setValor((valorAnterior) => {
                    console.log(valorAnterior)
                    return valorAnterior + 1
                })
                setValor(valor + 1)

                //State ainda não atualizou
                // console.log(valor)


                // setValor(4)
                props.alterarEstado()
            }}>+</button>
        </div>
    )
}
