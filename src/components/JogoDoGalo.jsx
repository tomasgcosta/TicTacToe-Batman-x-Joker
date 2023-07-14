//Se for export normal
import { useState } from 'react';
import {
    adicionarJogada,
    casaVazia,
    verificarFimDoJogo,
    verificarVencedor
} from '../auxiliary/logica';

//Se for export normal default
// import dtjrehreh from './aux/logica';

const jogoVazio = {
    tabuleiro: [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "],
    ],
    jogadorAtual: "X"
}

export function JogoDoGalo(props) {
    const [jogo, setJogo] = useState(jogoVazio)

    const handleRestart = () => {
        setJogo(jogoVazio)
    }
    const handleGridClick = (line, column) => {
        if (jogo.tabuleiro[line][column] !== casaVazia) return


        const jogoAtualizado = adicionarJogada(jogo, jogo.jogadorAtual, line, column)
        setJogo(jogoAtualizado)
    }

    return (
        
        <div className='fullTabuleiro'>
            {/* {!verificarFimDoJogo(jogo) && <p>Jogador Atual: {jogo.jogadorAtual}</p>}
            {verificarFimDoJogo(jogo) && <p>JOGO TERMINADO!</p>} */}
            <div className='tabuleiro'>
                { //Tabuleiro
                    jogo.tabuleiro.map((line, i) => (
                        <div className='gridRow' key={i}>
                            {line.map((cell, j) => (
                                <div
                                    onClick={() => handleGridClick(i, j)}
                                    className='gridCell'
                                    key={`${i} ${j}`}
                                >
                                    {cell === 'X' ? <img src='./image/batman_play.png' width={100} /> : cell === 'O' && <img src='./image/joker_play.png' width={100} />}
                                </div>
                            ))}
                        </div>
                    ))
                }
            </div>
            <div className='direitaTabuleiro'>
                <div className='TTTHeader'>
                    {
                        verificarFimDoJogo(jogo) ?
                            <p className='gameFinish'>JOGO TERMINADO!</p> :
                            <p className='gameHeader'>Jogador Atual<div className='player'>{jogo.jogadorAtual === 'X' ? <img src='./image/batman_play.png' width={100} /> : jogo.jogadorAtual === 'O' && <img src='./image/joker_play.png' width={100} />} </div></p>
                    }

                    {
                        verificarVencedor(jogo) != undefined && <p className='vencedor'>Vencedor<br /> {verificarVencedor(jogo) === 'X' ? <img src='./image/batman_win.png' width={100} /> : verificarVencedor(jogo) === 'O' && <img src='./image/joker_win.png' width={100} />}</p>
                    }
                </div>
                <div className='btnResetPos'>
                    <button className='btnReset' onClick={() => handleRestart()}><span className='btnSpan'>Reiniciar</span></button>
                </div>
            </div>
        </div>
    )
}